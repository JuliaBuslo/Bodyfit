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

// slik shedule 
$(document).ready(function(){
    $('.shedule-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1
    });
  });