const buttons = document.querySelectorAll("a.btn");
let count = 0;
const imageVar = document.getElementById("customer-img");
const url = "./img/";
const quote = document.getElementById("customer-text");
const authorName = document.getElementById("customer-name");

const quoteVar = [
  {
    img: "customer-",
    authorName: "CUSTOMER NAME",
    quote:
      "rem ipsum dolor sit amet consectetur adipisicing elit. Totam sit voluptatum illo? Quae fugiat aspernatur harum aperiam, quis eos officia.",
  },
  {
    img: "customer-",
    authorName: "Sandy",
    quote:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock",
  },
  {
    img: "customer-",
    authorName: "Amy",
    quote:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
  },
  {
    img: "customer-",
    authorName: "Tyrell",
    quote:
      "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
  },
  {
    img: "customer-",
    authorName: "Wanda",
    quote:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
];

let len = quoteVar.length;

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    if (button.classList.contains("nextBtn")) {
      count++;
      console.log(len);
      if (count > len - 1) {
        console.log(count);
        count = 0;
      }
      imageVar.src = url + quoteVar[count].img + count + ".jpg";
      quote.innerHTML = quoteVar[count].quote;
      authorName.innerHTML = quoteVar[count].authorName;
    } else if (button.classList.contains("prevBtn")) {
      count--;

      if (count < 0) {
        count = len - 1;
      }

      imageVar.src = url + quoteVar[count].img + count + ".jpg";
      quote.innerHTML = quoteVar[count].quote;
      authorName.innerHTML = quoteVar[count].authorName;
    }
  });

  {
  }
});
