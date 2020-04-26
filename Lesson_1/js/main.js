var name = "Mike";

function firstFunc(){
	console.log("yo yo");
	//Private variable
	var name = "Bill";
	console.log("Name in function " + name);
}

//Runs firstFunc function
firstFunc();

console.log(name);