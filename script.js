const buttons = document.querySelectorAll("button");
const display = document.querySelector(".display");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    display.innerHTML = `${button.id}`;
  });
});

/*function display (id) {
  switch (id) {
    case "0":
      display.innerHTML = "0"
  }
}*/

function add (a, b) {
  return a + b;
}

function subtract (a, b) {
  return a - b;
}

function multiply (a, b) {
  return a * b;
}

function divide (a, b) {
  return a / b;
}

function operate (operator, a, b) {
  return (operator(a , b));
}
