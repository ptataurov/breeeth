const $ = require('jquery')

const slider = (el, isDouble) => {
  const $container = $(el)
  const $list = $('[data-container]', $container)
  const $items = $('[data-items]', $container)
  const $btnPrev = $('[data-btn-prev]', $container)
  const $btnNext = $('[data-btn-next]', $container)

  let translateWidth = 0
  let countLeft = 0
  let defaultCountRight = isDouble ? ($items.length - 2) / 2 : $items.length - 1

  let countRight = defaultCountRight
  let itemWidth = $items.width()

  $(window).resize(function() {
    translateWidth = 0
    $list.css('transform', `translateX(${translateWidth}px)`)
    countLeft = 0
    countRight = defaultCountRight
    itemWidth = $items.width()
  })

  const nextSlide = () => {
    if (countRight > 0) {
      translateWidth -= itemWidth
      $list.css('transform', `translateX(${translateWidth}px)`)
      countRight--
      countLeft++
    } else {
      translateWidth = 0
      $list.css('transform', 'translateX(0)')
      countRight = defaultCountRight
      countLeft = 0
    }
  }

  const prevSlide = () => {
    if (countLeft > 0) {
      translateWidth += itemWidth
      $list.css('transform', `translateX(${translateWidth}px)`)
      countRight++
      countLeft--
    } else {
      translateWidth = -itemWidth * defaultCountRight
      $list.css('transform', `translateX(${translateWidth}px)`)
      countRight = 0
      countLeft = defaultCountRight
    }
  }

  $btnPrev.click(prevSlide)
  $btnNext.click(nextSlide)
}

export default slider
