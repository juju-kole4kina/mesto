import Popup from "./Popup";

export default class PopupWithForm extends Popup {
  constructor (popupSelector, { formSubmit }) {
    super(popupSelector);
    this._formSubmit = formSubmit;
    this._form = this._popup.querySelector('.popup__form');
    this._inputList = Array.form(this._form.querySelector('.popup__input-item'));
  }

  _getInputValues() {
    this._inputValues = {}; // Создаём пустой объект для хранения значений импутов

    this._inputList.forEach((input) => {  // Перебераем инпуты
      this._inputValues[input.name] = input.value;  // Присваеваем обекту свойство и значение каждого инпута
    });

    return this._inputValues; // Возвращаем обект с данными
  }

  setEventListener() {
    super.setEventListener();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._formSubmit(this._getInputValues());
      this.close();
    });
  }

  close() {
    this._form.reset();
    super.close();
  }
}
