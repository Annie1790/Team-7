import productItems from "./ui.js";

const img1 = document.querySelector("#image-1");
const img2 = document.querySelector("#image-2");
const img3 = document.querySelector("#image-3");
const img4 = document.querySelector("#image-4");

const price1 = document.querySelector("#price-tag-1");
const price2 = document.querySelector("#price-tag-2");
const price3 = document.querySelector("#price-tag-3");
const price4 = document.querySelector("#price-tag-4");

const box1 = document.querySelector(".box-1");
const box2 = document.querySelector(".box-2");
const box3 = document.querySelector(".box-3");
const box4 = document.querySelector(".box-4");

let i = 0; //variable for looping

//select the targeted image primary
function getImgSrc(imageSrc, target) {
  target.src = imageSrc;
}
//select the targeted price text
function getProductPrice(priceText, target) {
  target.innerHTML = priceText;
}
//modifies the image and price elements specified to show a new price and image
function callNextImage(image, price) {
  if (i == productItems.length) {
    i = 0;
  }
  getImgSrc(productItems[i].images.primary, image);
  getProductPrice(productItems[i].price, price);
  i++;
}
//calls the function above on all four Images and prices
function loop() {
  callNextImage(img1, price1);
  callNextImage(img2, price2);
  callNextImage(img3, price3);
  callNextImage(img4, price4);
}
//calls a function in milliseconds
setInterval(loop, 5000);
window.addEventListener("load", loop)

/******************************************************* */
//get primary string from event
function getSourceFromDom(e) {
  let primary = e.target.currentSrc;
  primary = new URL(primary);
  return primary.pathname.slice(primary.pathname.indexOf("/Images")+8);
}

//creates a boxes array
const boxes = [box1, box2, box3, box4];

//loops through the box and applies the function on each variable
boxes.forEach((box) => {
  box.addEventListener("click", function (e) {
    console.log(getSourceFromDom(e))
    window.location.href = `productpage.html?product=${getSourceFromDom(e)}`
  })
})
