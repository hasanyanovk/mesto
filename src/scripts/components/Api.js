class Api {
  constructor({ url, headers }) {
    this.url = url;
    this.headers = headers;
  }
  _checkResult (res) {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
  }
  getUserInform() {
    return fetch(`${this.url}/users/me`, { headers: this.headers })
      .then(this._checkResult)
       .catch(err => console.log(err));
  }
  getInitialCards() {
    return fetch(`${this.url}/cards`, { headers: this.headers })
      .then(this._checkResult)
       .catch(err => console.log(err));
  }
  editProfile({ name, job }) {
    return fetch(`${this.url}/users/me`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        name: name,
        about: job,
      }),
    })
      .then(this._checkResult)
       .catch(err => console.log(err));
  }
  addNewCard({ name, link }) {
    return fetch(`${this.url}/cards`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        name: name,
        link: link,
      }),
    })
      .then(this._checkResult)
      .catch(err => console.log(err));
  }
  deleteCard(id) {
    return fetch(`${this.url}/cards/${id}`, {
      method: 'DELETE',
      headers: this.headers,
    })
      .then(this._checkResult)
      .catch(err => console.log(err));
  }
  toogleStateLike(id, state) {
    return fetch(`${this.url}/cards/${id}/likes`, {
      method: state,
      headers: this.headers,
    })
      .then(this._checkResult)
      .catch(err => console.log(err));
  }
  editProfileAvatar({ link }) {
    return fetch(`${this.url}/users/me/avatar`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        avatar: link,
      }),
    })
      .then(this._checkResult)
      .catch(err => console.log(err));
  }
}

export const api = new Api({
  url: `https://mesto.nomoreparties.co/v1/frontend-st-cohort-201`,
  headers: {
    authorization: '7847647d-b958-44fa-a6d0-d80cb899d7cf',
    'Content-Type': 'application/json',
  }
});
