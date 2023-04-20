'use strict';

import { initialCards } from '../utils/initialCards.js';
import {
  containerSelector,
  cardTemplate,
  cardOpenPopupSelector,
  profileEditPopupSelector,
  cardAddPopupSelector,
  userNameSelector,
  userInfoSelector,
  buttonOpenProfileEditPopu,
  buttonOpenCardAddPopup,
  buttonOpenProfileEditPopup
} from '../utils/constants.js';
import { Card } from '../components/Card.js';
import Section from '../components/Section.js';
// import Popup from '../components/Popup.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWith.Image.js';
import UserInfo from '../components/UserInfo.js';
import { FormValidator } from '../components/FormValidator.js';



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
// const popupList = document.querySelectorAll('.popup');
// const profileEditPopup = document.querySelector('.popup_type_edit-profile');
// const cardAddPopup = document.querySelector('.popup_type_add-card');
// const cardOpenPopup = document.querySelector('.popup_type_opened-card');

// Кнопки
// const buttonOpenProfileEditPopup = document.querySelector('.profile__edit-btn');
// const buttonOpenCardAddPopup = document.querySelector('.profile__add-btn');

// Профиль
// const userName = document.querySelector('.profile__user-name');
// const userJob = document.querySelector('.profile__user-description');

// Формы
// const userNameInput = document.querySelector('#user-name');
// const userJobInput = document.querySelector('#user-description');
// const cardNameInput = document.querySelector('#title-card');
// const cardImgInput = document.querySelector('#card-image');

// Галерея
// const gallery = document.querySelector('.gallery__list');

// Наполнение попап галереи
// const popupImgCard = cardOpenPopup.querySelector('.popup__img-card');
// const popupDescriptionCard = cardOpenPopup.querySelector('.popup__descritption-card');


// Экземпляры валидаторов
const formValidators = {};

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    const validator = new FormValidator(config, formElement);
    const formName = formElement.getAttribute('name');

    formValidators[formName] = validator;
    validator.enableValidation();
  });
};

enableValidation(FormValidatorConfig);
//===================================================================

// const openPopup = (popup) => {
//   popup.classList.add('popup_opened');
//   document.addEventListener('keydown', handleEscClosePopup);
// }

// const closePopup = (popup) => {
//   popup.classList.remove('popup_opened');
//   document.removeEventListener('keydown', handleEscClosePopup);
// };

const createCard = (cardData) => {
  const card = new Card(cardData, cardTemplate, handleImageClick);
  return card.generateCard();
}

const cardsSection = new Section({
  renderer: (card) => {
    cardsContainer.addItem(createCard(card));
  },
}, containerSelector);

cardsSection.renderItems(initialCards);

const userInfo = new UserInfo({
  userNameSelector: userNameSelector,
  userInfoSelector: userInfoSelector
});

const popupFormProfile = new PopupWithForm(profileEditPopupSelector, {
  formSubmit: (userData) => {
    userInfo.setUsetInfo(userData);
  }
});

const popupFormAddCard = new PopupWithForm(cardAddPopupSelector, {
  formSubmit: ({ link, title }) => {
    cardsSection.addItem(createCard({
      name: title,
      link: link,
      alt: title
    }));
  }
});



// const handleEscClosePopup = (evt) => {
//   if (evt.key === 'Escape') {
//     const popupOpened = document.querySelector('.popup_opened');
//     closePopup(popupOpened);
//   };
// };

// const openProfileEditPopup = () => {
//   openPopup(profileEditPopup);

//   userNameInput.value = userName.textContent;
//   userJobInput.value = userJob.textContent;

//   formValidators['edit-profile'].resetValidation();
// };

// const openAddCardPopup = () => {
//   openPopup(cardAddPopup);

//   cardNameInput.value = '';
//   cardImgInput.value = '';

//   formValidators['add-card'].resetValidation();
// }

// const changeEditProfileText = (evt) => {
//   evt.preventDefault();
//   userName.textContent = userNameInput.value;
//   userJob.textContent = userJobInput.value;

//   closePopup(profileEditPopup);
// };

// const handleCardFormSubmit = (evt) => {
//   evt.preventDefault();

//   addCard({name: cardNameInput.value, link: cardImgInput.value});

//   evt.target.reset();

//   closePopup(cardAddPopup);
// }

const addCard = (card) => {
  gallery.prepend(createCard(card));
};

const cardOpenPopup = new PopupWithImage(cardOpenPopupSelector);

const handleImageClick = (cardImage) => {
  cardOpenPopup.open(cardImage);

  // popupImgCard.src = cardImage.link;
  // popupImgCard.alt = cardImage.name;
  // popupDescriptionCard.textContent = cardImage.name;
}

initialCards.forEach((item) => {
  gallery.append(createCard(item));
});

// popupList.forEach((popup) => {
//   popup.addEventListener('mousedown', (evt) => {
//     if (evt.target.classList.contains('popup_opened')) {
//       closePopup(popup);
//     }
//     if (evt.target.classList.contains('popup__exit-btn')) {
//       closePopup(popup);
//     }
//   });
// });

buttonOpenProfileEditPopup.addEventListener('click', () => {
  popupFormProfile.open();
  // popupFormProfile.

  formValidators['edit-profile'].resetValidation();
});
buttonOpenCardAddPopup.addEventListener('click', () => {
  popupFormAddCard.open();
  formValidators['add-card'].resetValidation();
});

// profileEditPopup.addEventListener('submit', changeEditProfileText);
// cardAddPopup.addEventListener('submit', handleCardFormSubmit);

popupFormProfile.setEventListener();
popupFormAddCard.setEventListener();
cardOpenPopup.setEventListener();


