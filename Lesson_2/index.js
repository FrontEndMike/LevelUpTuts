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

// const discountCart = simpleShoppingCart.map((value) => {
// 	return value * .75;
// });

// const discountCart = simpleShoppingCart.map((value) => value * .75);

const discountCart = shoppingCart.map((value) => {
	return{
		...value,
		salePrice: value.price * .75
	}
});

// Filters the shoppingCart array by type(tutorial)
// then filters all tutorials that are less than 20 in price
// then adds an item to the array of "extra"
const filteredCart = shoppingCart.filter(({type}) => {
	return type === 'tutorial';
}).filter(product => {
	return product.price > 20;
}).map(product => ({...product, extra: product.price * 10}));

// const filteredCart = shoppingCart.filter(({type}) =>  type === 'tutorial');

console.log(shoppingCart);
console.log(filteredCart);







