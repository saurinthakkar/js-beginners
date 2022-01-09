const imgStore = document.querySelectorAll(".store-img");

const lightboxCont = document.querySelector(".lightbox-container");
const lightboxItem = document.querySelector(".lightbox-item");
const lightboxclose = document.querySelector(".lightbox-close");
const lightboxCtrl = document.querySelectorAll(".lightbox-control");
// const leftbtn = document.querySelector("btnLeft");
// const rightbtn = document.querySelector("btnright");
let imglist = [];
let count;

imgStore.forEach((image) => {
  imglist.push(image.src);
});
let len = imglist.length;

//console.log(imglist);

imgStore.forEach((item) => {
  item.addEventListener("click", (e) => {
    //console.log(item);
    let selImage = e.target.src;

    let image = lightboxCont.classList.add("show");
    lightboxItem.style.backgroundImage = "url(" + selImage + ")";
    count = imglist.indexOf(selImage);
    //console.log(count);
  });
});

lightboxclose.addEventListener("click", () => {
  lightboxCont.classList.remove("show");
});

lightboxCtrl.forEach((button) => {
  button.addEventListener("click", () => {
    //console.log(button);
    if (button.classList.contains("btnRight")) {
      count++;
      //console.log(count, len);
      if (count >= len - 1) {
        count = 0;
      }
      //console.log(imglist[count], count);
      //console.log(imglist[count]);
      lightboxItem.style.backgroundImage = "url(" + imglist[count] + ")";
      //console.log(count);
    } else if (button.classList.contains("btnLeft")) {
      count--;
      if (count < 0) {
        count = len - 1;
      }

      lightboxItem.style.backgroundImage = "url(" + imglist[count] + ")";
      //console.log(count);
    }
  });
});
