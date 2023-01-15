const productImages = document.querySelectorAll(".product-image");
const priceTag = document.querySelectorAll(".box-price-tag");

let productItems = [
        brownTrousers = {
            price: "£199",
            source: "../images/Brown-Trousers.jpg",
            active: false
        },
        BwJacket = {
            price: "£111",
            source: "../images/BW-Jacket.jpg",
            active: false
        },
        greenPufferCoat = {
            price: "£129",
            source: "../images/Green-PufferCoat.jpg",
            active: false
        },
        greenTrousers = {
            price: "£36",
            source: "../images/Green-Trousers.jpg",
            active: false
        },
        greyBag = {
            price: "£39",
            source: "../images/Grey-Bag.jpg",
            active: false
        },
        greyTrousers = {
            price: "£35",
            source: "../images/Grey-Trousers.jpg",
            active: false
        },
        maroonDress = {
            price: "£89",
            source: "../images/Maroon-Dress.jpg",
            active: false
        },
        greyShirt = {
            price: "£11",
            source: "../images/Sitting.jpg",
            active: false
        },
        tanJacket = {
            price: "£149",
            source: "../images/Tan-Jacket.jpg",
            active: false
        },
        top = {
            price: "£24",
            source: "../images/Top.jpg",
            active: false
        },
        trainers = {
            price: "£41",
            source: "../images/Trainers.jpg",
            active: false
        }
    ];

console.log(productImages);
let objPrice = Object.values(productItems);
console.log(objPrice);

for (let i = 0; i <= productItems.length; i++) {
    console.log(productItems[i])
    productImages.forEach((image) => image.src = productItems)
}



