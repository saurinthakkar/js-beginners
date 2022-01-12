const buttons = document.querySelectorAll(".btn");
const input = document.querySelector(".screen");
console.log(input);

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let value = e.target.dataset.num;
    input.value += value;
    //input.value = e.target.dataset.num;
  });
});
