// step one: create class
class Card {
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
    this._element.querySelector('.gallery__like-btn').classList.toggle('gallery__like-btn_active');
  }

// Удаление карточки
  _handleButtonDeleteClick() {
    this._element.remove();
  }
// Zoom
  // _handleImageClick() {
  //   popupImgCard.src = this._link;
  //   popupImgCard.alt = this._name;
  //   popupDescriptionCard.textContent = this._name;
  // }
// Слушатели
  _setEventListener() {
    this._element.querySelector('.gallery__like-btn').addEventListener('click', () => {
      this._handleButtonLikeClick();
    });
    this._element.querySelector('.gallery__delete-btn').addEventListener('click', () => {
      this._handleButtonDeleteClick();
    });
    this._element.querySelector('.gallery__image').addEventListener('click', () => {
      this._handleImageClick({link: this._link, name: this._name});
    });
  }
// Добавление данных в разметку
  generateCard() {
    this._element = this._getTemplate();
    this._setEventListener();

    this._element.querySelector('.gallery__image').src = this._link;
    this._element.querySelector('.gallery__image').alt = this._name;
    this._element.querySelector('.gallery__item-title').textContent = this._name;

    return this._element;
  }
}

export { Card };
