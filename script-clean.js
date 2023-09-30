function handleScrollAnimation(elements, className) {
  elements.forEach((element) => {
    const slideInAt = window.scrollY + window.innerHeight - element.clientHeight / 2;
    const isHalfShown = slideInAt > element.offsetTop;

    if (isHalfShown) {
      element.classList.add(className);
    } else {
      element.classList.remove(className);
    }
  });
}

const slideUpElements = document.querySelectorAll(".slide-up");
const slideLeftElements = document.querySelectorAll(".slide-left");
const slideRightElements = document.querySelectorAll(".slide-right");
const zoomInElements = document.querySelectorAll(".zoom-in");
const slideDownElements = document.querySelectorAll(".slide-down");
const rotateElements = document.querySelectorAll(".rotate");

window.addEventListener("scroll", () => {
  handleScrollAnimation(slideUpElements, "active");
  handleScrollAnimation(slideLeftElements, "active");
  handleScrollAnimation(slideRightElements, "active");
  handleScrollAnimation(zoomInElements, "active");
  handleScrollAnimation(slideDownElements, "active");
  handleScrollAnimation(rotateElements, "active");
});

const backBtn = document.getElementById("backBtn");
const nextBtn = document.getElementById("nextBtn");
const card = document.querySelector(".card");

const content = [
  "Health it's a harmonious balance of mind, body, and soul.",
  "Invest in your health today for a vibrant and fulfilling tomorrow.",
  "Good health is the foundation of a life well-lived.",
  "Nurturing your body is a lifelong commitment to happiness.",
  "A healthy outside starts from the inside.",
  "Wellness is a journey, not a destination.",
  "True wealth is health.",
  "Your body is your most priceless possession; take care of it.",
  "Prioritize self-care because your well-being matters.",
  "Your health is your superpower; wield it wisely.",
  "Healthy habits today lead to a stronger future.",
  "In the pursuit of success, don't neglect the gift of good health.",
  "Treat your body like a temple, not a trash can.",
  "A happy life is built on a foundation of good health.",
  "Choose health daily, because you deserve to thrive.",
  "Well-being is the greatest asset you can own.",
  "A healthy lifestyle is a key to unlocking your full potential.",
  "The joy of good health is the greatest luxury in life.",
  "Small, consistent efforts towards health yield lifelong rewards.",
  "Health is the fountain of youth that resides within you.",
];

let currentContentIndex = 0;

function updateCardContent() {
  const contentElement = card.querySelector("p");

  contentElement.classList.add("fade-out");
  setTimeout(() => {
    currentContentIndex = (currentContentIndex + 1) % content.length;
    contentElement.textContent = content[currentContentIndex];
    contentElement.classList.remove("fade-out");
    contentElement.classList.add("fade-in");
  }, 300);

  setTimeout(() => {
    contentElement.classList.remove("fade-in");
  });
}

backBtn.addEventListener("click", () => {
  currentContentIndex = (currentContentIndex - 1 + content.length) % content.length;
  updateCardContent();
});

nextBtn.addEventListener("click", () => {
  currentContentIndex = (currentContentIndex + 1) % content.length;
  updateCardContent();
});

updateCardContent();
