document.addEventListener('DOMContentLoaded', function() {
  // Открытие модального окна через 3 секунды после загрузки страницы
  setTimeout(function() {
    document.querySelector('.modal-advert').style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Запрет на скроллинг
  }, 3000);

  // Функция для закрытия модального окна
  function closeModal() {
    document.querySelector('.modal-advert').style.display = 'none';
  }

  // Закрытие при клике на бекдроп
  document.querySelector('.backdrop').addEventListener('click', function(event) {
    if (event.target === document.querySelector('.backdrop')) {
      closeModal();
    }
  });

  // Закрытие при клике на иконку закрытия
  document.querySelector('.close-icon').addEventListener('click', closeModal);

  // Закрытие при нажатии клавиши Escape
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      closeModal();
    }
  });

  
});
