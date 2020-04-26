alert("You have 5 guesses. Guess 1 - 10");

var answer = 3;
var guess = prompt("Whats your guess?");
var guesses;

for(i = 0; i < 5; i++){
	//Count number of gues
	var j = i + 1;
	guesses = 5 - j;
	//Verify guess is between 1 & 10
	if( guess > 10 || guess < 1){
		//Notify on second to last guess
		if( guesses == 1 ){
			guess = prompt("Please guess a number between 1 and 10. You have " + guesses + " guess left.");
		}
		//Notify on last guess
		else if( guesses == 0 ){
			guess = prompt("Please guess a number between 1 and 10. You are on your last guess.");
		}
		else{
			guess = prompt("Please guess a number between 1 and 10. You have " + guesses + " guesses left.");
		}
	}
	else if( answer == guess ){
		alert("You guessed correctly");
		break;
	}
	//If guess is between 1 & 10 but still not correct.
	else{
		if( guesses == 1 ){
			guess = prompt("Please Try Again. You have " + guesses + " guess left.");
		}
		else if( guesses == 0 ){
			guess = prompt("Please Try Again. You are on your last guess.");
		}
		else{
			guess = prompt("Please Try Again. You have " + guesses + " guesses left.");
		}
	}
}