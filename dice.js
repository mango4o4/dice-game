// note: all of the variables are global variables
var die1, die2, dieSum, balance, banner, outcome, die1Name, die2Name, numRolls, i; // define variables
balance = 0;  // initial value
var die1Image = new Image();
var die2Image = new Image();


function rollDice() {
  die1 = Math.floor(Math.random() * 6) + 1;
  die2 = Math.floor(Math.random() * 6) + 1;
  dieSum = die1 + die2;

  // set the dice images based on the roll
  die1Image = document.querySelectorAll("img")[0];
  die1Name = "images/dice" + die1 + ".png";
  die1Image.setAttribute("src", die1Name);

  die2Image = document.querySelectorAll("img")[1];
  die2Name = "images/dice" + die2 + ".png";
  die2Image.setAttribute("src", die2Name);
}

function whoWon() {
    // in h3 report how much money was won or lost and the balance
  if (dieSum <= 5){
    outcome = "You lost! Pay me " + 5 + " dollars >:)";
    balance -= 5;
  } else if (dieSum >= 9){
    outcome = "You won! I'll pay you " + 5 + " dollars :)";
    balance += 5;
  } else {
    outcome = "It's a draw! Nobody wins :/";
  }
  // Report the outcome:
  banner = die1 + " + " + die2 + " is " + dieSum;
  balance = balance ++;
  document.querySelector("h3").innerHTML = banner + "<br>" + outcome + "<br>" + "<br>" + "Your balance is " + balance + " dollars! :P"; 
}


function letsPlay(){
  numRolls = parseInt(prompt("How many times would you like to roll?"));
  
	for (let i = 0; i < numRolls; i++) {
	rollDice();
	whoWon();
}
  
}
