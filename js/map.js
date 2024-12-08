const map = document.querySelector(".modal-map");
const openMap = document.querySelector(".contacts-map");
const closeMap = document.querySelector(".close-map")

openMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  map.classList.add("show-map");
});

closeMap.addEventListener("click", function () {
  map.classList.remove("show-map");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    map.classList.remove("show-map");
  }
});