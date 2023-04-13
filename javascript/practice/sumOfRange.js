var testArray = [];
var sum = 0;

for (var n = 0; n < 5; n++) {
	var newElement = prompt("Enter a number of your choice:");
	newElement = parseInt(newElement);
	testArray.push(newElement);
}

for (var position = 0; position < testArray.length; position++) {
    sum += testArray[position];
}

console.log("The sum of " + testArray + " is: " + sum);