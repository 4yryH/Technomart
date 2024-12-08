let deliveryButton = document.querySelector('.delivery-button')
let warantryButton = document.querySelector('.warantry-button')
let creditButton = document.querySelector('.credit-button')
let delivery = document.querySelector('.services-delivery')
let warantry = document.querySelector('.services-warantry')
let credit = document.querySelector('.services-credit')

deliveryButton.addEventListener('click', function () {
    deliveryButton.classList.add('services-button-current')
    delivery.classList.remove('hidden')
    if (warantryButton.classList.contains('services-button-current')) {
        warantryButton.classList.remove('services-button-current')
        warantry.classList.add('hidden')
    } if (creditButton.classList.contains('services-button-current')) {
        creditButton.classList.remove('services-button-current')
        credit.classList.add('hidden')
    }
    deliveryButton.blur()
})

warantryButton.addEventListener('click', function () {
    warantryButton.classList.add('services-button-current')
    warantry.classList.remove('hidden')
    if (deliveryButton.classList.contains('services-button-current')) {
        deliveryButton.classList.remove('services-button-current')
        delivery.classList.add('hidden')
    } if (creditButton.classList.contains('services-button-current')) {
        creditButton.classList.remove('services-button-current')
        credit.classList.add('hidden')
    }
    warantryButton.blur()
})

creditButton.addEventListener('click', function () {
    creditButton.classList.add('services-button-current')
    credit.classList.remove('hidden')
    if (deliveryButton.classList.contains('services-button-current')) {
        deliveryButton.classList.remove('services-button-current')
        delivery.classList.add('hidden')
    } if (warantryButton.classList.contains('services-button-current')) {
        warantryButton.classList.remove('services-button-current')
        warantry.classList.add('hidden')
    }
    creditButton.blur()
})