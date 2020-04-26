alert("You have 5 guesses. Guess 1 - 10");

var answer = 3;
var guess = prompt("Whats your guess?");


for(i = 0; i < 5; i++){
	if( answer == guess ){
		alert("You guessed correctly");
		break;
	}
	else{
		guess = prompt("Please Try Again");
	}
}