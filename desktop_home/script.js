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

//array with object of prices and Images sourced from Images repository
let productItems = [
  brownTrousers = {
    price: "£29",
    source: "../Images/Brown-Trousers.jpg",
  },
  bwJacket = {
    price: "£111",
    source: "../Images/BW-Jacket.jpg",
  },
  pufferCoat = {
    price: "£129",
    source: "../Images/Green-PufferCoat.jpg",
  },
  greenTrousers = {
    price: "£36",
    source: "../Images/Green-Trousers.jpg",
  },
  greyBag = {
    price: "£39",
    source: "../Images/Grey-Bag.jpg",
  },
  greyTrousers = {
    price: "£35",
    source: "../Images/Grey-Trousers.jpg",
  },
  maroonDress = {
    price: "£89",
    source: "../Images/Maroon-Dress.jpg",
  },
  tShirt = {
    price: "£11",
    source: "../Images/Sitting.jpg",
  },
  tanJacket = {
    price: "£149",
    source: "../Images/Tan-Jacket.jpg",
  },
  top = {
    price: "£24",
    source: "../Images/Top.jpg",
  },
];

//select the targeted image source
function getImgSrc(imageSrc, target) {
  target.src = imageSrc;
}
//select the targeted price text
function getProductPrice(priceText, target) {
  target.innerHTML = priceText;
}
//modifies the image and price elements specified to show a new price and image
function callNextImage(image, price) {
  if (i == 10) {
    i = 0;
  }
  getImgSrc(productItems[i].source, image);
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


/******************************************************* */
//get source string from event
function getSourceFromDom(e) {
  const source = e.srcElement.currentSrc.slice(29);
  return source;
}

//creates a boxes array
const boxes = [box1,box2,box3,box4];

//loops through the box and applies the function on each variable
boxes.forEach((box) => {
box.addEventListener("click", function(e) {
  console.log(getSourceFromDom(e))
  window.location.href = `productpage.html?product=${getSourceFromDom(e)}`
})
})

