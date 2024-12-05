const swiperReviews = new Swiper('.reviews__slider', {
    
    direction: 'horizontal',
    loop: true,
  
    
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    slidesPerView: 2,
    spaceBetween: 30,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl:'.swiper-button-prev',
    }
  
    
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