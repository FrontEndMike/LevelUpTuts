const button = document.querySelector('button');
 

function output(){
	const inputVal = document.getElementById("userInput").value;
	if ( inputVal === 'Google') {
		console.log('Google says hi')
	} else {
		console.log('We can only talk to Google')
	}
}

button.addEventListener("click", output);