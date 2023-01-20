//import
import productItems from "./ui.js";

//targeted nodes
const img1 = document.querySelector("#img-1");
const img2 = document.querySelector("#img-2");
const img3 = document.querySelector("#img-3");
const img4 = document.querySelector("#img-4");



const productName = document.querySelector("#product-name");
const productPrice = document.querySelector("#product-price");

const list1 = document.querySelector("#product-descr-1");
const list2 = document.querySelector("#product-descr-2");
const list3 = document.querySelector("#product-descr-3");
const list4 = document.querySelector("#product-descr-4");
const list5 = document.querySelector("#product-descr-5");

const slidePrev = document.querySelector(".prev");
const slideNext = document.querySelector(".next");

const productFromURL = window.location.search;
const urlParams = new URLSearchParams(productFromURL);
const getURL = urlParams.get("product");
console.log(getURL)

const getImgQtyArray = Object.keys(productItems[0].images);

function getProductPictures(index) {
  img1.src = productItems[index].images.primary;
  img2.src = productItems[index].images.second;
  img3.src = productItems[index].images.third;
  img4.src = productItems[index].images.fourth;
};

console.log(Object.keys(productItems[0].images));

function getProductPrice(index) {
  productPrice.innerHTML = productItems[index].price;
};

function getProductName(index) {
  productName.innerHTML = productItems[index].name;
};

function getProductDescription(index) {
  list1.innerHTML = productItems[index].descriptions.descr1;
  list2.innerHTML = productItems[index].descriptions.descr2;
  list3.innerHTML = productItems[index].descriptions.descr3;
  list4.innerHTML = productItems[index].descriptions.descr4;
  list5.innerHTML = productItems[index].descriptions.descr5;
}

function callProduct(index) {
  getProductDescription(index);
  getProductName(index);
  getProductPictures(index);
  getProductPrice(index);
}

function matchURLName(getURL) {
  if (getURL === "Brown-Trousers.jpg") {
    callProduct(0)
  }
  else if (getURL === "BW-Jacket.jpg") {
    callProduct(1)
  }
  else if (getURL === "Green-PufferCoat.jpg") {
    callProduct(2)
  }
  else if (getURL === "Green-Trousers.jpg") {
    callProduct(3)
  }
  else if (getURL === "Grey-Bag.jpg") {
    callProduct(4)
  }
  else if (getURL === "Grey-Trousers.jpg") {
    callProduct(5)
  }
  else if (getURL === "Maroon-Dress.jpg") {
    callProduct(6)
  }
  else if (getURL === "Sitting.jpg") {
    callProduct(7)
  }
  else if (getURL === "Tan-Jacket.jpg") {
    callProduct(8)
  }
  else if (getURL === "Top.jpg") {
    callProduct(9)
  }
  else if (getURL === "Reversible-Jacket-1.jpg") {
    callProduct(10)
  }
  else if (getURL === "Riding-Cape-1.jpg") {
    callProduct(11)
  }
  else if (getURL === "Valentino-Trousers-1.jpg") {
    callProduct(12)
  }
  else {
    console.log("debug me please")
  }

}

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
  let slides = [img1, img2, img3, img4];
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

slidePrev.addEventListener("click", function() {
  plusSlides(-1)
});
slideNext.addEventListener("click", function() {
  plusSlides(1)
});
window.addEventListener("load", matchURLName(getURL));