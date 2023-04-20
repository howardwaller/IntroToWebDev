// These elements will be used in both functions.
var numberFun = document.forms["numberFun"];
var number1 = document.getElementById("number1");
var number2 = document.getElementById("number2");
var number3 = document.getElementById("number3");
var results = document.getElementById("results");
var submitButton = document.getElementById("submitButton");

function resetView() {
    numberFun.className = "needs-validation";
    results.style.display = "none";
    submitButton.innerText = "Calculate";
    number1.focus();
}

function validate() {

    numberFun.className = "needs-validation";

    if (!numberFun.checkValidity()) {
        numberFun.className = "was-validated";
        return false;
    }

    var operand1 = parseInt(number1.value, 10);
    var operand2 = parseInt(number2.value, 10);
	var operand2 = parseInt(number3.value, 10);
	
    document.getElementById("addResult").innerText = operand1 + operand2;
    document.getElementById("subtractResult").innerText = operand1 - operand2;
    document.getElementById("multiplyResult").innerText = operand1 * operand2;
    document.getElementById("divideResult").innerText = operand1 / operand2;

    results.style.display = "block";
    submitButton.innerText = "Recalculate";

    // We always return false so that the form doesn't submit.
    // Submission causes the page to reload.
    return false;
}
var array1 = [];
//var i = num1;
function calcEvens() {
	for (var i = number1; i < number2; i++) {
	if  (number1 % 2 == 0)
	{array1.push(number1)}

return (array1);
}
}

function displayNumber() {
	const numberInput = document.getElementById("number1")
	const display = document.getElementById("display")
	const number = Number(numberInput.value);
	display.innerText = `Here are the even numbers between: ${number1}`;
}

function displayEvens() {
	const numberInput = document.getElementById("array1")
	const display = document.getElementById("display")
	const number = Number(numberInput.value);
	//display.innerText = `Here are the even numbers between: ${number1}`;//
}