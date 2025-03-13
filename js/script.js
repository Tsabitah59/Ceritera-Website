const cards = document.querySelectorAll(".slide-left, .slide-right, .rise-up");

window.addEventListener("scroll", checkBoxes);
checkBoxes();

function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4;
  cards.forEach((box, index) => {
    const slideTop = box.getBoundingClientRect().top;
    if (slideTop < triggerBottom) {
      if (index === 0) {
        setTimeout(() => {
          box.classList.add("show");
        }, 400);
      } else if (index === 1) {
        setTimeout(() => {
          box.classList.add("show");
        }, 200);
      } else {
        box.classList.add("show");
      }
    } else {
      box.classList.remove("show");
    }
  });
}

const accordian = document.getElementsByClassName("content-accordi");
for (index = 0; index < accordian.length; index++) {
  accordian[index].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}

// Swiper.js
var BookSlider = new Swiper(".book-sliders", {
  grabCursor: true,
  centeredSlides: false,
  loop: true,
  slidesPerView: 'auto',

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
