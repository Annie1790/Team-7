//import
import productItems from "./ui.js";

//targeted nodes
const img1 = document.querySelector("#img-1");
const img2 = document.querySelector("#img-2");
const img3 = document.querySelector("#img-3");
const img4 = document.querySelector("#img-4");

const productname = document.querySelector("#product-name");
const productPrice = document.querySelector("#product-price");

const list1 = document.querySelector("#product-descr-1");
const list2 = document.querySelector("#product-descr-2");
const list3 = document.querySelector("#product-descr-3");
const list4 = document.querySelector("#product-descr-4");
const list5 = document.querySelector("#product-descr-5");

const productFromURL = window.location.search;
const urlParams = new URLSearchParams(productFromURL);
const getURL = urlParams.get("product");
console.log(getURL)

// Slideshow Function //////////////////
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("product-slide");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}