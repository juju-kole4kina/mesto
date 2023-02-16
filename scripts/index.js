'use strict';

let editBtn = document.querySelector('.profile__edit-btn');
let editPopup = document.querySelector('.popup');
let exitBtn = document.querySelector('.popup__exit-btn');
let userName = document.querySelector('.profile__user-name');
let userJob = document.querySelector('.profile__user-description');
let safeBtn = document.querySelector('.popup__safe-btn');
let formElement = document.querySelector('.popup__form');
let userNameInput = formElement.querySelector('#user-name');
let userJobInput = formElement.querySelector('#user-description');

function editOpen() {
  editPopup.classList.add('popup_opened');
  userNameInput.value = userName.textContent;
  userJobInput.value = userJob.textContent;
};

function editClose() {
  editPopup.classList.remove('popup_opened');
};

function editProfile(evt) {
  evt.preventDefault();
  userName.textContent = userNameInput.value;
  userJob.textContent = userJobInput.value;

  editClose();
}

editBtn.addEventListener('click', editOpen);
exitBtn.addEventListener('click', editClose);
formElement.addEventListener('submit', editProfile);
