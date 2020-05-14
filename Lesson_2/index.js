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

// .filter
// iterates over array, determines what is filtered,
// returns new array
// returns same amount of items or fewer

// .reduce
// iterate over array and uses values to output one value
// outputs single value

// const discountCart = simpleShoppingCart.map( value =>  value * .75);

// const discountCart = shoppingCart.map((total) => {
//   return{
//     ...total,
//     salePrice: total.price * .75
//   }
// });



const total = shoppingCart.reduce((total, currentPrice) => {
	return total + (currentPrice[key] || 0), 0;
});


console.log(shoppingCart);
console.log(total);










