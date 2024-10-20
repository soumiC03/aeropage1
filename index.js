var swiper = new Swiper(".mySwiper", {});

var icon = document.getElementById("dark-icon");
var logo = document.getElementById("logo-dark");
var logo2 = document.getElementById("logo-dark2");
var logo3 = document.getElementById("logo-dark3");

icon.addEventListener("click",() =>{
  document.body.classList.toggle("dark-theme");
  if(document.body.classList.contains("dark-theme"))
    {
  icon.src ="images/onb img1_files/sun.jfif" ;
  logo.src = "images/logowhite.png";
  logo2.src = "images/logowhite.png";
  logo3.src = "images/logowhite.png";

  } else {
    icon.src = "images/onb img1_files/moon.jfif" ;
    logo.src = "images/logo.jfif";
    logo2.src = "images/logo.jfif";
    logo3.src = "images/logo.jfif";
  }
});

var arrow = document.querySelector(".to-top");

window.addEventListener("scroll" , () => {
  arrow.classList.toggle("active",window.scrollY > 400);
})

var stickynav = document.querySelector(".navigationbar");

window.addEventListener("scroll",() => {
  stickynav.classList.toggle("sticky", window.scrollY > 100);
})


