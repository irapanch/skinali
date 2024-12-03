document.addEventListener('scroll', function() {
    const section = document.querySelector('.visual__section');
    const scrollPosition = window.scrollY;
  
    if (scrollPosition > 0) {
      section.style.backgroundPosition = `${scrollPosition * 0.009}% center`;
    } else {
      section.style.backgroundPosition = 'center';
    }
  });