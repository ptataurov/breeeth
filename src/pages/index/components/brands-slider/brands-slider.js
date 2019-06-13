import $ from 'jquery'
import '../../../../assets/js/libs/slick'

$(function() {
  $('.brands-slider__list').slick({
    slidesToShow: 4,
    prevArrow:
      '<button type="button" class="brands-slider__btn-prev slick-arrow slick-prev"><svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.297211 7.69307L6.31699 13.7127C6.69992 14.0958 7.32077 14.0958 7.70352 13.7127C8.08629 13.3299 8.08629 12.7091 7.70352 12.3263L2.37695 6.9999L7.70336 1.67367C8.08614 1.29074 8.08614 0.669973 7.70336 0.287198C7.32059 -0.0957326 6.69976 -0.0957326 6.31683 0.287198L0.297056 6.30688C0.105669 6.49836 0.0100827 6.74905 0.0100827 6.99987C0.0100827 7.25081 0.105855 7.50168 0.297211 7.69307Z" fill="#333333"/></svg></button>',
    nextArrow:
      '<button type="button" class="brands-slider__btn-next slick-arrow slick-next"><svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.70291 7.69307L1.68313 13.7127C1.3002 14.0958 0.679348 14.0958 0.296603 13.7127C-0.0861724 13.3299 -0.0861724 12.7091 0.296603 12.3263L5.62318 6.9999L0.296758 1.67367C-0.0860176 1.29074 -0.0860176 0.669973 0.296758 0.287198C0.679534 -0.0957326 1.30036 -0.0957326 1.68329 0.287198L7.70307 6.30688C7.89445 6.49836 7.99004 6.74905 7.99004 6.99987C7.99004 7.25081 7.89427 7.50168 7.70291 7.69307Z" fill="#333333"/></svg></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  })
})
