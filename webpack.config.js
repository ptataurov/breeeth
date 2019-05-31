const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const { getDirectoriesBasenames } = require('./build/utils.js')
const isDev = process.env.NODE_ENV === 'development'
const pages = getDirectoriesBasenames(path.resolve('./src/pages'))

const instances = pages.map(page => {
  return new HtmlWebpackPlugin({
    template: `./pages/${page}/${page}.pug`,
    filename: `${page}.html`
  })
})

const entries = pages.reduce((acc, page) => {
  acc[page] = `./pages/${page}/${page}.js`

  return acc
}, {})

const config = {
  context: path.resolve(__dirname, 'src'),
  entry: entries,
  devtool: 'inline-source-map',
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist')
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          output: {
            comments: false
          }
        }
      }),
      new OptimizeCSSAssetsPlugin({})
    ],
    splitChunks: {
      chunks: 'all',
      name: 'common',
      minChunks: 2
    }
  },
  devServer: {
    hot: false,
    open: true
  },
  mode: !isDev ? 'production' : 'development',
  watch: isDev,
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [require('autoprefixer')()]
            }
          },
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [
                path.resolve(__dirname, './src/assets/scss/vars.scss'),
                path.resolve(__dirname, './src/assets/scss/mixins.scss')
              ]
            }
          }
        ]
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: './',
              name: 'fonts/[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'img/[name].[ext]'
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              disable: isDev,
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              pngquant: {
                quality: '65-90',
                strip: true
              },
              svgo: {
                cleanupIDs: true
              }
            }
          }
        ]
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: [':src', ':href']
          }
        }
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        options: {
          pretty: isDev
        }
      }
    ]
  },
  plugins: [
    ...instances,
    new MiniCssExtractPlugin('[name].css'),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static'
    })
  ].filter(Boolean)
}

module.exports = config
