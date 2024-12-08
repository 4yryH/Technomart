const feedback = document.querySelector(".modal-feedback");
const openFeedback = document.querySelector(".main-contacts-feedback");
const closeFeedback = document.querySelector(".close-feedback");
const nameFeedback = feedback.querySelector(".feedback-name")
const formFeedback = feedback.querySelector(".feedback-form")
const emailFeedback = feedback.querySelector(".feedback-email")
const messageFeedback = feedback.querySelector(".feedback-message")

let isStorageSupport = true;
let storage = "";
let storageEmail = ""

try {
  storage = localStorage.getItem("name");
  storageEmail = localStorage.getItem("email")
} catch (error) {
  isStorageSupport = false;
}

openFeedback.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedback.classList.add("show-feedback");
  if (storage) {
    nameFeedback.value = storage;
    emailFeedback.value = storageEmail
  }
  nameFeedback.focus();
});

closeFeedback.addEventListener("click", function () {
  feedback.classList.remove("show-feedback");
  feedback.classList.remove("feedback-error");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    feedback.classList.remove("show-feedback");
    feedback.classList.remove("feedback-error");
  }
});

formFeedback.addEventListener("submit", function (evt) {
  if (!nameFeedback.value || !emailFeedback.value || !messageFeedback.value) {
    evt.preventDefault()
    feedback.classList.remove("feedback-error");
    feedback.offsetWidth = feedback.offsetWidth;
    feedback.classList.add("feedback-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", nameFeedback.value);
      localStorage.setItem("email", emailFeedback.value);
    }
  }
})

