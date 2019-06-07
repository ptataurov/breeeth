const $ = require('jquery')

const $modal = $('.catalog-section__modal')

const $banner = $('.catalog-section__banner', '.catalog-section')

$banner.click(function() {
  $modal.css('display', 'flex').animate(
    {
      opacity: 1
    },
    200
  )
})

$('.catalog-section__modal-btn-close').click(function() {
  $modal.animate(
    {
      opacity: 0
    },
    200,
    function() {
      $(this).hide()
    }
  )
})
