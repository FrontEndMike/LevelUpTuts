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

// First create an array of the parameter (price)
// item is the new array made from the old array 
// and has the same parameters
// item.price is the parameter being returned from the new array
// totalPrice is an array of that parameter
const totalPrice = shoppingCart.map((item) => {
    return item.price;
});

// Iterates over the array (total) and outpute a single value
const total = totalPrice.reduce((total, currentPrice) => {
	return total + currentPrice;
});


console.log(shoppingCart);
console.log("Your prices are : " + totalPrice);
console.log("Your total is : " + "$" + total);








