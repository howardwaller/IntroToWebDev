// These JavaScript comments are instructions.
// Follow them step by step.
// When asked, write code to complete the task described.

// 1. FIND MAX
// ============
// Create a function named `findMax` that takes one parameter: an array of numbers named `numbers`.
// Find the maximum number in the array and return it.
// Tip: Start with 2 numbers in the array. Once the function works with 2 numbers, add a third, and so on.
// Write your code here:

var numbers = [100, 101, 12, 9, 18, 2];
var MaxNumber = 0;
function findMax(numbers) {
	MaxNumber = numbers[0];
	for (var position = 0; position < numbers.length - 1; position++)
	{var currentElement = numbers[position];
    var nextElement = numbers[position + 1];
	
	if (MaxNumber > nextElement)
		MaxNumber = MaxNumber
	else
		MaxNumber = nextElement
}
{return MaxNumber}
}
//MaxNumber = findMax(numbers);
console.log("The numbers are " + numbers + " and the max no. is " + findMax(numbers));

// Open index.html in your browser, open the JavaScript console, confirm the result.

// Uncomment the code below to verify your function is working.
console.log("findMax =====");
var numbers = [46, 3, 40, 74, 63];
var actual = findMax(numbers);
console.log("[46, 3, 40, 74, 63] -> expected: 74, actual: %s", actual);
numbers = [3, 3, 3, 3];
actual = findMax(numbers);
console.log("[3, 3, 3, 3] -> expected: 3, actual: %s", actual);
numbers = [-1];
actual = findMax(numbers);
console.log("[-1] -> expected: -1, actual: %s", actual);


// 2. COMBINE ARRAYS
// =================
// Create a function named `combine` that takes two array parameters. Any type of array will do.
// The function should create a new, empty array and then add all elements from each parameter array to it.
// The function should NOT alter either parameter.
// Write your code here:

// var i = 0;
// var n = 0;
// var m = 0;
// var array1 = [];
// var array2 = [];
//var m = array1.length;
//var n = array1.length + array2.length;

// attempt
function combine(array1, array2) {
var array3 = [];
for (var i = 0; i < array1.length; i++) {
	array3.push(array1[i]);
}	
for (var i = 0; i <= array2.length; i++) {
	array3.push(array2[i]);
}	
{return array3}
}

// Uncomment the code below to verify your function is working.
console.log("combine =====");
var merged = combine(["Oak", "Maple", "Birch"], ["Hydrogen", "Helium"]);
console.log("expected: Oak,Maple,Birch,Hydrogen,Helium\nactual: %s", merged);
merged = combine([12.5, 3, 855], [true, false, true]);
console.log("expected: 12.5,3,855,true,false,true\nactual: %s", merged);
merged = combine(["Saturn"], ["Black Lab", "Borzoi", "Pug"]);
console.log("expected: Saturn,Black Lab,Borzoi,Pug\nactual: %s", merged);


// 3. CHALLENGE: SUBTRACT AN ARRAY
// ====================
// Create a function named `subtractArray` that takes two array parameters.
// The function should return a new array that includes all elements from the first array
// that do not exist in the second array. In effect, we "subtract" the elements in the second array
// from the first and return the result.
// The function should NOT alter either parameter.
// Write your code here:

// Attempt 1. Numbers from the wrong array displayed
//function subtractArray(array1, array2) {
//var array3 = [];
//for (var i = 0; i <= array1.length; i++)
//{
//for (var j = 0; j <= array2.length; j++)
//{
//	if ((array1[i] = array2[j]))
//	{array3.push(array2[j]);}
//}
//return array3;
//}}

// Attempt 2. Too many numbers
//function subtractArray(array1, array2) {
//var array3 = [];
//for (var i = 0; i <= array2.length; i++)
//{
//for (var j = 0; j <= array1.length; j++)
//{
//	if ((array2[i] = array1[j]))
//	{array3.push(array1[j]);}
//}
//return array3;
//}}

// Attempt 3.
function subtractArray(array1, array2) {
var array3 = [];
for (var i = 0; i <= array1.length; i++)
{
for (var j = 0; j <= array2.length; j++)
{
	if ((array1[i] != array2[j]))
	{array3.push(array1[i]);}
}
return array3;
}}


// Uncomment the code below to verify your function is working.
console.log("subtractArray =====");
var result = subtractArray([1, 2, 3, 4, 5], [2, 4, 6]);
console.log("expected: 1,3,5\nactual: %s", result);
result = subtractArray(["Neptune", "Uranus", "Saturn", "Pluto"], ["Pluto"]);
console.log("expected: Neptune,Uranus,Saturn\nactual: %s", result);
result = subtractArray([1, 2, 3, 1, 2, 3, 1, 2, 3], [1, 3]);
console.log("expected: 2,2,2\nactual: %s", result);

/**********************************
 * The Software Guild
 * Copyright (C) 2019 Wiley edu LLC - All Rights Reserved
 *********************************/