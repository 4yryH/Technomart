const catalogPromo = document.querySelector('.section-catalog-list')
const slidePromoFirst = catalogPromo.querySelector('.promo .slide-promo-1')
const slidePromoSecond = catalogPromo.querySelector('.promo .slide-promo-2')
const slidePromoNext = catalogPromo.querySelector('.gallery-button-next')
const slidePromoBack = catalogPromo.querySelector('.gallery-button-back')
const sliderPromoContolFirst = catalogPromo.querySelector('.first-control')
const sliderPromoContolSecond = catalogPromo.querySelector('.second-control')

slidePromoNext.addEventListener('click', function (evt) {
    evt.preventDefault()
    slidePromoFirst.classList.toggle('hidden')
    slidePromoSecond.classList.toggle('hidden')
    sliderPromoContolFirst.classList.toggle('slider-controls-current')
    sliderPromoContolSecond.classList.toggle('slider-controls-current')
})

slidePromoBack.addEventListener('click', function (evt) {
    evt.preventDefault()
    slidePromoFirst.classList.toggle('hidden')
    slidePromoSecond.classList.toggle('hidden')
    sliderPromoContolFirst.classList.toggle('slider-controls-current')
    sliderPromoContolSecond.classList.toggle('slider-controls-current')
})

sliderPromoContolFirst.addEventListener('click', function (evt) {
    evt.preventDefault
    if (!sliderPromoContolFirst.classList.contains('slider-controls-current')) {
        sliderPromoContolFirst.classList.toggle('slider-controls-current')
        sliderPromoContolSecond.classList.toggle('slider-controls-current')
        slidePromoFirst.classList.toggle('hidden')
        slidePromoSecond.classList.toggle('hidden')
    }
})

sliderPromoContolSecond.addEventListener('click', function (evt) {
    evt.preventDefault
    if (!sliderPromoContolSecond.classList.contains('slider-controls-current')) {
        sliderPromoContolFirst.classList.toggle('slider-controls-current')
        sliderPromoContolSecond.classList.toggle('slider-controls-current')
        slidePromoFirst.classList.toggle('hidden')
        slidePromoSecond.classList.toggle('hidden')
    }
})