export default class Card {
  // step two: create constructor with any data
  constructor(cardData, userId, template, likeCountSelector, { handleImageClick, handleDeleteCard, handlePutLike }) {
    this._link = cardData.link;
    this._name = cardData.name;
    this._likes = cardData.likes;
    this.cardId = cardData._id;
    this._owner = cardData.owner;
    this._template = template;
    this._handleImageClick = handleImageClick;
    this._handleDeleteCard = handleDeleteCard;
    this._handlePutLike = handlePutLike;
    this._userId = userId;
    this._likeConutSelector = likeCountSelector;
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

  // Добавление данных в разметку
  generateCard() {
    this._element = this._getTemplate();
    this._buttonDelete = this._element.querySelector('.gallery__delete-btn');
    this._likeCountElement = this._element.querySelector(this._likeConutSelector);

    this._setEventListener();
    // this.handleButtonLikeClick();

    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._element.querySelector('.gallery__item-title').textContent = this._name;
    this._likeCountElement.textContent = this._likes.length;

    if (this._owner._id !== this._userId) {
      this._buttonDelete.classList.add('gallery__delete-btn_hidden');
    }
    this._likeCard();

    return this._element;
  }

  // Удаление карточки
  handleButtonDeleteClick() {
    this._element.remove();
    this._element = null;
  }

  countLike(card) {
    this._likes = card.likes;
  }

  _likeCard() {
    this.isLiked();
  }

  checkLike() {
    return this._likes.some((item) => item._id === this._userId);
  }

  isLiked() {
    this._likeCountElement.textContent = this._likes.length;
    if(this.checkLike()) {
      this._buttonLike.classList.add('gallery__like-btn_active');
    } else {
      this._buttonLike.classList.remove('gallery__like-btn_active');
    }
  }

// Слушатели
  _setEventListener() {
    this._cardImage = this._element.querySelector('.gallery__image');
    this._buttonLike = this._element.querySelector('.gallery__like-btn');

    this._buttonLike.addEventListener('click', () => {
      this._handlePutLike(this);
    })

    this._element.querySelector('.gallery__delete-btn').addEventListener('click', () => {
      this._handleDeleteCard(this);
    });
    this._cardImage.addEventListener('click', () => {
      this._handleImageClick({link: this._link, name: this._name});
    });
  }

}
