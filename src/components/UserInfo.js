export default class UserInfo {
  constructor ({ userNameSelector, userInfoSelector, userAvatarSelector } ) {
    this._userNameSelector = document.querySelector(userNameSelector);
    this._userInfoSelector = document.querySelector(userInfoSelector);
    this._userAvatarSelector = document.querySelector(userAvatarSelector);
  }

  getUserInfo() {
    return {
      name: this._userNameSelector.textContent,
      about: this._userInfoSelector.textContent,
    }
  }

  setUserInfo(data) {
    console.log(data);
    this._userNameSelector.textContent = data.name;
    this._userInfoSelector.textContent = data.about;
    this._userAvatarSelector.src = data.avatar;
  }
}
