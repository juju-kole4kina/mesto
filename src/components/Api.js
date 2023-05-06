export default class Api {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers.authorization;


  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      headers: {
        authorization: this._headers
      },
    })
    .then((res) => {
      this._checkResponse(res);
    })
  }

  addNewCard(data) {
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: {
        authorization: this._headers,
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        link: data.link
      }),
    })
    .then((res) => {
      this._checkResponse(res);
    })
  }

  getUserInfo(data) {
    return fetch(`${this._url}/users/me`, {
      headers: {
        authorization: this._headers
      }
      })
      .then((res) => {
        this._checkResponse(res);
      })
    }

    setUserInfo(data) {
      return fetch(`${this._url}/users/me`, {
        method: 'PATCH',
        headers: {
          authorization: this._headers,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: data.name,
          about: data.about
        }),
      })
      .then((res) => {
        this._checkResponse(res);
      })
    }

    setUserAvatar(data) {
      return fetch(`${this._url}/users/me/avatr`, {
        method: 'PATCH',
        headers: {
          authorization: this._headers,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          avatar: data.avatar,
        }),
      })
      .then((res) => {
        this._checkResponse(res);
      })
    }

    deleteCard(cardId) {
      return fetch(`${this._url}/cards/${cardId}`, {
        method: 'DELETE',
        headers: {
          authorization: this._headers,
          'Content-Type': 'application/json'
        }
      })
      .then((res) => {
        this._checkResponse(res);
      })
    }

    putLike(cardId) {
      return fetch(`${this._url}/cards/${cardId}/likes`, {
        method: 'PUT',
        headers: {
          authorization: this._headers,
          'Content-Type': 'application/json'
        }
      })
      .then((res) => {
        this._checkResponse(res);
      })
    }

    deleteLike(cardId) {
      return fetch(`${this._url}/cards/${cardId}/likes`, {
        method: 'DELETE',
        headers: {
          authorization: this._headers,
          'Content-Type': 'application/json'
        }
      })
      .then((res) => {
        this._checkResponse(res);
      })
    }
  }

