// fix header
let header = document.querySelector('.header');

if(header) {
  window.onscroll = function(){
    if(document.documentElement.scrollTop > 650){
      header.classList.add("header-fixed");
    }
    else{
      header.classList.remove("header-fixed");
    }
  }
}

// mobile menu 
let menuMobileBtn = document.querySelector('.menu-mobile-btn');
let menuLines = document.querySelector('.line-menu');
let menuMobBox = document.querySelector('.menu-box');
let menuItem = document.querySelectorAll('.menu-item');

menuMobileBtn.addEventListener('click', function(){
  menuMobileBtn.classList.toggle("open");  
  menuMobBox.classList.toggle("menu-active");
});

menuItem.forEach(function(btn) {
  btn.addEventListener('click', function() {
    menuMobileBtn.classList.remove("open");
    menuMobBox.classList.remove("menu-active");
  });
});


// slick shedule 
$(document).ready(function(){
    $('.shedule-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1
    });
  });

  // slick statistics
  $(document).ready(function(){
    $('.showcase-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 2
    });
  });