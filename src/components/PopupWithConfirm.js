import Popup from "./Popup";

export default class PopupWithConfirm extends Popup {
  constructor (popupSelector) {
    super(popupSelector);
    this._confirmButton = this._popup.querySelector('.popup__safe-btn');
  }

  setConfirm(callback) {
    this._handleConfirmCallback = callback;
  }

  setEventListener() {
    super.setEventListener();
    this._confirmButton.addEventListener('click', () => {
      this._handleConfirmCallback();
    });
  }

  renderLoading(isLoading, text) {
    super.renderLoading(isLoading, text);
  }
}
