import '../modal/modal'

const $ = require('jquery')

$(function() {
  const $search = $('.header__search', '.header')
  const $hamburger = $('.header__btn-hamburger')
  const $categoryNav = $('.header__category-nav', '.header')

  $hamburger.click(function() {
    $(this).toggleClass('header__btn-hamburger--active')
    $categoryNav.toggleClass('header__category-nav--show')
  })

  $(window).resize(function() {
    $hamburger.removeClass('header__btn-hamburger--active')

    $categoryNav.removeClass('header__category-nav--show')
  })

  $search.click(function(e) {
    e.preventDefault()

    $(this).addClass('header__search--active')
  })

  $(document).click(function(e) {
    if (
      $search.hasClass('header__search--active') &&
      !$(e.target).is('.header__search-input, .header__btn-search *')
    ) {
      $search.removeClass('header__search--active')
    }
  })
})
