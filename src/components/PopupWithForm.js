import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor (popupSelector, { handleFormSubmit }) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector('.popup__form');
    this._inputList = this._form.querySelectorAll('.popup__input-item');

    this._submitButton = this._form.querySelector('.popup__safe-btn');
  }

  _getInputValues() {
    this._inputValues = {}; // Создаём пустой объект для хранения значений импутов

    this._inputList.forEach((input) => {  // Перебераем инпуты
      this._inputValues[input.name] = input.value;  // Присваеваем обекту свойство и значение каждого инпута
    });

    return this._inputValues; // Возвращаем обект с данными
  }

  //При открытии попапа инпуты заполняются текущими значениями
  setInputValue(data) {
    this._inputList.forEach((input, i) => {   // Перебираем инпуты  (параметры: обЪект из которого возврящаем значения свойств; индекс значения свойства)
      input.value = Object.values(data)[i];   // Присваеваем инпуту значение значение свойства объекта
    });
  }

  setEventListener() {
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
    super.setEventListener();
  }

  close() {
    this._form.reset();
    super.close();
  }

  renderLoading(isLoading, text) {
    this._buttonSubmit = this._form.querySelector('.popup__safe-btn');
    if (!this._buttonSubmit) return;
    if (isLoading) {
      this._defaultText = this._buttonSubmit.textContent;
      this._buttonSubmit.textContent = text;
    } else {
      this._buttonSubmit.textContent = this._defaultText;
    }
  }
}
