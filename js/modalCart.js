let cartAdd = document.querySelector('.modal-cart-add')
let openCartAdd = document.querySelectorAll('.product-buy')
let closeCartAdd = document.querySelector('.close-modal-add')
let continueCartAdd = document.querySelector('.modal-continue')

console.log(continueCartAdd)

for (let i = 0; i < openCartAdd.length; i++) {
    openCartAdd[i].addEventListener('click', function (evt) {
        evt.preventDefault()
        cartAdd.classList.add('show-modal-cart')
    })
}

closeCartAdd.addEventListener('click', function () {
    cartAdd.classList.remove('show-modal-cart');
})

continueCartAdd.addEventListener('click', function () {
    cartAdd.classList.remove('show-modal-cart');
})

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        cartAdd.classList.remove('show-modal-cart');
    }
});
