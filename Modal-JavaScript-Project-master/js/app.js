const imgStore = document.querySelectorAll(".store-img");
console.log(imgStore);

imgStore.forEach((item) => {
  item.addEventListener("click", () => {
    alert("hello");
  });
});
