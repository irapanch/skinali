const swiperReviews = new Swiper('.reviews__slider', {
    
    direction: 'horizontal',
    loop: true,
  
    
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    slidesPerView: 2,
    spaceBetween: 30,
  
    
  });

  const swiperOprosnik = new Swiper('.oprosnik__slider', {
    
    direction: 'horizontal',
    loop: true,
  
    
    pagination: {
      el: '.swiper-pagination-progressbar-fill ',
      // clickable: true,
    },

    slidesPerView: 1,
    spaceBetween: 30,
  
    
  });