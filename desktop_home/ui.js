//array with object of prices and Images sourced from Images repository
let productItems = [
  {
    name: "Belted Capris Trousers",
    price: "£39",
    images: {
      primary: "../Images/Brown-Trousers.jpg",
      second: "../Images/Brown-Trousers-2.jpg",
      third: "../Images/Brown-Trousers-3.jpg",
      fourth: "../Images/Brown-Trousers-4.jpg",
    },
    descriptions: {
      descr1: "Ellie Tahari brand trousers",
      descr2: "Mid rise waist",
      descr3: "Decorative velvet trim belt",
      descr4: "95% Wool",
      descr5: "Back pockets",
    },
  },
  {
    name: "Wool Collarless Jacket",
    price: "£111",
    images: {
      primary: "../Images/BW-Jacket.jpg",
      second: "../Images/BW-Jacket-2.jpg",
      third: "../Images/BW-Jacket-3.jpg",
    },
    descriptions: {
      descr1: "Kasper brand wool jacket",
      descr2: "74% Wool knit fabric",
      descr3: "Closes with hook & eye",
      descr4: "Stand collar",
      descr5: "Lined interior",
    },
  },
  {
    name: "Hooded Puffer Coat",
    price: "£59",
    images: {
      primary: "../Images/Green-PufferCoat.jpg",
      second: "../Images/Green-PufferCoat-2.jpg",
      third: "../Images/Green-PufferCoat-3.jpg",
      fourth: "../Images/Green-PufferCoat-4.jpg",
    },
    descriptions: {
      descr1: "Old Navy brand jacket",
      descr2: "Drawstring hood with faux-fur trim",
      descr3: "Zip fastening",
      descr4: "Side pockets",
      descr5: "Faux leather piping",
    },
  },
  {
    name: "Green Trousers",
    price: "£36",
    images: {
      primary: "../Images/Green-Trousers.jpg",
    },
    descriptions: {
      descr1: "Perfect condition",
      descr2: "Never Worn",
      descr3: "Extra buttons",
      descr4: "Side pockets",
      descr5: "High Waist",
    },
  },
  {
    name: "Grey Bag",
    price: "£39",
    images: {
      primary: "../Images/Grey-Bag.jpg",
    },
    descriptions: {
      descr1: "Used, like new",
      descr2: "Magnetic clasp",
      descr3: "Detachable strap",
      descr4: "Internal slip pocket",
      descr5: "Fabric interior",
    },
  },
  {
    name: "Grey Trousers",
    price: "£35",
    images: {
      primary: "../Images/Grey-Trousers.jpg",
    },
    descriptions: {
      descr1: "Used, like new",
      descr2: "Medium high waist",
      descr3: "Belt loops",
      descr4: "Functional pockets",
      descr5: "Available in different sizes",
    },
  },
  {
    name: "Velvent Floral Party Dress",
    price: "£89",
    images: {
      primary: "../Images/Maroon-Dress.jpg",
      second: "../Images/Maroon-Dress-2.jpg",
      third: "../Images/Maroon-Dress-3.jpg",
    },
    descriptions: {
      descr1: "St. Michael brand dress",
      descr2: "Textured velvet floral pattern",
      descr3: "Mid length",
      descr4: "Built in slip",
      descr5: "Zips up the side",
    },
  },
  {
    name: "Corduroy Trousers",
    price: "£39",
    images: {
      primary: "../Images/Sitting.jpg",
      second: "../Images/Corduroy-Trousers-2.jpg",
      third: "../Images/Corduroy-Trousers-3.jpg",
      fourth: "../Images/Corduroy-Trousers-4.jpg",
    },
    descriptions: {
      descr1: "Ralp Lauren brand trousers",
      descr2: "Thick gauge corduroy",
      descr3: "Boot cut with mid rise fit",
      descr4: "Leather back patch",
      descr5: "Classic 5 pockets",
    },
  },
  {
    name: "Wool Cashmere Jacket",
    price: "£349",
    images: {
      primary: "../Images/Tan-Jacket.jpg",
      second: "../Images/Tan-Jacket-2.jpg",
      third: "../Images/Tan-Jacket-3.jpg",
      fourth: "../Images/Tan-Jacket-4.jpg",
    },
    descriptions: {
      descr1: "Max Mara brand coat",
      descr2: "Loose oversized fit",
      descr3: "Wool-cashmere blend fabric",
      descr4: "Side pockets",
      descr5: "Fully lined",
    },
  },
  {
    name: "Long Sleeve Blouse",
    price: "£24",
    images: {
      primary: "../Images/Top.jpg",
    },
    descriptions: {
      descr1: "Whistles brand top",
      descr2: "Loose fitting",
      descr3: "Side slits",
      descr4: "V neck collar",
      descr5: "Made in the United Kingdom",
    },
  },
  {
    name: "Reversible Hooded Jacket",
    price: "£187",
    images: {
      primary: "../Images/Reversible-Jacket-1.jpg",
      second: "../Images/Reversible-Jacket-2.jpg",
      third: "../Images/Reversible-Jacket-3.jpg",
      fourth: "../Images/Reversible-Jacket-4.jpg",
    },
    descriptions: {
      descr1: "Erba Travel brand jacket",
      descr2: "Reversible for brown or tan colour",
      descr3: "Zippered side pockets on each side",
      descr4: "Drawstring hood and waist",
      descr5: "YKK double sided zip",
    },
  },
  {
    name: "Riding Cape",
    price: "£52",
    images: {
      primary: "../Images/Riding-Cape-1.jpg",
      second: "../Images/Riding-Cape-2.jpg",
      third: "../Images/Riding-Cape-3.jpg",
    },
    descriptions: {
      descr1: "Zara brand riding cape",
      descr2: "Brown and red houndstooth pattern",
      descr3: "60% Wool",
      descr4: "Faux-leather neck buckle",
      descr5: "Side pockets",
    },
  },
  {
    name: "Valentino Trousers",
    price: "£65",
    images: {
      primary: "../Images/Valentino-Trousers-1.jpg",
      second: "../Images/Valentino-Trousers-2.jpg",
      third: "../Images/Valentino-Trousers-3.jpg",
      fourth: "../Images/Valentino-Trousers-4.jpg",
    },
    descriptions: {
      descr1: "Valentino Red brand trousers",
      descr2: "High waisted with decorative buttons",
      descr3: "Slim fit with boot cut opening",
      descr4: "Smart tailored look",
      descr5: "Shallow front pockets",
    },
  },
];

export default productItems;
