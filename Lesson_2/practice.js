// get button and make button a variable
const button = document.querySelector('button');
 
function output(){
	// Get value from input
	const inputVal = document.getElementById("userInput").value;
	if ( inputVal === 'Google') {
		console.log('Google says hi')
	} else {
		console.log('We can only talk to Google')
	}
}

// when the button query is clicked run output function
button.addEventListener("click", output);