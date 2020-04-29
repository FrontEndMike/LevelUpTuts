document.getElementById("app").innerHTML = `
<h1>Hello Parcel!</h1>
<div>
  Look
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>
  for more info about Parcel.
</div>
`;


//create function of makePerson that passes in 3 variables 
// and returns a object that is a name, age, and job
const makePerson = (name, age, job) => {
	return{
		name,
		age,
		job
	};
};

// object that contains values to pass 
// through the function makePerson
const dev = makePerson("Mike", 32, "Web Dev");

// pulls out the property name 
// then "the rest" from dev object
// and assigns it to a new variable
const { name, ...rest } = dev;


console.log(name, rest);

