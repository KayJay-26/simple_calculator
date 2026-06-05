const display = document.getElementById("display");

const buttons = document.querySelectorAll(".btn");

const clearBtn = document.getElementById("clear");

const equalsBtn = document.getElementById("equals");

let expression = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    expression += button.innerText;

    display.innerText = expression;
  });
});

clearBtn.addEventListener("click", () => {
  expression = "";

  display.innerText = "0";
});

equalsBtn.addEventListener("click", () => {
  try {
    expression = eval(expression).toString();

    display.innerText = expression;
  } catch {
    display.innerText = "Error";

    expression = "";
  }
});
