// Select Elements
const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");

// Classes names
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

// Show todays date
const options = {weekday :"long", month:"short", day:"numeric"};
const today = new Date();

dateElement.innerHTML = today.toLocaleDateString("en-US", options);

// add to do function
const addToDo = (toDo, id, done, trash) => {
	if(trash){ return; }

	// IF done check else uncheck
	const DONE = done ? CHECK : UNCHECK;

	// If done, Line through, if not empty
	const LINE = done ? LINE_THROUGH : "";

	const item = `
		<li class="item">
			<i class="fa ${DONE} co" job="complete" id="{id"></i>
			<p class="text ${LINE}">${toDo}</p>
			<i class="fa fa-trash-o de" job="delete" id="0"></i>
		</li>
	`;
	const position = "beforeend";
	list.insertAdjacentHTML(position, item);
};

// add an item to the list user enter the key
document.addEventListener("keyup", function(even){
	if(event.keyCode == 13){
		const toDo = input.value;
		// if the input field isnt empty
		if(toDo){
			addToDo(toDo);
		}
		// empty's add todo field
		input.value = "";
	}
})

addToDo("Drink Coffee", 1, false, false);