
/*******************slider*********** */
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n ) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

/*********************menu button */
let menu_button =document.querySelector('.menu_button');
let menu_x =document.querySelector('#menuX');
let nav_menu = document.querySelector('nav');

menu_button.addEventListener("click",function () {
 
  nav_menu.style.opacity='01';
  nav_menu.style.display='block';
  nav_menu.style.height='100%';
 
})
menu_x.addEventListener("click",function () {

  nav_menu.style.opacity='0';
  nav_menu.style.display='none';

})