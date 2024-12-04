const swiper = new Swiper('.reviews__slider', {
    
    direction: 'horizontal',
    loop: true,
  
    
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    slidesPerView: 2,
    spaceBetween: 30,
  
    
  });