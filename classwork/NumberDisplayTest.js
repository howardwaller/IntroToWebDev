function displayNumber() {
	const numberInput = document.getElementById("number")
	const display = document.getElementById("display")
	const number = Number(numberInput.value);
	display.innerText = `You entered: ${number}`;
}