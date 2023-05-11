export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._buttonSubmit = this._popup.querySelector('.popup__safe-btn');
  }

  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose = (evt) => {
    if(evt.key === 'Escape') {
      this.close();
    }
  }

  renderLoading(isLoading, text) {
    if(!this._buttonSubmit) return;
    if (isLoading) {
      this.defaultText = this._buttonSubmit.textContent;
      this._buttonSubmit.textContent = text;
    } else if (!isLoading) {
      this._buttonSubmit.textContent = defaultText;
    }
  }

  setEventListener() {
    this._popup.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup_opened')) {
        this.close();
      }
      if (evt.target.classList.contains('popup__exit-btn')) {
        this.close();
      }
    });
  }
}
