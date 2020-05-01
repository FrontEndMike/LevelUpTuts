document.getElementById("app").innerHTML = `
<h1>Hello Parcel!</h1>
<div>
  Look
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>
  for more info about Parcel.
</div>
`;


// Immutable vs. Mutable
// can't be changed vs can be changed
// isnt changed vs. changed

// Pure functions
// Always return the same thing with the same input
const addTwo = (x) => x + 2;
console.log(addTwo(2));

// Not pure
let multi = 4; // External state
const addThree = (x) => x + multi;
console.log(addThree(2));

multi = 5;
console.log(addThree(2));

multi = 6;
console.log(addThree(2));

// Not pure
let mult = 4; // External state
const addFour = (x) => {
	mult += 2;
	return x + mult;
};
console.log(addFour(2));
console.log(addFour(2));
console.log(addFour(2));


let name = "Mike";
name = name + " Jackson";
console.log( name );


const BASE_SALARY = 16000;
const SALARY_MULTIPLIER = 4;

const makePerson = ({ firstName, age, job, lastName }) => {
	return{
		name: firstName + ' ' + lastName,
		age,
		job,
		salary: BASE_SALARY * SALARY_MULTIPLIER
	};
};

const dev = makePerson({
	firstName: "Mike",
	lastName: "Jackson",
	job: "Web Dev",
	age: 32
});




// Correct
const hireDev = ({ dev }) => {
	const hiredDev = {
		hired: true,
		...dev
	}
	return hiredDev;
}





console.log(hireDev({ dev }));

