'use strict';

let editBtn = document.querySelector('.profile__edit-btn');
let addCardBtn = document.querySelector('.profile__add-btn');
let popups = document.querySelectorAll('.popup');
let exitBtns = document.querySelectorAll('.popup__exit-btn');
let userName = document.querySelector('.profile__user-name');
let userJob = document.querySelector('.profile__user-description');
let safeBtn = document.querySelector('.popup__safe-btn');
let formElement = document.querySelectorAll('.popup__form');
let userNameInput = document.querySelector('#user-name');
let userJobInput = document.querySelector('#user-description');

const editprofilePopup = document.querySelector('.popup_type_edit-profile');
const addCardProfile = document.querySelector('.popup_type_add-card');

const galleryList = document.querySelector('.gallery__list');
const cardTemplate = document.querySelector('.template-card').content;

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

const popupOpen = (index) => {
  popups[index].classList.add('popup_opened');
}

const popupClose = (popup) => {
  popup.classList.remove('popup_opened');
};

exitBtns.forEach(exitBtn => {
  exitBtn.addEventListener('click', (evt) => {
    const parentSection = evt.target.closest('section.popup');

    parentSection.classList.remove('popup_opened');
  });
});

const addCard = (element) => {
  const cardsElement = cardTemplate.cloneNode(true);
  const galleryImage = cardsElement.querySelector('.gallery__image');

  galleryImage.setAttribute('src', element.link);
  galleryImage.setAttribute('alt', element.name);
  cardsElement.querySelector('.gallery__item-title').textContent = element.name;

const likeBtn = cardsElement.querySelector('.gallery__like-btn');

  likeBtn.addEventListener('click', (evt) => {
    evt.target.classList.toggle('gallery__like-btn_active');
  });

  const deleteBtn = cardsElement.querySelector('.gallery__delete-btn');

  deleteBtn.addEventListener('click', (evt) => {
    const targetElement = evt.target;
    const targetItem = targetElement.closest('.gallery__item');

    targetItem.remove();
  });

galleryImage.addEventListener('click', () => {
  const cardImgSrc = element.link;
  const cardImgTitle = element.name;
  const popupOpenCard = document.querySelector('.popup_type_opened-card');

  popupOpenCard.querySelector('.popup__img-card').setAttribute('src', cardImgSrc);
  popupOpenCard.querySelector('.popup__descritption-card').textContent = cardImgTitle;

  popupOpen(2);
});

  galleryList.prepend(cardsElement);
};

const addCards = () => {
  initialCards.forEach(cards => addCard(cards));
};

const editOpen = () => {
  userNameInput.value = userName.textContent;
  userJobInput.value = userJob.textContent;
};
editOpen();
const editProfile = (evt) => {
  evt.preventDefault();
  userName.textContent = userNameInput.value;
  userJob.textContent = userJobInput.value;

  popupClose(popups[0]);
};

const addData = (evt) => {
  evt.preventDefault();

  const cardName = document.querySelector('#title-card');
  const cardImg = document.querySelector('#card-image');
  const cardNameValue = document.querySelector('#title-card').value;
  const cardImgValue = document.querySelector('#card-image').value;

  const cardObject = {name: `${cardNameValue}`, link: `${cardImgValue}`};

  initialCards.unshift(cardObject);
  addCard(cardObject);

  cardName.value = '';
  cardImg.value = '';

  popupClose(popups[1]);
};

addCards();

editBtn.addEventListener('click', () => popupOpen(0));
addCardBtn.addEventListener('click', () => popupOpen(1));

formElement[0].addEventListener('submit', editProfile);
formElement[1].addEventListener('submit', addData);

