const buttons = document.querySelectorAll('button');
const disp = document.querySelector('.disp');
const hist = document.querySelector('.hist');
const dec = document.querySelector('#dec');

let displayValue = 0;
let operatorPressed = 0;
let operationOnHist = 0
let storedValue;
let newValue;
let operator = '';

buttons.forEach((button) => {
	button.addEventListener('click', () => {
		displayFunction (button.id);
	});
});

const displayFunction = function displayNumber (id) {
	switch (id) {
		case "0":
			if (operatorPressed === 0 && disp.innerText != 'Error') {
				disp.innerHTML += '0';
			} else {
				disp.innerHTML = '0';
				operatorPressed = 0;
			}
			break;
		case "1":
			if (disp.innerText != '0' && operatorPressed === 0 && disp.innerText != 'Error')  {
				disp.innerHTML += '1';
			} else {
				disp.innerHTML = '1';
				operatorPressed = 0;
			}
			break;
		case "2":
			if (disp.innerText != '0' && operatorPressed === 0 && disp.innerText != 'Error') {
				disp.innerHTML += '2';
			} else {
				disp.innerHTML = '2';
				operatorPressed = 0;
			}
			break;
		case "3":
			if (disp.innerText != '0' && operatorPressed === 0 && disp.innerText != 'Error') {
				disp.innerHTML += '3';
			} else {
				disp.innerHTML = '3';
				operatorPressed = 0;
			}
			break;
		case "4":
			if (disp.innerText != '0' && operatorPressed === 0 && disp.innerText != 'Error') {
				disp.innerHTML += '4';
			} else {
				disp.innerHTML = '4';
				operatorPressed = 0;
			}
			break;
		case "5":
			if (disp.innerText != '0' && operatorPressed === 0 && disp.innerText != 'Error') {
				disp.innerHTML += '5';
			} else {
				disp.innerHTML = '5';
				operatorPressed = 0;
			}
			break;
		case "6":
			if (disp.innerText != '0' && operatorPressed === 0 && disp.innerText != 'Error') {
				disp.innerHTML += '6';
			} else {
				disp.innerHTML = '6';
				operatorPressed = 0;
			}
			break;
		case "7":
			if (disp.innerText != '0' && operatorPressed === 0 && disp.innerText != 'Error') {
				disp.innerHTML += '7';
			} else {
				disp.innerHTML = '7';
				operatorPressed = 0;
			}
			break;
		case "8":
			if (disp.innerText != '0' && operatorPressed === 0 && disp.innerText != 'Error') {
				disp.innerHTML += '8';
			} else {
				disp.innerHTML = '8';
				operatorPressed = 0;
			}
			break;
		case "9":
			if (disp.innerText != '0' && operatorPressed === 0 && disp.innerText != 'Error') {
				disp.innerHTML += '9';
			} else {
				disp.innerHTML = '9';
				operatorPressed = 0;
			}
			break;
		case "add":
			if (disp.innerText != 'Error') {
				operatorPressed = 1;
				newValue = parseFloat(disp.innerText, 10);
				if(!operationOnHist) {
					hist.innerText = disp.innerText + ' + ';
					operationOnHist = 1;
					storedValue = newValue;
					operator = '+';
				} else {
					hist.innerHTML = `${operate (operator, storedValue, newValue)}` + ' + ';
					storedValue = operate (operator, storedValue, newValue);
				}
				operator = '+';
				disp.innerText = '0';
				dec.removeAttribute('disabled');
			}
			break;
		case "sub":
			if (disp.innerText != 'Error') {
				operatorPressed = 1;
				newValue = parseFloat(disp.innerText, 10);
				if(!operationOnHist) {
					hist.innerText = disp.innerText + ' - ';
					operationOnHist = 1;
					storedValue = newValue;
					operator = '-';
				} else {
					hist.innerHTML = `${operate (operator, storedValue, newValue)}` + ' - ';
					storedValue = operate (operator, storedValue, newValue);
				}
				operator = '-';
				disp.innerText = '0';
				dec.removeAttribute('disabled');
			}
			break;
		case "mult":
			if (disp.innerText != 'Error') {
				operatorPressed = 1;
				newValue = parseFloat(disp.innerText, 10);
				if(!operationOnHist) {
					hist.innerText = disp.innerText + ' x ';
					operationOnHist = 1;
					storedValue = newValue;
					operator = 'x';
				} else {
					hist.innerHTML = `${operate (operator, storedValue, newValue)}` + ' x ';
					storedValue = operate (operator, storedValue, newValue);
				}
				operator = 'x';
				disp.innerText = '0';
				dec.removeAttribute('disabled');
			}
			break;
		case "divi":
			if (disp.innerText != 'Error') {
				operatorPressed = 1;
				newValue = parseFloat(disp.innerText, 10);
				if(!operationOnHist) {
					hist.innerText = disp.innerText + ' &#247; ';
					operationOnHist = 1;
					storedValue = newValue;
					operator = '&#247;';
				} else {
					hist.innerHTML = `${operate (operator, storedValue, newValue)}` + ' &#247; ';
					storedValue = operate (operator, storedValue, newValue);
				}
				operator = '&#247;';
				disp.innerText = '0';
				dec.removeAttribute('disabled');
			}
			break;
		case "del":
			if (disp.innerText != '0' && disp.innerText != 'Error') {
				disp.innerText = `${disp.innerText.slice(0, -1)}`;
			}
			if (disp.innerText === '' || disp.innerText === 'Error') {
				disp.innerText = '0';
			}
			break;
		case "AC":
			hist.innerHTML = '';
			disp.innerHTML = '0';
			operationOnHist = 0;
			displayValue = 0;
			storedValue = 0;
			newValue = 0;
			dec.removeAttribute('disabled');
			break;
		case "perc":
			if (disp.innerText != 'Error') {
				operatorPressed = 1;
				operator = '%';
				newValue = parseFloat(disp.innerText, 10);
				if(!operationOnHist) {
					hist.innerHTML = disp.innerText + ' % ';
					operationOnHist = 1;
					storedValue = parseFloat(disp.innerText, 10);
				} else {
					result = operate ('%', storedValue, newValue);
					hist.innerHTML += disp.innerText + ' = ';
					disp.innerText = `${result}`;
					operationOnHist = 0;
					storedValue = result;
				}
				dec.removeAttribute('disabled');
			}
			break;
		case "dec":
			disp.innerHTML += '.';
			dec.setAttribute('disabled', 'true');
			break;
		case 'equal':
			if (operator != '') {
			newValue = parseFloat(disp.innerText, 10);
			disp.innerHTML = `${operate (operator, storedValue, newValue)}`;
			hist.innerHTML = `${storedValue} ${operator} ${newValue} =`
			storedValue = operate (operator, storedValue, newValue);
			operationOnHist = 0;
			operator = '';
			dec.removeAttribute('disabled');
			}
			break;
		case 'signal':
			let temp = parseFloat(disp.innerText,10);
			temp *= -1;
			disp.innerText = `${temp}`;
			break;
	}
  }

const add = function addTwoNumbers (a, b) {
	return a + b;
}

const subtract = function subtractTwoNumbers (a, b) {
	return a - b;
}	

const multiply = function multiplyTwoNumbers (a, b) {
	return a * b;
}

const divide = function divideTwoNumbers (a, b) {
	if (b === 0) {
		return ('Error');
	}
	return a / b;
}

const operate = function appliesOperatorOnTwoNumbers (operator, a, b) {
	switch (operator) {
		case '+':
			return (add(a , b));
		case '-':
			return (subtract(a , b));
		case 'x':
			return (multiply(a , b));
		case '&#247;':
			return (divide(a , b));
		case '%':
			return (multiply(divide(a, 100), b));
	}
}
