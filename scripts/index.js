'use strict';

import { initialCards } from './initialCards.js';
import { Card } from './Cards.js';
import { FormValidator } from './FormValidator.js';


// ================= Переменные ===============================

const FormValidatorConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input-item',
  submitButtonSelector: '.popup__safe-btn',
  inactiveButtonClass: 'popup__safe-btn_disabled',
  inputErrorClass: 'popup__input-error_active',
  errorClass: 'popup__input-item_type_error'
}

// Попапы
const popupList = document.querySelectorAll('.popup');
const profileEditPopup = document.querySelector('.popup_type_edit-profile');
const cardAddPopup = document.querySelector('.popup_type_add-card');
const cardOpenPopup = document.querySelector('.popup_type_opened-card');

// Кнопки
const buttonOpenProfileEditPopup = document.querySelector('.profile__edit-btn');
const buttonOpenCardAddPopup = document.querySelector('.profile__add-btn');
const buttonAddCardPopup = cardAddPopup.querySelector('.popup__safe-btn');
const buttonClosePopupList = document.querySelectorAll('.popup__exit-btn');

// Профиль
const userName = document.querySelector('.profile__user-name');
const userJob = document.querySelector('.profile__user-description');

// Формы
const userNameInput = document.querySelector('#user-name');
const userJobInput = document.querySelector('#user-description');
const cardNameInput = document.querySelector('#title-card');
const cardImgInput = document.querySelector('#card-image');

// Галерея
const gallery = document.querySelector('.gallery__list');
const cardTemplate = document.querySelector('.template-card').content;

// Наполнение попап галереи
const popupImgCard = cardOpenPopup.querySelector('.popup__img-card');
const popupDescriptionCard = cardOpenPopup.querySelector('.popup__descritption-card');
// =============================================================

const openPopup = (popup) => {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', handleEscClosePopup);
}

const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', handleEscClosePopup);
};

const createCard = (cardData) => {
  const card = new Card(cardData, '.template-card', handleImageClick);
  return card.generateCard();
}

const handleEscClosePopup = (evt) => {
  if (evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  };
};

const openProfileEditPopup = () => {
  openPopup(profileEditPopup);

  userNameInput.value = userName.textContent;
  userJobInput.value = userJob.textContent;
};

const changeEditProfileText = (evt) => {
  evt.preventDefault();
  userName.textContent = userNameInput.value;
  userJob.textContent = userJobInput.value;

  closePopup(profileEditPopup);
};

const handleCardFormSubmit = (evt) => {
  evt.preventDefault();

  addCard({name: cardNameInput.value, link: cardImgInput.value});

  evt.target.reset();

  buttonAddCardPopup.classList.add('popup__safe-btn_disabled');
  buttonAddCardPopup.disabled = true;

  closePopup(cardAddPopup);
}

const addCard = (card) => {
  gallery.prepend(createCard(card));
};

const handleImageClick = (cardImage) => {
  openPopup(cardOpenPopup);

  popupImgCard.src = cardImage.link;
  popupImgCard.alt = cardImage.name;
  popupDescriptionCard.textContent = cardImage.name;
}

initialCards.forEach((item) => {
  gallery.append(createCard(item));
});

const profileFormValidator = new FormValidator(FormValidatorConfig, '.popup_type_edit-profile');
const newCardFormValidator = new FormValidator(FormValidatorConfig, '.popup_type_add-card');

profileFormValidator.enableValidation();
newCardFormValidator.enableValidation();

buttonClosePopupList.forEach(exitBtn => {
  exitBtn.addEventListener('click', (evt) => {
    const parentSection = evt.target.closest('section.popup');

    closePopup(parentSection);
  });
});

popupList.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
    if (evt.target === evt.currentTarget) {
      closePopup(popup);
    };
  });
});

buttonOpenProfileEditPopup.addEventListener('click', openProfileEditPopup);
buttonOpenCardAddPopup.addEventListener('click', () => openPopup(cardAddPopup));

profileEditPopup.addEventListener('submit', changeEditProfileText);
cardAddPopup.addEventListener('submit', handleCardFormSubmit);
