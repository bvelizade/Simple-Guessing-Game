
var number = prompt("Guess a number!");

if(number==6) {
	alert("You guessed it!");
}

else if(number<=5) {
	prompt("Too low!!! Guess again!");
}
else if(number>=7) {
	prompt("Too High!!! Guess again");
}