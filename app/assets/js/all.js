console.log('Hello!');

$(document).ready(() => {
  console.log('HesSchool Hello!');

  
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
});