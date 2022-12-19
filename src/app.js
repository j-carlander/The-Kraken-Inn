

// checkout-page

const beverageSection = document.querySelector(".beverage-section");
const appetizerSection = document.querySelector(".appetizer-section");
const mainCourseSection = document.querySelector(".main-course-section");
const dessertSection = document.querySelector(".dessert-section");
const menuCategory = document.querySelectorAll(".menu-category");

function scrollToBeverage() {
  beverageSection.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
}
function scrollToAppetizers() {
  appetizerSection.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
}
function scrollToMainCourse() {
  mainCourseSection.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
}
function scrollToDesserts() {
  dessertSection.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
}

// for (category of menuCategory) {
//   category.addEventListener("click", scrollToCategory);
// }

// function scrollToCategory() {
//   for (let i = 0; i < menuCategory.length; i++) {
//     if (category.classList.contains("beverage")) {
//       console.log("beverage");
//     }
//   }
// }
