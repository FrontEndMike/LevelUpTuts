document.getElementById("app").innerHTML = `
<h1>Hello Parcel!</h1>
<div>
  Look
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>
  for more info about Parcel.
</div>
`;

//Consistency is King
// Use var names that make sense to what the data is
// variable that wont change
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


//DO NOT DO
// const hireDev = ({ devInfo }) => {
// 	const hiredDevInfo = {
// 		hired: true,
// 		...devInfo
// 	}
// 	return hiredDevInfo;
// }


// Correct
const hireDev = ({ dev }) => {
	const hiredDev = {
		hired: true,
		...dev
	}
	return hiredDev;
}





console.log(hireDev({ dev }));

