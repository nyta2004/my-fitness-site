/* ************************changer backround****************************** */
var img = document.getElementById("header");

let imgs = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];

//img.style.backgroundImage = url("/src/img/02.jpg");
let randomimg = Math.floor(Math.random() * imgs.length);
//img.style.backgroundImage = 'URL("./src/img/' + imgs[randomimg] + '")';

setInterval(
  () => {
    let randomimg = Math.floor(Math.random() * imgs.length);
  // img.style.backgroundImage = 'URL("./src/img/' + imgs[randomimg] + '")';
  },

  10000
);
/* *******************************scrol btn top******************************* */

let scrollBtnTop = document.querySelector(".scrool");
let afichelignh = document.querySelector("#lighn");
let c = document.querySelector("#c");
let c2 = document.querySelector("#c2");
let c3 = document.querySelector("#cc3");
window.onscroll = () => {
  if (this.scrollY >= 850) {
    scrollBtnTop.classList.add("show");
    afichelignh.classList.add("lighnn");
    c.classList.add("cc");
    c2.classList.add("cc2");
    c3.classList.add("cc3");
  } else {
    scrollBtnTop.classList.remove("show");
    afichelignh.classList.remove("lighnn");
    c.classList.remove("cc");
    c2.classList.remove("cc2");
    c3.classList.remove("cc3");
  }
};

scrollBtnTop.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
/****************************************************************clacule bmi *************************************************** */

function my() {
  let age = document.getElementById("age").value;
  let cntm = document.getElementById("cntm").value;
  let Weight = document.getElementById("Weight").value;
  let inches = document.getElementById("inche");
  let resultat = document.getElementById("res");
  var cmtom = (cntm / 100) * 2;
  var centimeters = (inches * 2.54) / 100;
  let resul2 = Weight / centimeters;
  let resul = Weight / cmtom;
  if (cntm === "" || cntm >=220) {
    resultat.innerHTML = "entrer a valid height";
  } else if (Weight === "") {
    resultat.innerHTML = "entrer a valid weight";
  } else if (age === "") {
    resultat.innerHTML = "entrer a valid age";
  } else {
    resultat.innerHTML = resul.toFixed(2);
  }
}

my();
