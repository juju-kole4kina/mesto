// export default class Api {
//   constructor({ baseUrl, headers }) {
//     this._url = baseUrl;
//     this._headers = headers.authorization;
//   }

//   _checkResponse(res) {
//     if (res.ok) {
//       return res.json();
//     }
//     return Promise.reject(`Ошибка: ${res.status}`);
//   }

//   getInitialCards() {
//     return fetch(`${this._url}/cards`, {
//       headers: {
//         authorization: this._headers
//       },
//     })
//     .then((res) => {
//       this._checkResponse(res);
//     })
//   }

//   addNewCard(data) {
//     return fetch(`${this._url}/cards`, {
//       method: 'POST',
//       headers: {
//         authorization: this._headers,
//         'Content-type': 'application/json'
//       },
//       body: JSON.stringify({
//         name: data.name,
//         link: data.link
//       }),
//     })
//     .then((res) => {
//       this._checkResponse(res);
//     })
//   }

//   getUserInfo() {
//     return fetch(`${this._url}/users/me`, {
//       headers: {
//         authorization: this._headers
//       }
//       })
//       .then((res) => {
//         this._checkResponse(res);
//       })
//     }

//   setUserInfo(data) {
//     console.log(data);
//     return fetch(`${this._url}/users/me`, {
//       method: 'PATCH',
//       headers: {
//         authorization: this._headers,
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         name: data.name,
//         about: data.about
//       }),
//     })
//     .then((res) => {
//       this._checkResponse(res);
//     })
//   }

//   setUserAvatar(data) {
//     return fetch(`${this._url}/users/me/avatar`, {
//       method: 'PATCH',
//       headers: {
//         authorization: this._headers,
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         avatar: data.link,
//       }),
//     })
//     .then((res) => {
//       this._checkResponse(res);
//     })
//   }

//   deleteCard(cardId) {
//     return fetch(`${this._url}/cards/${cardId}`, {
//       method: 'DELETE',
//       headers: {
//         authorization: this._headers,
//         'Content-Type': 'application/json'
//       }
//     })
//     .then((res) => {
//       this._checkResponse(res);
//     })
//   }

//   putLike(cardId) {
//     return fetch(`${this._url}/cards/${cardId}/likes`, {
//       method: 'PUT',
//       headers: {
//         authorization: this._headers,
//         'Content-Type': 'application/json'
//       }
//     })
//     .then((res) => {
//       this._checkResponse(res);
//     })
//   }

//   deleteLike(cardId) {
//     return fetch(`${this._url}/cards/${cardId}/likes`, {
//       method: 'DELETE',
//       headers: {
//         authorization: this._headers,
//         'Content-Type': 'application/json'
//       }
//     })
//     .then((res) => {
//       this._checkResponse(res);
//     })
//   }
// }

export default class Api {
  constructor(options) {
    this._url = options.baseUrl;
    this._headers = options.headers;
    this._authorization = options.headers['authorization'];
  }

_checkResponse(res) {
  if(res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

getInitialCard() {
  return fetch(`${this._url}/cards`, {
    headers: {
      authorization: this._authorization
    }
  })
  .then(res => this._checkResponse(res))
  .then(result => {console.log(result);
    return result;
  })
}

getUserInfo() {
  return fetch(`${this._url}/users/me`, {
    headers: this._headers
  })
  .then(res => this._checkResponse(res))
  .then(result => {console.log(result);
    return result;
  })
}

setUserInfo(data) {
  console.log(`data sui: ${data}`);
  return fetch(`${this._url}/users/me`, {
    method: 'PATCH',
    headers: this._headers,
    body: JSON.stringify({
      name: data.name,
      about: data.about
    })
  })
  .then(res => this._checkResponse(res))
  .then(result => {console.log(result);
  return result;
})
}

setUserAvatar(data) {
  console.log(`data sua: ${data}`);
  return fetch(`${this._url}/users/me/avatar`, {
    method: 'PATCH',
    headers: this._headers,
    body: JSON.stringify({
      avatar: data.link,
    })
  })
  .then(res => this._checkResponse(res))
  .then(result => {console.log(result);
    return result;
  })
}

addNewCard(data) {
  return fetch(`${this._url}/cards`, {
    method: 'POST',
    headers:this._headers,
    body: JSON.stringify({
      name: data.name,
      link: data.link
    })
  })
  .then(res => this._checkResponse(res))
  .then(result => {console.log(result);
    return result;
  })
}

cardDelete(cardId) {
  return fetch(`${this._url}/cards/${cardId}`, {
    method: 'DELETE',
    headers: {authorization: this._authorization}
  })
  .then(res => this._checkResponse(res))
  .then(result => {console.log(`cardDelete: ${result}`);
    return result;
  })
}

putCardLike(cardId) {
  return fetch(`${this._url}/cards/likes/${cardId}`, {
    method: 'PUT',
    headers: this._headers
  })
  .then(res => this._checkResponse(res))
  .then(result => {console.log(result);
    return result;
  })
}

deleteCardLike(cardId) {
  return fetch(`${this._url}/cards/likes/${cardId}`, {
    method: 'DELETE',
    headers: this._headers
  })
  .then(res => this._checkResponse(res))
  .then(result => {console.log(result);
    return result;
  })
}
}
