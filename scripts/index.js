'use strict';

let editBtn = document.querySelector('.profile__edit-btn');
let addCardBtn = document.querySelector('.profile__add-btn');
let popups = document.querySelectorAll('.popup');
let exitBtn = document.querySelectorAll('.popup__exit-btn');
let userName = document.querySelector('.profile__user-name');
let userJob = document.querySelector('.profile__user-description');
let safeBtn = document.querySelector('.popup__safe-btn');
let formElement = document.querySelectorAll('.popup__form');
let userNameInput = document.querySelector('#user-name');

const editprofilePopup = document.querySelector('.popup_type_edit-profile');
const addCardProfile = document.querySelector('.popup_type_add-card');

const galleryList = document.querySelector('.gallery__list');
const cardTemplate = document.querySelector('.template-card').content;

let userJobInput = document.querySelector('#user-description');
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

console.log(cardTemplate);

const tmplImg = cardTemplate.querySelector('.gallery__image');
console.log(tmplImg);

const tmplTitle = cardTemplate.querySelector('.gallery__title');
console.log(tmplTitle);

initialCards.forEach( function (element) {
  const cardsElement = cardTemplate.cloneNode(true);

  cardsElement.querySelector('.gallery__image').setAttribute('src', element.link);
  cardsElement.querySelector('.gallery__image').setAttribute('alt', element.name);
  cardsElement.querySelector('.gallery__item-title').textContent = element.name;

  galleryList.append(cardsElement);
})

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
  // popupType.classList.remove('popup_opened');

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
  let parentSection = evt.srcElement.closest('section.popup');
  userName.textContent = userNameInput.value;
  userJob.textContent = userJobInput.value;
  parentSection.classList.remove('popup_opened');
  // popups[0].classList.remove('popup_opened');
  // popupClose();
}

// const addCard = () => {
// const cardTemplate = document.querySelector('.template-card');
// const cardElement = cardTemplate.querySelector('.gallery__item').cloneNode(true);

// cardElement.querySelector('gallery__image').setAttribute('src', '');
// cardElement.querySelector('.gallery__item-title').textContent = '';


// }

const addData = (evt) => {
  evt.preventDefault();
  let parentSection = evt.srcElement.closest('section.popup');
  // parentSection
  console.log(evt);
  const cardName = document.querySelector('#title-card').value;
  const cardImg = document.querySelector('#card-image').value;
console.log(cardName);
console.log(cardImg);
initialCards.unshift({name: `${cardName}`, link: `${cardImg}`});
console.log(initialCards);
//  popups[1].classList.remove('popup_opened');
parentSection.classList.remove('popup_opened');
// popupClose();
}



// addData();
console.log(initialCards);

// editBtn.addEventListener('click', popupOpen);
// addCardBtn.addEventListener('click', popupOpen);

// editBtn.addEventListener('click', popupOpen);
// addCardBtn.addEventListener('click', popupOpen);
// exitBtn.addEventListener('click', popupClose);

popupOpen();
popupClose();
// addData();
//
console.log(popups);
console.log(exitBtn);
console.log(formElement);

formElement[0].addEventListener('submit', editProfile);
formElement[1].addEventListener('submit', addData);

