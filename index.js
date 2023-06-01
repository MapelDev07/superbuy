let slideMenu = document.querySelector(".sub-nav");
let slideBtn = document.querySelectorAll(".nav-bar-btn");
slideBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    slideMenu.classList.toggle("open");
    slideMenu.classList.toggle("growdown");
  });
});

function flashBeforeNavigate(event) {
  event.preventDefault();
  // play animation, then redirect
  flash = document.getElementsByClassName("flash")[0];
  flash.style.animation = "fadeIn 500ms forwards";
  setTimeout(function () {
    window.location.href = "stores.html";
  }, 500);

  // removes the animation when returning to the homepage
  window.addEventListener("pageshow", function (event) {
    flash.style.animation = "none";
  });
}

function applyHover(selector) {
  const element = document.querySelector(selector);
  element.classList.add("hover");
}

function removeHover(selector) {
  const element = document.querySelector(selector);
  element.classList.remove("hover");
}

//nav bottom slide
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("superbuy-store-mobile");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
