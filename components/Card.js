// step one: create class
export default class Card {
  // step two: create constructor with any data
  constructor(cardData, template, handleImageClick) {
    this._link = cardData.link;
    this._name = cardData.name;
    this._template = template;
    this._handleImageClick = handleImageClick;
  }
  // step three: получаем разметку из шаблона
  _getTemplate() {
    const cardElement = document
    .querySelector(this._template)    // Найдём template-элемент
    .content                            // Извлечём его содержимое
    .querySelector('.gallery__item')     // В содержимом найдём элемент
    .cloneNode(true);                   // Клонируем найденный элемент

    return cardElement;
  }
// Постановка лайка
  _handleButtonLikeClick() {
    this._buttonLike.classList.toggle('gallery__like-btn_active');
  }

// Удаление карточки
  _handleButtonDeleteClick() {
    this._element.remove();
  }

// Слушатели
  _setEventListener() {
    this._cardImage = this._element.querySelector('.gallery__image');
    this._buttonLike = this._element.querySelector('.gallery__like-btn');

    this._buttonLike.addEventListener('click', () => {
      this._handleButtonLikeClick();
    });
    this._element.querySelector('.gallery__delete-btn').addEventListener('click', () => {
      this._handleButtonDeleteClick();
    });
    this._cardImage.addEventListener('click', () => {
      this._handleImageClick({link: this._link, name: this._name});
    });
  }
// Добавление данных в разметку
  generateCard() {
    this._element = this._getTemplate();
    this._setEventListener();

    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._element.querySelector('.gallery__item-title').textContent = this._name;

    return this._element;
  }
}


