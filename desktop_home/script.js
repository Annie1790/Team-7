const img1 = document.querySelector("#image-1");
const img2 = document.querySelector("#image-2");
const img3 = document.querySelector("#image-3");
const img4 = document.querySelector("#image-4");

const price1 = document.querySelector("#price-tag-1");
const price2 = document.querySelector("#price-tag-2");
const price3 = document.querySelector("#price-tag-3");
const price4 = document.querySelector("#price-tag-4");

let i = 0; //variable for looping

//array with object of prices and images sourced from images repository
let productItems = [
    {
        price: "£29",
        source: "../images/Brown-Trousers.jpg",
    },
    {
        price: "£111",
        source: "../images/BW-Jacket.jpg",
    },
    {
        price: "£129",
        source: "../images/Green-PufferCoat.jpg",
    },
    {
        price: "£36",
        source: "../images/Green-Trousers.jpg",
    },
    {
        price: "£39",
        source: "../images/Grey-Bag.jpg",
    },
    {
        price: "£35",
        source: "../images/Grey-Trousers.jpg",
    },
    {
        price: "£89",
        source: "../images/Maroon-Dress.jpg",
    },
    {
        price: "£11",
        source: "../images/Sitting.jpg",
    },
    {
        price: "£149",
        source: "../images/Tan-Jacket.jpg",
    },
    {
        price: "£24",
        source: "../images/Top.jpg",
    }
];

//select the targeted image source
function getImgSrc(imageSrc, target) {
    target.src = imageSrc
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
    console.log(i)
    getImgSrc(productItems[i].source, image);
    getProductPrice(productItems[i].price, price);
    i++;
}
//calls the function above on all four images and prices
function loop() {
    callNextImage(img1, price1);
    callNextImage(img2, price2);
    callNextImage(img3, price3);
    callNextImage(img4, price4);
}
//calls a function in milliseconds
setInterval(loop, 5000)
