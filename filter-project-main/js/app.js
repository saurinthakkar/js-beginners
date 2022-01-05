const buttons = document.querySelectorAll("a.btn");
//console.log(buttons);

const url = "./img/";

let imgArray = [
  "cake-1",
  "cake-2",
  "cake-3",
  "cupcake-1",
  "cupcake-2",
  "cupcake-3",
  "doughnut-1",
  "doughnut-2",
  "doughnut-3",
  "headerBcg",
  "sweets-1",
  "sweets-2",
  "sweets-3",
  "z-cake-2",
  "z-sweets-3",
];

function myfunction(justVar) {}

buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    e.preventDefault();
    console.log(button);
    if (button.getAttribute("data-filter") === "all") {
      console.log("all");
    } else if (button.getAttribute("data-filter") === "cakes") {
      console.log("cakes");
      let cakeArray = [];
      let res = imgArray.filter(() =>
        imgArray.includes(imgArray.values === "cake")
      );
      console.log(res);
    } else if (button.getAttribute("data-filter") === "cupcakes") {
      console.log("cupcakes");
    } else if (button.getAttribute("data-filter") === "sweets") {
      console.log("sweets");
    } else {
      console.log("Doughnots");
    }
  });
});
