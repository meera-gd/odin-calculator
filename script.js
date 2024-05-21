function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function multiply(a, b) {
	return a * b;
}

function divide(a, b) {
	if (b === 0) {
		return 'Oops!';
	}
	return a / b;
}

function operate(operator, num1, num2) {
	switch (operator) {
		case '+': return add(num1, num2);
		case '-': return subtract(num1, num2);
		case '*': return multiply(num1, num2);
		case '/': return divide(num1, num2);
	}
}

const display = document.querySelector('#display');
let displayValue = '';

const digitBtns = document.querySelectorAll('#digits button');
digitBtns.forEach(btn => {
	btn.addEventListener('click', e => {
		displayValue += e.target.textContent;
		display.textContent = displayValue;
		console.log(num1, operator, num2);
	});
});

let num1;
let operator;
let num2;

const opBtns = document.querySelectorAll('#operators button');
opBtns.forEach(btn => {
	btn.addEventListener('click', e => {
		if (operator !== undefined) { // handles case where an operator has already been pressed
			num2 = Number(displayValue);

			const answer = operate(operator, num1, num2);
			displayValue = String(typeof answer === 'number' ? Math.round(answer * 1000) / 1000 : answer);
			display.textContent = displayValue;
			displayValue = '';

			num1 = answer;
			operator = e.target.textContent;
			num2 = undefined;
		} else { // handles case where number no operator has been pressed yet
			num1 = Number(displayValue);
			operator = e.target.textContent;

			displayValue = '';
			display.textContent = displayValue;
		}
		console.log(num1, operator, num2);
	});
});

const equalsBtn = document.querySelector('#equals');
equalsBtn.addEventListener('click', () => {
	num2 = Number(displayValue);

	const answer = operate(operator ?? '+', num1, num2);
	displayValue = String(typeof answer === 'number' ? Math.round(answer * 1000) / 1000 : answer);
	display.textContent = displayValue;

	num1 = answer;
	operator = undefined;
	num2 = undefined;
});

const clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click', e => {
	num1 = undefined;
	operator = undefined;
	num2 = undefined;

	displayValue = '';
	display.textContent = displayValue;
});
