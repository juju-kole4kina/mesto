let editBtn = document.querySelector('.profile__edit-btn');
let editPopup = document.querySelector('.popup');
let exitBtn = document.querySelector('.popup__exit-btn');
let userName = document.querySelector('.profile__user-name');
let userDescription = document.querySelector('.profile__user-description');
let safeBtn = document.querySelector('.popup__safe-btn');
let userNameInput = document.querySelector('#user-name');
let userDescriptionInput = document.querySelector('#user-description');

function editOpen(evt) {
  evt.preventDefault();
  editPopup.classList.add('popup_opened');
  userNameInput.value = userName.textContent;
  userDescriptionInput.value = userDescription.textContent;
};

function editClose(evt) {
  evt.preventDefault();
  editPopup.classList.remove('popup_opened');
};

function editProfile(evt) {
  evt.preventDefault();
  userName.textContent = userNameInput.value;
  userDescription.textContent = userDescriptionInput.value;
}

editBtn.addEventListener('click', editOpen);
exitBtn.addEventListener('click', editClose);
safeBtn.addEventListener('click', editProfile);
