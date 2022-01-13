const buttons = document.querySelectorAll(".btn");
const input = document.querySelector(".screen");
const equal = document.querySelector(".btn-equal");
const clear = document.querySelector(".btn-clear");
console.log(clear);

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let value = e.target.dataset.num;
    input.value += value;
    //input.value = e.target.dataset.num;
  });
});

equal.addEventListener("click", (e) => {
  if (input.value === " ") {
    input.value = "please enter some value";
  } else {
    let answer = eval(input.value);
    input.value = answer;
  }
});

clear.addEventListener("click", (e) => {
  input.value = "";
});
