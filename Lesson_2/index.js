const simpleShoppingCart = [10, 20, 25, 5, 10];

const shoppingCart = [
	{
		sku: "1234",
		price: 10,
		type: "t-shirt"
	},
	{
		sku: "123334",
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
//  iterates over array, perform a function on
// each item. Returns new array
// Returns same items array

// . filter
// iterates over array, determines what is filtered,
// returns a new array
// returns same or less amount o items

// .reduce
// iterates over array, uses values, to output one value 
// outputs a single value

// const discountCart = simpleShoppingCart.map((value) => {
// 	return value * .75;
// });

// const discountCart = simpleShoppingCart.map((value) => value * .75);

const total = simpleShoppingCart.reduce((total, currentPrice) => {
	return total + currentPrice;
})

const discountCart = shoppingCart.map((value) => {
	return{
		...value,
		salePrice: value.price * .75
	}
});


// const filteredCart = shoppingCart.filter(({type}) =>  type === 'tutorial');

console.log(simpleShoppingCart);
console.log(total);







