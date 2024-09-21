let dropdown = document.querySelector(".drop-down");
let headernav = document.querySelector(".header-nav");
dropdown.addEventListener("click", function () {
  if (headernav.style.display == "") {
    headernav.style.display = "inline-block";
  } else {
    headernav.style.display = "";
  }
});

const swiper = new Swiper(".swiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 5000,
  },

  slidesPerView: 1,
  spaceBetween: 48,
  breakpoints: {
    1296: {
      grid: {
        rows: 1,
      },
      slidesPerView: 3,
      spaceBetween: 24,
    },
  },
});
