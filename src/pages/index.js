'use strict';

import './index.css';

import {
  cardListSelector,
  cardTemplate,
  cardOpenPopupSelector,
  profileEditPopupSelector,
  avatarEditPopupSelector,
  avatarImageSelector,
  deleteVeretificationPopupSelector,
  cardAddPopupSelector,
  userNameProfileSelector,
  userInfoProfileSelector,
  avatarEditPopupOpener,
  likeCountSelector,
  buttonOpenCardAddPopup,
  buttonOpenProfileEditPopup,
  formValidatorConfig,
} from '../utils/constants.js';
import Api from '../components/Api';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithConfirm from '../components/PopupWithConfirm';
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

Promise.all([api.getInitialCard(), api.getUserInfo()])
  .then(([cards, user]) => {
    userId = user._id;
    userInfo.getUserInfo(user);
    userInfo.setUserInfo(user);
    cardList.renderItems(cards, userId);
  })
  .catch(err => console.log(err));

const cardOpenPopup = new PopupWithImage(cardOpenPopupSelector);

const confirmPopup = new PopupWithConfirm(deleteVeretificationPopupSelector);
confirmPopup.setEventListener();

const createCard = (cardData) => {
  const card = new Card(cardData, userId, cardTemplate, likeCountSelector, {
    handleImageClick: () => {cardOpenPopup.open(cardData)},
    handleDeleteCard: () => {
      confirmPopup.setConfirm(() => {
        confirmPopup.renderLoading(true, 'Удаление...');
        api.cardDelete(cardData._id)
        .then(() => {
          card.handleButtonDeleteClick();
          confirmPopup.close();
        })
        .catch(err => console.log(err))
        .finally(() => {
          formProfilePopup.renderLoading(false);
        })
      })
      confirmPopup.open();
    },
    handlePutLike: () => {
      if(!card.checkLike()) {
        api.putCardLike(cardData._id)
        .then((res) => {
          card.countLike(res);
          card.isLiked();
        })
        .catch(err => console.log(err))
      } else {
        api.deleteCardLike(cardData._id)
        .then((res) => {
          card.countLike(res);
          card.isLiked();
        })
        .catch(err => console.log(err))
      }
    }
  });

  return card.generateCard();
}

const cardList = new Section({
  renderer: (cardElement) => {
    cardList.addItem(createCard(cardElement));
  },
}, cardListSelector);

let userId;

const userInfo = new UserInfo({
  userNameSelector: userNameProfileSelector,
  userInfoSelector: userInfoProfileSelector,
  userAvatarSelector: avatarImageSelector
});

const formProfilePopup = new PopupWithForm(profileEditPopupSelector, {
  handleFormSubmit: (data) => {
    formProfilePopup.renderLoading(true, 'Сохранение...');
    api.setUserInfo(data)
    .then((res) => {
      userInfo.setUserInfo(res);
      formProfilePopup.close();
    })
    .catch(err => console.log(err))
    .finally(() => {
      formProfilePopup.renderLoading(false);
    })

  }
});

const formAvatarPopup = new PopupWithForm(avatarEditPopupSelector, {
  handleFormSubmit: (data) => {
    console.log(`data: ${data}`);
    formAvatarPopup.renderLoading(true, 'Сохранение...');
    api.setUserAvatar(data)
    .then((res) => {
      console.log(`res: ${res}`);
      userInfo.setUserInfo(res);
      formAvatarPopup.close();
    })
    .catch(err => console.log(err))
    .finally(() => {
      formAvatarPopup.renderLoading(false);
    })
  }
});

const formAddCardPopup = new PopupWithForm(cardAddPopupSelector, {
  handleFormSubmit: (data) => {
    console.log(`data: ${data}`);
    formAddCardPopup.renderLoading(true, 'Сохранение...');
    api.addNewCard(data)
    .then((cardData) => {
      console.log(`res: ${cardData}`);
      cardList.addItem(createCard(cardData, userId));
      console.log(`data: ${cardData}, id: ${userId}`);
      formAddCardPopup.close();
    })
    .catch(err => console.log(err))
    .finally(() => {
      formAddCardPopup.renderLoading(false);
    })
  }
});

buttonOpenProfileEditPopup.addEventListener('click', () => {
  formProfilePopup.open();
  formProfilePopup.setInputValue(userInfo.getUserInfo());

  formValidators['edit-profile'].resetValidation();
}
);

avatarEditPopupOpener.addEventListener('click', () => {
  formAvatarPopup.open();
  formAvatarPopup.setInputValue(userInfo.getUserInfo());

  formValidators['edit-avatar'].resetValidation();
})

buttonOpenCardAddPopup.addEventListener('click', () => {
  formAddCardPopup.open();
  formValidators['add-card'].resetValidation();
});

formProfilePopup.setEventListener();
formAvatarPopup.setEventListener();
formAddCardPopup.setEventListener();
cardOpenPopup.setEventListener();
