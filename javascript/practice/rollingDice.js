var numSides = prompt("How many sides does the die have?");
var numRolls = prompt("How many dice do you have?");

function rollDice(numSides) {
  return Math.floor(Math.random() * numSides) + 1;
}

for (var i = 0; i < numRolls; i++) {
  console.log(rollDice(numSides));
}