'use strict';

import './index.css';

import { initialCards } from '../utils/initialCards.js';
import {
  cardListSelector,
  cardTemplate,
  cardOpenPopupSelector,
  profileEditPopupSelector,
  avatarEditPopupSelector,
  deleteVeretificationPopupSelector,
  cardAddPopupSelector,
  userNameProfileSelector,
  userInfoProfileSelector,
  avatarEditPopupOpener,
  buttonOpenCardAddPopup,
  buttonOpenProfileEditPopup,
  formValidatorConfig,
} from '../utils/constants.js';
import Api from '../components/Api';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import FormValidator from '../components/FormValidator.js';

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

enableValidation(formValidatorConfig);
//===================================================================

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-65',
  headers: {
    authorization: 'e66028db-2d04-435a-b30a-e2914b0c1191',
    'Content-Type': 'application/json'
  }
});


const cardOpenPopup = new PopupWithImage(cardOpenPopupSelector);

const handleImageClick = (cardImage) => {
  cardOpenPopup.open(cardImage);
}

const createCard = (cardData) => {
  const card = new Card(cardData, cardTemplate, handleImageClick);
  return card.generateCard();
}

const cardList = new Section({
  items: initialCards,
  renderer: (cardElement) => {
    cardList.addItem(createCard(cardElement));
  },
}, cardListSelector);

cardList.renderItems();

const userInfo = new UserInfo({
  userNameSelector: userNameProfileSelector,
  userInfoSelector: userInfoProfileSelector
});

const avatarEditProfile = new PopupWithForm(avatarEditPopupSelector, {
  handleFormSubmit: (data) => {
    avatarImageSelector.src = data.value;
  }
});

const formProfilePopup = new PopupWithForm(profileEditPopupSelector, {
  handleFormSubmit: (data) => {
    userInfo.setUserInfo(data);
  }
});

const formAddCardPopup = new PopupWithForm(cardAddPopupSelector, {
  handleFormSubmit: ({title, link}) => {
    cardList.addItem(createCard({name: title, link: link}));
  }
});

buttonOpenProfileEditPopup.addEventListener('click',
() => {
  formProfilePopup.open();
  formProfilePopup.setInputValue(userInfo.getUserInfo());

  formValidators['edit-profile'].resetValidation();
}
);
buttonOpenCardAddPopup.addEventListener('click', () => {
  formAddCardPopup.open();
  formValidators['add-card'].resetValidation();
});

avatarEditPopupOpener.addEventListener('click', () => {
  avatarEditProfile.open();
  formValidators['edit-avatar'].resetValidation();
});

formProfilePopup.setEventListener();
formAddCardPopup.setEventListener();
cardOpenPopup.setEventListener();
avatarEditProfile.setEventListener();
