// Content-section

const shortTextDiv = document.querySelector(".shortText");
const longTextDiv = document.querySelector(".longText");

const readMoreBtn = document.querySelector(".readMoreButton");
const readLessBtn = document.querySelector(".readLessButton");

readMoreBtn.addEventListener("click", () => {
  longTextDiv.style.display = "block";
  shortTextDiv.style.display = "none";
})
readLessBtn.addEventListener("click", () => {
  longTextDiv.style.display = "none";
  shortTextDiv.style.display = "block";
})

// Content-section

// Cookie modal

const cookieContainer = document.querySelector(".cookie-container");
const cookieOpenBtn = document.querySelector("#cookieBtn");
const cookieCloseBtn = document.querySelector(".closeModalBtn");
const acceptAllCookiesBtn = document.querySelector(".acceptAllCookiesBtn");
const savePreferenceBtn = document.querySelector(".savePreferenceBtn");
const onlyRequiredBtn = document.querySelector(".onlyRequiredBtn");

const closeModal = (e) => {
  e.preventDefault();
  document.body.style.overflowY = "scroll";
  cookieContainer.classList.remove("active");
  cookieContainer.classList.add("notActive");
}

cookieOpenBtn.addEventListener("click", (e) => {
  e.preventDefault();
  document.body.style.overflow = "hidden";
  cookieContainer.classList.add("active");
  cookieContainer.classList.remove("notActive");
})

cookieCloseBtn.addEventListener("click", closeModal);

acceptAllCookiesBtn.addEventListener("click", closeModal);

savePreferenceBtn.addEventListener("click", closeModal);

onlyRequiredBtn.addEventListener("click", closeModal);

// Cookie modal