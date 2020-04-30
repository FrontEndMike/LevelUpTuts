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
const makePerson = ({ firstName, age, job, lastName }) => {
	return{
		name: firstName + ' ' + lastName,
		age,
		job,
	};
};

const dev = makePerson({
	firstName: "Mike",
	lastName: "Jackson",
	job: "Web Dev",
	age: 32
});





console.log(dev);

