import './header.scss'

const $ = window.$

$(function() {
  const $headerNav = $('.header__nav', '.header')

  $('.header__search').on('click', function(e) {
    e.preventDefault()
    $(this).addClass('active')
  })

  $(document).mouseup(function(e) {
    let button = $('.header__search, .header__search *')
    if (!button.is(e.target)) {
      $('.header__search').removeClass('active')
    }
  })

  $('.header__bars').on('click', function(e) {
    e.preventDefault()
    $(this).toggleClass('active')
    $headerNav.slideToggle()
  })

  $(window).resize(function() {
    if ($(this).width() > 768 && $headerNav.is(':hidden')) {
      $headerNav.css({
        display: ''
      })
    }
  })
})
