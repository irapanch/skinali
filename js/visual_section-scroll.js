document.addEventListener('scroll', function() {
    const section = document.querySelector('.visual__section');
    const scrollPosition = window.scrollY;
  
    if (scrollPosition > 0) {
      section.style.backgroundPosition = `${scrollPosition * 0.009}% center`;
    } else {
      section.style.backgroundPosition = 'center';
    }

    const header = document.querySelector('.header__bottom' );
    if (scrollPosition > 0) {
        header.classList.add('header__bottom-scroll');
    } else {
        header.classList.remove('header__bottom-scroll');
    }
    const headerInner = document.querySelector('.header__inner' );
    if (scrollPosition > 0) {
        headerInner.classList.add('header__inner-scroll');
    } else {
        headerInner.classList.remove('header__inner-scroll');
    }
    const phoneIcon = document.querySelector('.phone-icon' );
    if (scrollPosition > 0) {
        phoneIcon.classList.add('phone-scroll');
    } else {
        phoneIcon.classList.remove('phone-scroll');
    }
    const border = document.querySelector('.text__border' );
    if (scrollPosition > 0) {
        border.classList.add('text__border-scroll');
    } else {
        border.classList.remove('text__border-scroll');
    }
    

  });