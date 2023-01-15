const productImages = document.querySelectorAll(".product-image");
const priceTag = document.querySelectorAll(".box-price-tag");

let productItems = [
    {
        price: "£199",
        source: "../images/Brown-Trousers.jpg",
        active: false
    },
    {
        price: "£111",
        source: "../images/BW-Jacket.jpg",
        active: false
    },
    {
        price: "£129",
        source: "../images/Green-PufferCoat.jpg",
        active: false
    },
    {
        price: "£36",
        source: "../images/Green-Trousers.jpg",
        active: false
    },
    {
        price: "£39",
        source: "../images/Grey-Bag.jpg",
        active: false
    },
    {
        price: "£35",
        source: "../images/Grey-Trousers.jpg",
        active: false
    },
    {
        price: "£89",
        source: "../images/Maroon-Dress.jpg",
        active: false
    },
    {
        price: "£11",
        source: "../images/Sitting.jpg",
        active: false
    },
    {
        price: "£149",
        source: "../images/Tan-Jacket.jpg",
        active: false
    },
    {
        price: "£24",
        source: "../images/Top.jpg",
        active: false
    }
];

let i = 0;

function otherLoop() {
    if (i == 10) {
        i = 0;
    } else {
        getImgSrc(productItems[i].source);
        getProductPrice(productItems[i].price);
        console.log(i)
        i++;
    }
}

function getImgSrc(imageSrc) {
    productImages.forEach((img) => {
        img.src = imageSrc;
    })
}

function getProductPrice(priceText) {
    priceTag.forEach((price) => {
        price.innerHTML = priceText;
    })
}

setInterval(otherLoop, 5000)

window.onload = function() {
    otherLoop()
}