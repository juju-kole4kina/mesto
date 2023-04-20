export default class FormValidator {
  constructor(config, form) {
    this._formSelector = config.formSelector;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._form = form;

    this._buttonElement = this._form.querySelector(this._submitButtonSelector);
    this._inputList = Array.from(this._form.querySelectorAll(this._inputSelector));
  }

  enableValidation() {
    this._setEventListener();
  }

  _showInputError(inputElement) {
    const inputError = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._errorClass);
    inputError.textContent = inputElement.validationMessage;
    inputError.classList.add(this._inputErrorClass);
  }

  _hideInputError(inputElement) {
    const inputError = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._errorClass);
    inputError.classList.remove(this._inputErrorClass);
    inputError.textContent = '';
  }

  disableButton() {
    this._buttonElement.classList.add(this._inactiveButtonClass);
    this._buttonElement.disabled = true;
  }

  _enableButton() {
    this._buttonElement.classList.remove(this._inactiveButtonClass);
    this._buttonElement.disabled = false;
  }

  _isValid(inputElement) {
    if(!inputElement.validity.valid) {
      this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => !inputElement.validity.valid);
  }

  resetValidation() {
    this._toggleButtonState();

    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
  }

  _toggleButtonState() {
    if(this._hasInvalidInput()) {
      this.disableButton();
    } else {
      this._enableButton();
    }
  }

  _setEventListener() {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._isValid(inputElement);
        this._toggleButtonState();
      })
    });
  }
}
