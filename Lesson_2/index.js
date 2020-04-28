document.getElementById("app").innerHTML = `
<h1>Hello Parcel!</h1>
<div>
  Look
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>
  for more info about Parcel.
</div>
`;

// Function declaration
// Hoisted
// function sayHi(){
// 	return console.log('hi');
// }

// Function expression
// Anonymous functions
// Not hoisted
// Passed around or used
// const sayHi = function(){
// 	return console.log("hi");
// }

// const sayHi = function sayHi(){
// 	return console.log("hi");
// }


// Arrow functions
// const sayHi = () => {
// 	return console.log("hi");
// }

// const sayHi = () => return console.log("hi");

const sayHi = () => (console.log("hi"));

sayHi();