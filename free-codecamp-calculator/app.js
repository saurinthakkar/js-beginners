const calculator = document.querySelector(".calculator");
const keys = document.querySelector(".calculator__keys");
const display = document.querySelector(".calculator__display");
//console.log(calculator, keys);
console.log(display);

keys.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    //console.log("button");
    const key = e.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;
    const displayNum = display.textContent;
    //console.log(keyContent, displayNum);
    if (!action) {
      //console.log("Number key");
      if (displayNum === "0") {
        display.textContent = keyContent;
      } else {
        display.textContent += keyContent;
      }
    }
    if (
      action === "add" ||
      action === "subtract" ||
      action === "multiply" ||
      action === "divide"
    ) {
      //console.log(key);
      key.classList.add("is-depressed");
      calculator.dataset.previousKeyType = "operator";
    }
    if (action === "decimal") {
      //console.log("decimal key");
      display.textContent = displayNum + ".";
    }
    if (action === "clear") {
      display.textContent = "0";
      //console.log("clear key");
    }
    if (action == "calculate") {
      console.log("equal key");
    }
    Array.from(key.parentNode.children).forEach((k) =>
      k.classList.remove("is-depressed")
    );
  }
});
