const calculator = document.querySelector(".calculator");
const keys = document.querySelector(".calculator__keys");
console.log(calculator, keys);

keys.addEventListener("click", (e) => {
  console.log(e.target.matches("button"));
});
