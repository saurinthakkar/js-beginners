//First Solution
//const buttons = document.querySelectorAll("a.btn");
//const storeItem = document.querySelectorAll(".store-item");

// buttons.forEach(function (button) {
//   button.addEventListener("click", function (e) {
//     e.preventDefault();
//     if (button.getAttribute("data-filter") === "all") {
//       storeItem.forEach(function (item) {
//         item.style.display = "block";
//       });
//     } else if (button.getAttribute("data-filter") === "cakes") {
//       storeItem.forEach(function (item) {
//         if (item.classList.contains("cakes")) {
//           item.style.display = "block";
//         } else {
//           item.style.display = "none";
//         }
//       });
//     } else if (button.getAttribute("data-filter") === "cupcakes") {
//       storeItem.forEach(function (item) {
//         if (item.classList.contains("cupcakes")) {
//           item.style.display = "block";
//         } else {
//           item.style.display = "none";
//         }
//       });
//     } else if (button.getAttribute("data-filter") === "sweets") {
//       storeItem.forEach(function (item) {
//         if (item.classList.contains("sweets")) {
//           item.style.display = "block";
//         } else {
//           item.style.display = "none";
//         }
//       });
//     } else {
//       storeItem.forEach(function (item) {
//         if (item.classList.contains("doughnuts")) {
//           item.style.display = "block";
//         } else {
//           item.style.display = "none";
//         }
//       });
//     }
//   });
// });

//2nd solution

const buttons = document.querySelectorAll("a.btn");
const storeItem = document.querySelectorAll(".store-item");

buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    e.preventDefault();
    let filter = e.target.dataset.filter;
    console.log(filter);
    storeItem.forEach((item) => {
      if (filter === "all") {
        //console.log(item);
        item.style.display = "block";
      } else {
        //console.log(filter, item.dataset.item);
        if (item.classList.contains(filter)) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      }
    });
  });
});

//search type box logic

const searchBox = document.querySelector("#search-item");
console.log(searchBox);

searchBox.addEventListener("keyup", (e) => {
  console.log(e);
  //e.preventDefault();
  const searchFilter = e.target.value.toLowerCase().trim();
  console.log(searchFilter);
  storeItem.forEach(function (item) {
    if (item.textContent.includes(searchFilter)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});
