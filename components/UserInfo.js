export default class UserInfo {
  constructor ({ userNameSelector, userInfoSelector } ) {
    this._userNameSelector = document.querySelector(userNameSelector);
    this._userInfoSelector = document.querySelector(userInfoSelector);
  }

  getUserInfo() {
  return {
    name: this._userNameSelector.textContent,
    job: this._userInfoSelector.textContent
  }
  }

  setUsetInfo(userData) {
    this._userNameSelector = userData.name;
    this._userInfoSelector = userData.job;
  }
}
