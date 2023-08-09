var product_side_figure = document.querySelector("#side-figure");

product_side_figure.addEventListener("mousemove", function(e) {
  var i = this.offsetWidth,
    s = 800 - i,
    d = this.getBoundingClientRect(),
    t = (e.pageX - d.left) * s / i,
    y = (e.pageY - d.top) * s / i;

  this.classList.add("zoom-active");
  this.querySelector("img").style.top = "-" + y + "px";
  this.querySelector("img").style.left = "-" + t + "px";
});

product_side_figure.addEventListener("mouseleave", function() {
  this.classList.remove("zoom-active");
  this.querySelector("img").style.top = "0";
  this.querySelector("img").style.left = "0";
});

window.addEventListener("sticky-header", function() {
  if (is_admin_bar) {
    product_side_figure.classList.add("sticky-header", "admin");
  } else {
    product_side_figure.classList.add("sticky-header");
  }
});

window.addEventListener("un-sticky-header", function() {
  if (is_admin_bar) {
    product_side_figure.classList.remove("sticky-header", "admin");
  } else {
    product_side_figure.classList.remove("sticky-header");
  }
});

var orderResume = document.getElementById("order-resume");
var orderResumeDetails = document.getElementById("order-resume-details");

orderResume.addEventListener("click", function() {
  this.classList.toggle("active");
  orderResumeDetails.classList.toggle("active");
});
/*******review */
let popup = document.querySelector(".popup");
let btn_review = document.querySelector("#review");
let x =document.querySelector('#x');

btn_review.addEventListener("click", function() {
  popup.style.display = "flex";
});
popup.onmousedown = function (event) {
  if (event.target === popup) {
    popup.style.display = "none";
  }
}
x.addEventListener("click",function () {

  popup.style.display='none';

})

//