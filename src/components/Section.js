export default class Section {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItems(cardElements) {
    cardElements.forEach((item) => {
      this._renderer(item);
    })
  }

  addItem(element) {
    this._container.prepend(element);
  }
}

