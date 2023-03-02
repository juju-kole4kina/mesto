'use strict';

// ================= Переменные ===============================

// Попапы
const popups = document.querySelectorAll('.popup');
const editProfilePopup = document.querySelector('.popup_type_edit-profile');
const addCardPopup = document.querySelector('.popup_type_add-card');
const popupOpenCard = document.querySelector('.popup_type_opened-card');

// Кнопки
const editBtn = document.querySelector('.profile__edit-btn');
const addCardBtn = document.querySelector('.profile__add-btn');
const exitBtns = document.querySelectorAll('.popup__exit-btn');
const safeBtn = document.querySelector('.popup__safe-btn');

// Профиль
const userName = document.querySelector('.profile__user-name');
const userJob = document.querySelector('.profile__user-description');

// Формы
const formElement = document.querySelectorAll('.popup__form');
const editProfileForm = document.querySelector('.popup__form_type_edit-profile');
const addCardForm = document.querySelector('.popup__form_type_add-card');
const userNameInput = document.querySelector('#user-name');
const userJobInput = document.querySelector('#user-description');
const cardName = document.querySelector('#title-card');
const cardImg = document.querySelector('#card-image');

// Галерея
const galleryList = document.querySelector('.gallery__list');
const cardTemplate = document.querySelector('.template-card').content;

// Наполнение попап галереи
const popupImgCard = popupOpenCard.querySelector('.popup__img-card');
const popupDescriptionCard = popupOpenCard.querySelector('.popup__descritption-card');
// =============================================================

const popupOpen = (popup) => {
  popup.classList.add('popup_opened');
}

const popupClose = (popup) => {
  popup.classList.remove('popup_opened');
};

exitBtns.forEach(exitBtn => {
  exitBtn.addEventListener('click', (evt) => {
    const parentSection = evt.target.closest('section.popup');

    popupClose(parentSection);
  });
});

const createCard = (element) => {
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


  popupImgCard.setAttribute('src', cardImgSrc);
  popupImgCard.setAttribute('alt', cardImgTitle);
  popupDescriptionCard.textContent = cardImgTitle;

  popupOpen(popupOpenCard);
});

return cardsElement;
};

initialCards.forEach((card) => {
  galleryList.append(createCard(card));
});

const editOpen = () => {
  userNameInput.value = userName.textContent;
  userJobInput.value = userJob.textContent;
};

const editProfile = (evt) => {
  evt.preventDefault();
  userName.textContent = userNameInput.value;
  userJob.textContent = userJobInput.value;

  popupClose(editProfilePopup);
};

const addData = (evt) => {
  evt.preventDefault();

  addCard({name: cardName.value, link: cardImg.value});

  evt.target.reset();
  popupClose(addCardPopup);
}

const addCard = (card) => {
  galleryList.prepend(createCard(card));
}

editBtn.addEventListener('click', () => popupOpen(editProfilePopup));
addCardBtn.addEventListener('click', () => popupOpen(addCardPopup));

editProfilePopup.addEventListener('submit', editProfile);
addCardPopup.addEventListener('submit', addData);

console.log(initialCards);
