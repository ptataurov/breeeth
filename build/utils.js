const { lstatSync, readdirSync } = require('fs')
const { join, basename } = require('path')

const isDirectory = source => lstatSync(source).isDirectory()

const getDirectoriesBasenames = source =>
  readdirSync(source)
    .map(name => join(source, name))
    .filter(isDirectory)
    .map(dir => basename(dir))

module.exports.isDirectory = isDirectory
module.exports.getDirectoriesBasenames = getDirectoriesBasenames
