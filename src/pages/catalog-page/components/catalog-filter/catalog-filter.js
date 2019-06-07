import $ from 'jquery'
import 'jquery-ui-bundle'
import '../../../../assets/js/libs/tooltipster.bundle.min'

$('.checkbox input[type="checkbox"]').each(function() {
  $(this).prop('checked')
    ? $(this)
        .closest('.checkbox')
        .addClass('checked')
    : $(this)
        .closest('.checkbox')
        .removeClass('checked')
})

$('.checkbox input[type="checkbox"]').on('change', function() {
  $(this).prop('checked')
    ? $(this)
        .closest('.checkbox')
        .addClass('checked')
    : $(this)
        .closest('.checkbox')
        .removeClass('checked')
})

$('.s_catalog__filter__btn').on('click', function() {
  $(this).toggleClass('active')
  $('.s_catalog__filter__params').slideToggle()
})

function thouthandSeparator(val) {
  return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}

$('.slider-range').each(function() {
  let min = +($(this).data('min') + '').replace(' ', '')
  let max = +($(this).data('max') + '').replace(' ', '')
  let start = +($(this).data('start') + '').replace(' ', '')
  let end = +($(this).data('end') + '').replace(' ', '')
  if (!start) {
    start = min
  }
  if (!end) {
    end = max
  }
  $(this).slider({
    range: true,
    min: min,
    max: max,
    values: [start, end],
    create: function() {
      $(this)
        .find('.ui-slider-handle')
        .first()
        .attr('data-val', thouthandSeparator(start))
      $(this)
        .find('.ui-slider-handle')
        .last()
        .attr('data-val', thouthandSeparator(end))
    },
    slide: function(event, ui) {
      $(ui.handle).attr('data-val', thouthandSeparator(ui.value))
    }
  })
})

$('.tooltip').tooltipster({
  animation: 'fade',
  delay: 200,
  trigger: 'click',
  theme: ['tooltipster-shadow'],
  maxWidth: 500
})

$('.checkbox input[type="checkbox"]').each(function() {
  $(this).prop('checked')
    ? $(this)
        .closest('.checkbox')
        .addClass('checked')
    : $(this)
        .closest('.checkbox')
        .removeClass('checked')
})

$('.checkbox input[type="checkbox"]').on('change', function() {
  $(this).prop('checked')
    ? $(this)
        .closest('.checkbox')
        .addClass('checked')
    : $(this)
        .closest('.checkbox')
        .removeClass('checked')
})
