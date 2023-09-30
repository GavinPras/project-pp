// //SLIDE-UP

// const slideUpElements = document.querySelectorAll(".slide-up");

// function checkSlide() {
//   slideUpElements.forEach((element) => {
//     const slideInAt = window.scrollY + window.innerHeight - element.clientHeight / 2;
//     const isHalfShown = slideInAt > element.offsetTop;

//     if (isHalfShown) {
//       element.classList.add("active");
//     } else {
//       element.classList.remove("active");
//     }
//   });
// }

// window.addEventListener("scroll", checkSlide);

// // SLIDE-LEFT

// const slideLeftElements = document.querySelectorAll(".slide-left");

// function checkSlideLeft() {
//   slideLeftElements.forEach((element) => {
//     const slideInAt = window.scrollY + window.innerHeight - element.clientHeight / 2;
//     const isHalfShown = slideInAt > element.offsetTop;

//     if (isHalfShown) {
//       element.classList.add("active");
//     } else {
//       element.classList.remove("active");
//     }
//   });
// }

// window.addEventListener("scroll", checkSlideLeft);

// // SLIDE-RIGHT

// const slideRightElements = document.querySelectorAll(".slide-right");

// function checkSlideRight() {
//   slideRightElements.forEach((element) => {
//     const slideInAt = window.scrollY + window.innerHeight - element.clientHeight / 2;
//     const isHalfShown = slideInAt > element.offsetTop;

//     if (isHalfShown) {
//       element.classList.add("active");
//     } else {
//       element.classList.remove("active");
//     }
//   });
// }

// window.addEventListener("scroll", checkSlideRight);

// // ZOOM-IN

// const zoomInElements = document.querySelectorAll(".zoom-in");

// function checkZoomIn() {
//   zoomInElements.forEach((element) => {
//     const slideInAt = window.scrollY + window.innerHeight - element.clientHeight / 2;
//     const isHalfShown = slideInAt > element.offsetTop;

//     if (isHalfShown) {
//       element.classList.add("active");
//     } else {
//       element.classList.remove("active");
//     }
//   });
// }

// window.addEventListener("scroll", checkZoomIn);

// // SLIDE-DOWN

// const slideDownElements = document.querySelectorAll(".slide-down");

// function checkSlideDown() {
//   slideDownElements.forEach((element) => {
//     const slideInAt = window.scrollY + window.innerHeight - element.clientHeight / 2;
//     const isHalfShown = slideInAt > element.offsetTop;

//     if (isHalfShown) {
//       element.classList.add("active");
//     } else {
//       element.classList.remove("active");
//     }
//   });
// }

// window.addEventListener("scroll", checkSlideDown);

// // ROTATE

// const rotateElements = document.querySelectorAll(".rotate");

// function checkRotate() {
//   rotateElements.forEach((element) => {
//     const slideInAt = window.scrollY + window.innerHeight - element.clientHeight / 2;
//     const isHalfShown = slideInAt > element.offsetTop;

//     if (isHalfShown) {
//       element.classList.add("active");
//     } else {
//       element.classList.remove("active");
//     }
//   });
// }

// window.addEventListener("scroll", checkRotate);

// // QUOTES BOX

// const backBtn = document.getElementById("backBtn");
// const nextBtn = document.getElementById("nextBtn");
// const card = document.querySelector(".card");

// const content = [
//   "Health it's a harmonious balance of mind, body, and soul.",
//   "Invest in your health today for a vibrant and fulfilling tomorrow.",
//   "Good health is the foundation of a life well-lived.",
//   "Nurturing your body is a lifelong commitment to happiness.",
//   "A healthy outside starts from the inside.",
//   "Wellness is a journey, not a destination.",
//   "True wealth is health.",
//   "Your body is your most priceless possession; take care of it.",
//   "Prioritize self-care because your well-being matters.",
//   "Your health is your superpower; wield it wisely.",
//   "Healthy habits today lead to a stronger future.",
//   "In the pursuit of success, don't neglect the gift of good health.",
//   "Treat your body like a temple, not a trash can.",
//   "A happy life is built on a foundation of good health.",
//   "Choose health daily, because you deserve to thrive.",
//   "Well-being is the greatest asset you can own.",
//   "A healthy lifestyle is a key to unlocking your full potential.",
//   "The joy of good health is the greatest luxury in life.",
//   "Small, consistent efforts towards health yield lifelong rewards.",
//   "Health is the fountain of youth that resides within you.",
// ];

// let currentContentIndex = 0;
// let fadeOutInProgress = false;

// function updateCardContent() {
//   const contentElement = card.querySelector("p");

//   // Prevent overlapping fade animations
//   if (!fadeOutInProgress) {
//     fadeOutInProgress = true;

//     // Apply fade-out animation
//     contentElement.classList.add("fade-out");
//     setTimeout(() => {
//       // Update content and apply fade-in animation
//       contentElement.textContent = content[currentContentIndex];
//       contentElement.classList.remove("fade-out");
//       contentElement.classList.add("fade-in");
//       fadeOutInProgress = false;
//     }, 300); // 300ms speed transition

//     setTimeout(() => {
//       contentElement.classList.remove("fade-in");
//     }); // forever
//   }
// }

// backBtn.addEventListener("click", () => {
//   if (currentContentIndex > 0) {
//     currentContentIndex--;
//   } else {
//     currentContentIndex = content.length - 1;
//   }
//   updateCardContent();
// });

// nextBtn.addEventListener("click", () => {
//   if (currentContentIndex < content.length - 1) {
//     currentContentIndex++;
//   } else {
//     currentContentIndex = 0;
//   }
//   updateCardContent();
// });

// updateCardContent();

// // next biutton

// document.addEventListener("DOMContentLoaded", function () {
//   const nButton = document.getElementById("nextBtn");

//   nButton.addEventListener("keydown", function (event) {
//     if (event.key === "enter") {
//       // Mengganti dari "Enter" ke "ArrowRight"
//       event.preventDefault();
//       nButton.click();
//     }
//   });
// });
