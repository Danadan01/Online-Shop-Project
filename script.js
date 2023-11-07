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

// Header

// Get the dropdown element
const dropdown = document.querySelector('.dropdown');
const dropdownContent = document.querySelector('.dropdown-content');


// Add a click event listener to the dropdown button
dropdown.addEventListener('click', function() {
    if (dropdownContent.style.display === 'flex') {
        // If the dropdown is open, close it
        dropdownContent.style.display = 'none';
    } else {
        // If the dropdown is closed, open it
        dropdownContent.style.display = 'flex';
    }
});

// Close the dropdown when clicking outside of it
document.addEventListener('click', function(event) {
    if (!dropdown.contains(event.target)) {
        dropdownContent.style.display = 'none';
    }
});

// Header