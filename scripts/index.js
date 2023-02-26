'use strict';

let editBtn = document.querySelector('.profile__edit-btn');
let addCardBtn = document.querySelector('.profile__add-btn');
let popups = document.querySelectorAll('.popup');
let exitBtn = document.querySelectorAll('.popup__exit-btn');
let userName = document.querySelector('.profile__user-name');
let userJob = document.querySelector('.profile__user-description');
let safeBtn = document.querySelector('.popup__safe-btn');
let formElement = document.querySelector('.popup__form');
let userNameInput = formElement.querySelector('#user-name');

const editprofilePopup = document.querySelector('.popup_type_edit-profile');
const addCardProfile = document.querySelector('.popup_type_add-card');

let userJobInput = formElement.querySelector('#user-description');
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const popupOpen = () => {
  // popup.classList.add('popup_opened');
  editBtn.addEventListener('click', function() {
    editprofilePopup.classList.add('popup_opened');
  });

  addCardBtn.addEventListener('click', function() {
    addCardProfile.classList.add('popup_opened');
  });

}

const popupClose = () => {
  exitBtn[0].addEventListener('click', function() {
    popups[0].classList.remove('popup_opened');
  });
  exitBtn[1].addEventListener('click', function() {
    popups[1].classList.remove('popup_opened');
  });
  exitBtn[2].addEventListener('click', function() {
    popups[2].classList.remove('popup_opened');
  });
}

// const popupClose = () => {
//   popup.classList.remove('popup_opened');
// }

const editOpen = () => {
  userNameInput.value = userName.textContent;
  userJobInput.value = userJob.textContent;
};


const editProfile = (evt) => {
  evt.preventDefault();
  userName.textContent = userNameInput.value;
  userJob.textContent = userJobInput.value;

  popups[0].classList.remove('popup_opened');
}

// editBtn.addEventListener('click', popupOpen);
// addCardBtn.addEventListener('click', popupOpen);

popupOpen();
popupClose();
// exitBtn.addEventListener('click', popupClose);
console.log(popups);
console.log(exitBtn);

formElement.addEventListener('submit', editProfile);
