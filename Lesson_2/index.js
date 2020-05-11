const simpleShoppingCart = [10, 20, 25, 5, 10];

const shoppingCart = [
  {
    sku: "1234",
    price: 10,
    type: "t-shirt"
  },
  {
    sku: "1233334",
    price: 16,
    type: "tutorial"
  },
  {
    sku: "12111134",
    price: 30,
    type: "tutorial"
  }
];


// .map
// iterates over array, perform funtion on each item
// returns new array
// Use when you build an array out of old data and need to add
// new data to it or modify data in array

// const discountCart = simpleShoppingCart.map( value =>  value * .75);

const discountCart = shoppingCart.map((total) => {
  return{
    ...total,
    salePrice: total.price * .75
  }
});


console.log(shoppingCart);
console.log(discountCart);