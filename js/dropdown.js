document.addEventListener('DOMContentLoaded', function() {

    // dropdown menu
    const dropdown = document.querySelector('.header__menu-item.dropdown');
    const dropdownContent = document.querySelector('.header__dropdown-content');
  
    dropdown.addEventListener('mouseenter', function() {
      dropdownContent.style.display = 'flex';
    });
  
  
    dropdownContent.addEventListener('mouseleave', function(event) {
      if (!dropdown.contains(event.relatedTarget)) {
        dropdownContent.style.display = 'none';
      }
    });

// dropdown menu contact
// const dropdownPhone = document.querySelector('.header__scrollphone-wrap');
// const dropdownContentPhone = document.querySelector('.header__dropdown-contacts');

// dropdownPhone.addEventListener('click', function() {
//   if (dropdownContentPhone.style.display === 'flex') {
//     dropdownContentPhone.style.display = 'none';
//   } else {
//     dropdownContentPhone.style.display = 'flex';
//   }
// });

// dropdownContentPhone.addEventListener('click', function() {
//   dropdownContentPhone.style.display = 'none';
// });

  });
  