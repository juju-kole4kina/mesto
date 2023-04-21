export default class UserInfo {
  constructor ({ userNameSelector, userInfoSelector } ) {
    this._userNameSelector = document.querySelector(userNameSelector);
    this._userInfoSelector = document.querySelector(userInfoSelector);
  }

  getUserInfo() {
    return {
      userName: this._userNameSelector.textContent,
      userDescription: this._userInfoSelector.textContent,
    }
  }

  setUserInfo(data) {
    this._userNameSelector.textContent = data.userName;
    this._userInfoSelector.textContent = data.userDescription;
  }
}
