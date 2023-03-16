'use strict';

// ================= Переменные ===============================

// Попапы
const popups = document.querySelectorAll('.popup');
const editProfilePopup = document.querySelector('.popup_type_edit-profile');
const addCardPopup = document.querySelector('.popup_type_add-card');
const openCardPopup = document.querySelector('.popup_type_opened-card');

// Кнопки
const buttonOpenEditProfilePopup = document.querySelector('.profile__edit-btn');
const buttonOpenAddCardPopup = document.querySelector('.profile__add-btn');
const buttonClosePopup = document.querySelectorAll('.popup__exit-btn');
const buttonSubmitFormPopup = document.querySelector('.popup__safe-btn');

// Профиль
const userName = document.querySelector('.profile__user-name');
const userJob = document.querySelector('.profile__user-description');

// Формы
const formElement = document.querySelectorAll('.popup__form');
const editProfileForm = document.querySelector('.popup__form_type_edit-profile');
const addCardForm = document.querySelector('.popup__form_type_add-card');
const userNameInput = document.querySelector('#user-name');
const userJobInput = document.querySelector('#user-description');
const cardNameInput = document.querySelector('#title-card');
const cardImgInput = document.querySelector('#card-image');

// Галерея
const galleryList = document.querySelector('.gallery__list');
const cardTemplate = document.querySelector('.template-card').content;

// Наполнение попап галереи
const popupImgCard = openCardPopup.querySelector('.popup__img-card');
const popupDescriptionCard = openCardPopup.querySelector('.popup__descritption-card');
// =============================================================

const openPopup = (popup) => {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', handleEscClosePopup);
}

const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', handleEscClosePopup);
};

buttonClosePopup.forEach(exitBtn => {
  exitBtn.addEventListener('click', (evt) => {
    const parentSection = evt.target.closest('section.popup');

    closePopup(parentSection);
  });
});

popups.forEach((i) => {
  i.addEventListener('click', (evt) => {
    if (evt.target === evt.currentTarget) {
      closePopup(i);
    };
  });
});

const handleEscClosePopup = (evt) => {
  if (evt.key === 'Escape') {
    const onenedPopupClass = document.querySelector('.popup_opened');
    closePopup(onenedPopupClass);
  };
};

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

  openPopup(openCardPopup);
});

return cardsElement;
};

initialCards.forEach((card) => {
  galleryList.append(createCard(card));
});

const fillInEditProfileFormInputs = () => {
  openPopup(editProfilePopup);

  userNameInput.value = userName.textContent;
  userJobInput.value = userJob.textContent;
};

const editProfile = (evt) => {
  evt.preventDefault();
  userName.textContent = userNameInput.value;
  userJob.textContent = userJobInput.value;

  closePopup(editProfilePopup);
};

const submitAddCardForm = (evt) => {
  evt.preventDefault();

  addCard({name: cardNameInput.value, link: cardImgInput.value});

  evt.target.reset();
  closePopup(addCardPopup);
}

const addCard = (card) => {
  galleryList.prepend(createCard(card));
}

buttonOpenEditProfilePopup.addEventListener('click', fillInEditProfileFormInputs)
buttonOpenAddCardPopup.addEventListener('click', () => openPopup(addCardPopup));

editProfilePopup.addEventListener('submit', editProfile);
addCardPopup.addEventListener('submit', submitAddCardForm);



