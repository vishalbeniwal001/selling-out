let leftiphone = document.getElementById("leftiphone");
let rightiphone = document.getElementById("rightiphone");
let leftImage = leftiphone.querySelector("img");
let rightImage = rightiphone.querySelector("img");

let clrbtn = {
  clr1: document.getElementsByClassName("c1"),
  clr2: document.getElementsByClassName("c2"),
  clr3: document.getElementsByClassName("c3"),
  clr4: document.getElementsByClassName("c4"),
};

const handleClick = (clr) => {
  switch (clr) {
    case "clr1":
      changeiphone("./assets/1.png", "./assets/11.png");
      break;
    case "clr2":
      changeiphone("./assets/2.png", "./assets/22.png");
      break;
    case "clr3":
      changeiphone("./assets/3.png", "./assets/33.png");
      break;
    case "clr4":
      changeiphone("./assets/4.png", "./assets/44.png");
      break;
    default:
      break;
  }
};

const changeiphone = (url1, url2) => {
  leftImage.src = url1;
  rightImage.src = url2;

  rightiphone.classList.toggle('img2');
  rightiphone.classList.toggle('img2-invert');
};
