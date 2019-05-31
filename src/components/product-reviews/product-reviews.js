import './product-reviews.scss'

const list = document.querySelector('.product-reviews__container-list')
const items = list.querySelectorAll('.product-reviews__card-list-item')
const btnPrev = document.querySelector(
  '.product-reviews__btn-prev:first-of-type'
)
const btnNext = document.querySelector(
  '.product-reviews__btn-next:last-of-type'
)

let translateWidth = 0
let countLeft = 0
let defaultCountRight = (items.length - 2) / 2
let countRight = defaultCountRight
let itemWidth = items[0].clientWidth

window.addEventListener('resize', () => {
  translateWidth = 0
  list.style.transform = `translateX(${translateWidth}px)`
  countLeft = 0
  countRight = defaultCountRight
  itemWidth = items[0].clientWidth
})

const nextSlide = () => {
  if (countRight > 0) {
    translateWidth -= itemWidth
    list.style.transform = `translateX(${translateWidth}px)`
    countRight--
    countLeft++
  } else {
    translateWidth = 0
    list.style.transform = 'translateX(0)'
    countRight = defaultCountRight
    countLeft = 0
  }
}

const prevSlide = () => {
  if (countLeft > 0) {
    translateWidth += itemWidth
    list.style.transform = `translateX(${translateWidth}px)`
    countRight++
    countLeft--
  } else {
    translateWidth = -itemWidth * defaultCountRight
    list.style.transform = `translateX(${translateWidth}px)`
    countRight = 0
    countLeft = defaultCountRight
  }
}

btnPrev.addEventListener('click', prevSlide)

btnNext.addEventListener('click', nextSlide)
