'use strict';

import './index.css';

import { initialCards } from '../utils/initialCards.js';
import {
  cardListSelector,
  cardTemplate,
  cardOpenPopupSelector,
  profileEditPopupSelector,
  cardAddPopupSelector,
  userNameProfileSelector,
  userInfoProfileSelector,
  buttonOpenCardAddPopup,
  buttonOpenProfileEditPopup,
  FormValidatorConfig,
} from '../utils/constants.js';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWith.Image.js';
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

enableValidation(FormValidatorConfig);
//===================================================================

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

formProfilePopup.setEventListener();
formAddCardPopup.setEventListener();
cardOpenPopup.setEventListener();
