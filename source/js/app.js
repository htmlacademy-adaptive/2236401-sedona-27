'use strict'

const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');

const hearts = document.querySelectorAll('.count-likes__icon');
const likesNumber = document.querySelectorAll('.count-likes__sum');

const confirmButton = document.querySelector('.modal__button--confirm');
const alertButton = document.querySelector('.modal__button--alert');
const confirmWindow =  document.querySelector('.modal-container--confirm');
const alertWindow =  document.querySelector('.modal-container--alert');

const form = document.querySelector('.review-form--js');


// Мобильная версия меню (открытие/закрытие)

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

hearts.forEach((heart, i) => {
  heart.addEventListener('click', () => {
  (heart.classList.contains('count-likes__added')) ? likesNumber[i].textContent-- : likesNumber[i].textContent++
  heart.classList.toggle('count-likes__added')
  })
});


// Модальные окна (form.html)

if (form) {
  form.querySelectorAll('input').forEach(function(element){
    if(element.hasAttribute('required')){
      element.required = false;
      element.classList.add('required');
    }
  })

  function clearError() {
    document.querySelectorAll('.data-in__input--is-error').forEach(function(element){
      element.classList.remove('data-in__input--is-error');
    });
  }

  form.addEventListener('submit', function(evt) {
    evt.preventDefault();
    let isError = false;
    form.querySelectorAll('.required').forEach(function(element){
      if (!element.value){
        element.classList.add('data-in__input--is-error');
        isError = true;
      }
    });
    if (isError) {
      alertWindow.classList.add('modal-container--is-shown');
    } else {
      form.reset();
      document.querySelector('.modal-container--confirm').classList.add('modal-container--is-shown');
    }
  });

  confirmButton.addEventListener('click', function() {
    confirmWindow.classList.remove('modal-container--is-shown');
  });

  alertButton.addEventListener('click', function() {
    alertWindow.classList.remove('modal-container--is-shown');
    clearError();
  });
}

document.addEventListener('click', function(evt){
  if (evt.target.classList.contains('modal-container')) {
    confirmWindow.classList.remove('modal-container--is-shown');
  }
});
