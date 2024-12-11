document.addEventListener('scroll', function() {
   
    const scrollPosition = window.scrollY;
  
    

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
    const linkScroll = document.querySelector('.header__scroll-wrap' );
    if (scrollPosition > 0) {
        linkScroll.classList.add('header__scroll');
    } else {
        linkScroll.classList.remove('header__scroll');
    }
    const menuScroll = document.querySelector('.header__menu-list' );
    if (scrollPosition > 0) {
        menuScroll.classList.add('header__scroll');
    } else {
        menuScroll.classList.remove('header__scroll');
    }
    const phoneScroll = document.querySelector('.header__scrollphone-wrap' );
    if (scrollPosition > 0) {
        phoneScroll.classList.add('header__scroll');
    } else {
        phoneScroll.classList.remove('header__scroll');
    }

  });