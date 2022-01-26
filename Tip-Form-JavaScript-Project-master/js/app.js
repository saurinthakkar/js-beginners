const services = [
  {
    id: 1,
    value: "Great - 20%",
  },
  {
    id: 2,
    value: "Good - 10%",
  },
  {
    id: 3,
    value: "Bad - 2%",
  },
];

services.forEach((service) => {
  const option = document.createElement("option");
  option.textContent = service.value;
  option.value = service.id;
  //console.log(option.value);
  const inputService = document.querySelector("#input-service");
  console.log(inputService);
  inputService.appendChild(option);
});

// const inputBill = document.getElementById("input-bill");
// const inputUsers = document.getElementById("input-users");
// const submitBtn = document.querySelector(".submitBtn");
// const feedback = document.querySelector(".feedback");

// submitBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   feedback.classList.add("showitem", "alert-danger");
//   //document.querySelector(".feedback").classList.add(".showItem");
//   console.log(inputBill);
// });
