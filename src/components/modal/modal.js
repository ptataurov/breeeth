import $ from 'jquery'

$(function() {
  $('.header__btn-location').click(function() {
    $('.modal').addClass('modal--show')
  })

  $('.modal__close').click(function() {
    $('.modal').removeClass('modal--show')
  })
})
