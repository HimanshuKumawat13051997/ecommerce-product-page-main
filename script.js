let cro = document.getElementsByClassName("crousel");
let close = document.getElementsByClassName("close1");
let selecter = document.getElementsByClassName("wwe1");

for (let i = 0; i < selecter.length; i++) {
  selecter[i].addEventListener("click", function () {
    cro[0].style.display = "flex";
  });
}

let slideIndex = 1;
showSlides(slideIndex);

close[0].addEventListener("click", function () {
  cro[0].style.display = "none";
});

function plus(n) {
  showSlides((slideIndex += n));
}
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

let me = document.getElementsByClassName("meter");
let cartclick = document.getElementsByClassName("cart");
let buttons = document.getElementsByClassName("btn2");
let innercart = document.getElementsByClassName("nocart");
let cartbtn = document.getElementsByClassName("cardbutton");
let rrrr = document.getElementsByClassName("rrrr");
let get = document.getElementsByClassName("get");
let pa = document.getElementsByClassName("pa");
let sname = document.getElementsByClassName("sname");
let kk = document.getElementsByClassName("kk");
let llll = document.getElementsByClassName("llll");
let price1 = document.getElementsByClassName("price1");
let get1 = document.getElementsByClassName("get1");
let recieve = document.getElementsByClassName("recieve");
let sff = document.getElementsByClassName("sff");
let cardbutton = document.getElementsByClassName("cardbutton");
let baisa = document.getElementsByClassName("cartcard");
let value = +me[0].textContent;
var d = 0;
change(value);

function chan(n) {
  if (value < 0) {
    change((value = n));
  } else {
    change((value += n));
  }
  d = me[0].textContent;
  buttons[0].addEventListener("click", function () {
    if (d <= 0) {
      rrrr[0].style.display = "none";
      innercart[0].style.zIndex = "1";
    }
    if (d > 0) {
      rrrr[0].style.display = "inline-block";
      rrrr[0].textContent = d;
      innercart[0].style.zIndex = "-1";
      get[0].setAttribute("src", "images/image-product-1.jpg");
      pa[0].textContent = sname[0].textContent;
      let result =
        parseFloat(rrrr[0].textContent) * parseFloat(kk[0].textContent);
      price1[0].textContent = llll[0].textContent + kk[0].textContent;
      get1[0].textContent = "x" + " " + rrrr[0].textContent;
      recieve[0].textContent = "$" + result.toFixed(2);
    }
  });
}

cartclick[0].addEventListener("click", function () {
  baisa[0].classList.toggle("todisplay");
});

function change(n) {
  if (n >= 0) {
    me[0].textContent = n.toString();
  }
}
let tt = () => {
  innercart[0].style.zIndex = "1";
  value = 0;
  rrrr[0].style.display = "none";
  change(value);
  chan(0);
};
sff[0].addEventListener("click", tt);

cardbutton[0].addEventListener("click", function () {
  alert("Your Order for " + pa[0].textContent + " " + "has been placed.");
  tt();
});
