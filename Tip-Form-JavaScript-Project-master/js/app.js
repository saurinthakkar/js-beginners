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
  //console.log(inputService);
  inputService.appendChild(option);
});

let validateTip = function (billValue, users, service) {
  //console.log(billValue, users, service);
  let isFeedback = false;
  const feedback = document.querySelector(".feedback");
  feedback.innerHTML = "";
  console.log(billValue <= "0");

  if (billValue <= "0" || billValue === "") {
    feedback.classList.add("showItem", "alert-danger");
    feedback.innerHTML += "<p>Bill amount cannot be blank</p>";
    isFeedback = true;
  }
  if (users <= "0" || users === "") {
    feedback.classList.add("showItem", "alert-danger");
    feedback.innerHTML += "<p>No. of users cannot be blank</p>";
    isFeedback = true;
  }

  if (service <= "0") {
    feedback.classList.add("showItem", "alert-danger");
    feedback.innerHTML += "<p>Service cannot be blank</p>";
    isFeedback = true;
  }
  return isFeedback;
};

const calculateTip = function (billValue, users, service) {
  let percentTip = "";
  if (service === "1") {
    percentTip = 0.2;
  } else if (service === "2") {
    percentTip = 0.1;
  } else {
    percentTip = 0.02;
  }

  const tipAmt = Number(billValue) * percentTip;
  const totalAmt = Number(billValue) + Number(tipAmt);
  const eachPerson = Number(totalAmt) / Number(users);

  //console.log(tipAmt, totalAmt, eachPerson);
  return [tipAmt, totalAmt, eachPerson];
};

const inputForm = document.querySelector("#tip-form");
//console.log(inputForm);
inputForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputBill = document.querySelector("#input-bill");
  const inputUsers = document.querySelector("#input-users");
  const inputService = document.querySelector("#input-service");

  let billValue = inputBill.value;
  let users = inputUsers.value;
  let service = inputService.value;

  const feedback = validateTip(billValue, users, service);
  console.log(feedback);

  if (!feedback) {
    const loader = document.querySelector(".loader");
    const resultsDOM = document.querySelector(".results");
    const tipAmountDOM = document.querySelector("#tip-amount");
    const totalAmountDOM = document.querySelector("#total-amount");
    const personAmountDOM = document.querySelector("#person-amount");

    const results = calculateTip(billValue, users, service);

    //console.log(tipAmountDOM);

    loader.classList.add("showItem");
    setTimeout(function () {
      loader.classList.remove("showItem");
      tipAmountDOM.textContent = `${results[0].toFixed(2)}`;
      totalAmountDOM.textContent = `${results[1].toFixed(2)}`;
      personAmountDOM.textContent = `${results[2].toFixed(2)}`;
      resultsDOM.classList.add("showItem");
      //console.log(newVar);
    }, 2000);

    setTimeout(function () {
      inputBill.value = "";
      inputUsers.value = "";
      inputService.value = 0;
      resultsDOM.classList.remove("showItem");
      console.log("last sentence");
    }, 10000);
  }

  //console.log(inputBill, inputUsers, inputService);
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
