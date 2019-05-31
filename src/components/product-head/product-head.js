import './product-head.scss'

const $ = window.$

const $fixedTarget = $('.product-head__scroll-wrap', '.product-head')
const $imageBlock = $('.product-head__product-img-block', '.product-head')
const offsetTarget = $fixedTarget.offset().top

const marginTop = $fixedTarget.height()

const fixedProductNav = function() {
  if ($(window).scrollTop() >= offsetTarget) {
    $fixedTarget.addClass('product-head__scroll-wrap--fixed')
    $imageBlock.css('marginTop', marginTop)
  } else {
    $fixedTarget.removeClass('product-head__scroll-wrap--fixed')
    $imageBlock.css('marginTop', 0)
  }
}

fixedProductNav()

$(window).scroll(fixedProductNav)

$('.product-head__list-link', '.product-head').each(function() {
  const linkTo = $(this).attr('href')
  const $target = $(`${linkTo}`)
  $(this).click(function(e) {
    e.preventDefault()

    $('html, body').animate(
      {
        scrollTop: $target.offset().top - 20 - marginTop
      },
      500
    )
  })
})
