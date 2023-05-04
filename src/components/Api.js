export default class Api {
  constructor (options) {
    this._url = options.baseUrl;
    this._headers = options.headers;
    this._authorization = options.authorization;
  }

  _renderResult(text) {
    result.textContent = text;
    error.textContent = '';
  }

  _renderError(err) {
    error.textContent = err;
    result.textContent = '';
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: {
        authorization: this._authorization
      },
    })
    .then((res) => {
      if(res.ok) {
        return res.json();
      }
      return Promise.reject(res.status);
    })
    .catch((err) => {
      renderError(`Ошибка: ${err}`);
    })
  }

  addCard(data) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link
      }),
    })
    .then((res) => {
      if(res.ok) {
        return res.json();
      }
      return Promise.reject(res.status);
    })
    .catch((err) => {
      renderError(`Ошибка: ${err}`);
    })
  }

  getUserInfo() {
    return featch(`${this._url}/users/me`, {
      headers: {
        authorization: this._authorization
      },
    })
    .then((res) => {
      if(res.ok) {
        return res.json();
      }
      return Promise.reject(res.status);
    })
    .catch((err) => {
      renderError(`Ошибка: ${err}`);
    })
  }

  setUserInfo(data) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      }),
    })
    .then((res) => {
      if(res.ok) {
        return res.json();
      }
      return Promise.reject(res.status);
    })
    .catch((err) => {
      renderError(`Ошибка: ${err}`);
    })
  }

  setUserAvatar(data) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.avatar,
      }),
    })
    .then((res) => {
      if(res.ok) {
        return res.json();
      }
      return Promise.reject(res.status);
    })
    .catch((err) => {
      renderError(`Ошибка: ${err}`);
    })
  }

  deleteCard(cardId) {
    return fetch(`${this._url}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers,
    })
    .then((res) => {
      if(res.ok) {
        return res.json();
      }
      return Promise.reject(res.status);
    })
    .catch((err) => {
      renderError(`Ошибка: ${err}`);
    })
  }

  putLike(cardId) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: this._headers,
    })
    .then((res) => {
      if(res.ok) {
        return res.json();
      }
      return Promise.reject(res.status);
    })
    .catch((err) => {
      renderError(`Ошибка: ${err}`);
    })
  }

  deleteLike(cardId) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: this._headers,
    })
    .then((res) => {
      if(res.ok) {
        return res.json();
      }
      return Promise.reject(res.status);
    })
    .catch((err) => {
      renderError(`Ошибка: ${err}`);
    })
  }
}
