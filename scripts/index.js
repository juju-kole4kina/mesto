'use strict';

// ================= Переменные ===============================

// Попапы
const popupList = document.querySelectorAll('.popup');
const profileEditPopup = document.querySelector('.popup_type_edit-profile');
const cardAddPopup = document.querySelector('.popup_type_add-card');
const cardOpenPopup = document.querySelector('.popup_type_opened-card');

// Кнопки
const buttonOpenProfileEditPopup = document.querySelector('.profile__edit-btn');
const buttonOpenCardAddPopup = document.querySelector('.profile__add-btn');
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

const handleEscClosePopup = (evt) => {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  };
};

const createCard = (cardData) => {
  const cardsElement = cardTemplate.cloneNode(true);
  const galleryImage = cardsElement.querySelector('.gallery__image');
  galleryImage.src = cardData.link;
  galleryImage.alt = cardData.name;
  cardsElement.querySelector('.gallery__item-title').textContent = cardData.name;

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
    const cardImgSrc = cardData.link;
    const cardImgTitle = cardData.name;

    popupImgCard.src = cardImgSrc;
    popupImgCard.alt = cardImgTitle;
    popupDescriptionCard.textContent = cardImgTitle;

    openPopup(cardOpenPopup);
  });

  return cardsElement;
};

const openProfileEditPopup = () => {
  openPopup(profileEditPopup);

  userNameInput.value = userName.textContent;
  userJobInput.value = userJob.textContent;
};

const editProfile = (evt) => {
  evt.preventDefault();
  userName.textContent = userNameInput.value;
  userJob.textContent = userJobInput.value;

  closePopup(profileEditPopup);
};

const handleCardFormSubmit = (evt) => {
  evt.preventDefault();

  addCard({name: cardNameInput.value, link: cardImgInput.value});

  evt.target.reset();

  const buttonAddCardPopup = cardAddPopup.querySelector('.popup__safe-btn');
  buttonAddCardPopup.classList.add('popup__safe-btn_disabled');
  buttonAddCardPopup.disabled = true;

  closePopup(cardAddPopup);
}

const addCard = (card) => {
  gallery.prepend(createCard(card));
};


initialCards.forEach((card) => {
  gallery.append(createCard(card));
});

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

profileEditPopup.addEventListener('submit', editProfile);
cardAddPopup.addEventListener('submit', handleCardFormSubmit);



