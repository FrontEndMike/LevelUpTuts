alert("You have 5 guesses. Guess 1 - 10");

var answer = 3;
var guess = prompt("Whats your guess?");
var guesses;

for(i = 0; i < 5; i++){
	var j = i + 1;
	guesses = 5 - j;
	if( guess > 10 || guess < 1){
		if( guesses == 1 ){
			guess = prompt("Please guess a number between 1 and 10. You have " + guesses + " guess left.");
		}
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