// let heart = document.querySelectorAll('.count-likes__icon');
// let likesNumber = document.querySelectorAll('.count-likes__sum');

// for (let i = 0; i < heart.length; i++) {
//   heart[i].onclick = function () {
//     if (heart.classList.contains('added')) {
//       likesNumber.textContent--;
//     } else {
//         likesNumber.textContent++;
//       }

//     heart.classList.toggle('added');
//   }
// };

let heart = document.querySelector('.count-likes__icon');
let likesNumber = document.querySelector('.count-likes__sum');

heart.onclick = function () {
  if (heart.classList.contains('added')) {
    likesNumber.textContent--;
  } else {
      likesNumber.textContent++;
    }

  heart.classList.toggle('added');
};
