// Мобильная версия меню (открытие/закрытие)

let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});


// Кнопка иконки лайк (catalog.html)

let hearts = document.querySelectorAll('.count-likes__icon');
let likesNumber = document.querySelectorAll('.count-likes__sum');

hearts.forEach((heart, i) => {
  heart.addEventListener('click', () => {
  (heart.classList.contains('count-likes__added')) ? likesNumber[i].textContent-- : likesNumber[i].textContent++
  heart.classList.toggle('count-likes__added')
  })
});
