var swiper1 = new Swiper(".slider-section", {
  slidesPerView: "auto",
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Nav Link Color
var NavbarLinks = document.querySelectorAll(".navbar-nav .nav-item .nav-link");

NavbarLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    NavbarLinks.forEach((link) => {
      link.classList.remove("active");
    });
    e.target.classList.add("active");
  });
});
var destImages = document.querySelectorAll(".best-destination-images img");

destImages.forEach((img) => {
  img.addEventListener("click", function (e) {
    destImages.forEach((img) => {
      img.classList.remove("active");
    });
    e.target.classList.add("active");
        alert(1);

  });
});

var swiper2 = new Swiper(".discover-slider", {
  slidesPerView: 4,
  spaceBetween: 30,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2.5,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});



var swiper5 = new Swiper(".swiper", {
  grabCursor: true,
  centeredSlides: false,
  slidesPerView: "auto",
  spaceBetween: 30,
  loop: false,
  slidesPerView: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  keyboard: {
    enabled: true,
  },
  mousewheel: {
    thresholdDelta: 70,
  },
  breakpoints: {
    560: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
})