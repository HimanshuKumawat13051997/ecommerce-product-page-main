

let index = 1;
maincro(index);

function him(n) {
  maincro(index = n);
}

function pl(n){
  maincro(index += n);
}

function maincro(n) {
  let i;
  let slide = document.getElementsByClassName("gracias");
  let dot = document.getElementsByClassName("dot1");
  if (n > slide.length) {
    index = 1;
  }
  if (n < 1) {
    index = slide.length;
  }
  for (i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";
  }

  for (i = 0; i < dot.length; i++) {
    dot[i].className = dot[i].className.replace(" active", "");
  }
  slide[index - 1].style.display = "block";
  dot[index - 1].className += " active";
}

let burger = document.getElementsByClassName("burger")
let sidenav = document.getElementsByClassName("sidenav")
let clit = document.getElementsByClassName("clit")

burger[0].addEventListener('click', function(event){
  sidenav[0].classList.toggle('navdisplay')
})

clit[0].addEventListener('click', function(event){
  sidenav[0].classList.toggle('navdisplay')
})