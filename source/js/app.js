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


let hearts = document.querySelectorAll('.count-likes__icon');
let likesNumber = document.querySelectorAll('.count-likes__sum');

for (let i = 0; i < hearts.length; i++) {
  hearts[i].onclick = function () {
    if (hearts[i].classList.contains('count-likes__added')) {
      likesNumber[i].textContent--;
    } else {
        likesNumber[i].textContent++;
      }

    hearts[i].classList.toggle('count-likes__added');
  }
};
