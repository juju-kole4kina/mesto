import Popup from "./Popup";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImageCard = this._popup.querySelector('.popup__img-card');
    this._popupDescriptionCard = this._popup.querySelector('.popup__descritption-card');
  }

  open(cardImage) {
    super(this.open());
    this._popupImageCard.src = cardImage.link;
    this._popupImageCard.alt = cardImage.name;
    this._popupDescriptionCard.textContent = cardImage.name;
  }
}
