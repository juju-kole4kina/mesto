(()=>{"use strict";var t=document.querySelector(".profile__avatar"),e=document.querySelector(".profile__edit-btn"),n=document.querySelector(".profile__add-btn");function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==r(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===r(i)?i:String(i)),o)}var i}var i=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._url=e.baseUrl,this._headers=e.headers,this._authorization=e.headers.authorization}var e,n;return e=t,(n=[{key:"_checkResponse",value:function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}},{key:"getInitialCard",value:function(){var t=this;return fetch("".concat(this._url,"/cards"),{headers:{authorization:this._authorization}}).then((function(e){return t._checkResponse(e)})).then((function(t){return console.log(t),t}))}},{key:"getUserInfo",value:function(){var t=this;return fetch("".concat(this._url,"/users/me"),{headers:this._headers}).then((function(e){return t._checkResponse(e)})).then((function(t){return console.log(t),t}))}},{key:"setUserInfo",value:function(t){var e=this;return console.log("data sui: ".concat(t)),fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t.name,about:t.about})}).then((function(t){return e._checkResponse(t)})).then((function(t){return console.log(t),t}))}},{key:"setUserAvatar",value:function(t){var e=this;return console.log("data sua: ".concat(t)),fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:t.link})}).then((function(t){return e._checkResponse(t)})).then((function(t){return console.log(t),t}))}},{key:"addNewCard",value:function(t){var e=this;return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:t.name,link:t.link})}).then((function(t){return e._checkResponse(t)})).then((function(t){return console.log(t),t}))}},{key:"cardDelete",value:function(t){var e=this;return fetch("".concat(this._url,"/cards/").concat(t),{method:"DELETE",headers:{authorization:this._authorization}}).then((function(t){return e._checkResponse(t)})).then((function(t){return console.log("cardDelete: ".concat(t)),t}))}},{key:"putCardLike",value:function(t){var e=this;return fetch("".concat(this._url,"/cards/likes/").concat(t),{method:"PUT",headers:this._headers}).then((function(t){return e._checkResponse(t)})).then((function(t){return console.log(t),t}))}},{key:"deleteCardLike",value:function(t){var e=this;return fetch("".concat(this._url,"/cards/likes/").concat(t),{method:"DELETE",headers:this._headers}).then((function(t){return e._checkResponse(t)})).then((function(t){return console.log(t),t}))}}])&&o(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==u(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===u(o)?o:String(o)),r)}var o}var c=function(){function t(e,n,r,o,i){var u=i.handleImageClick,a=i.handleDeleteCard,c=i.handlePutLike;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._link=e.link,this._name=e.name,this._likes=e.likes,this.cardId=e._id,this._owner=e.owner,this._template=r,this._handleImageClick=u,this._handleDeleteCard=a,this._handlePutLike=c,this._userId=n,this._likeConutSelector=o}var e,n;return e=t,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._template).content.querySelector(".gallery__item").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._buttonDelete=this._element.querySelector(".gallery__delete-btn"),this._likeCountElement=this._element.querySelector(this._likeConutSelector),this._setEventListener(),this._cardImage.src=this._link,this._cardImage.alt=this._name,this._element.querySelector(".gallery__item-title").textContent=this._name,this._likeCountElement.textContent=this._likes.length,this._owner._id!==this._userId&&this._buttonDelete.classList.add("gallery__delete-btn_hidden"),this._likeCard(),this._element}},{key:"handleButtonDeleteClick",value:function(){this._element.remove(),this._element=null}},{key:"countLike",value:function(t){this._likes=t.likes}},{key:"_likeCard",value:function(){this.isLiked()}},{key:"checkLike",value:function(){var t=this;return this._likes.some((function(e){return e._id===t._userId}))}},{key:"isLiked",value:function(){this._likeCountElement.textContent=this._likes.length,this.checkLike()?this._buttonLike.classList.add("gallery__like-btn_active"):this._buttonLike.classList.remove("gallery__like-btn_active")}},{key:"_setEventListener",value:function(){var t=this;this._cardImage=this._element.querySelector(".gallery__image"),this._buttonLike=this._element.querySelector(".gallery__like-btn"),this._buttonLike.addEventListener("click",(function(){t._handlePutLike(t)})),this._element.querySelector(".gallery__delete-btn").addEventListener("click",(function(){t._handleDeleteCard(t)})),this._cardImage.addEventListener("click",(function(){t._handleImageClick({link:t._link,name:t._name})}))}}])&&a(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==l(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===l(o)?o:String(o)),r)}var o}var f=function(){function t(e,n){var r=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=r,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"renderItems",value:function(t){var e=this;t.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(t){this._container.prepend(t)}}])&&s(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function y(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,h(r.key),r)}}function h(t){var e=function(t,e){if("object"!==p(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==p(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===p(e)?e:String(e)}var d=function(){function t(e){var n,r,o,i=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,o=function(t){"Escape"===t.key&&i.close()},(r=h(r="_handleEscClose"))in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,this._popup=document.querySelector(e),this._buttonSubmit=this._popup.querySelector(".popup__safe-btn")}var e,n;return e=t,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"renderLoading",value:function(t,e){this._buttonSubmit&&(t?(this.defaultText=this._buttonSubmit.textContent,this._buttonSubmit.textContent=e):t||(this._buttonSubmit.textContent=defaultText))}},{key:"setEventListener",value:function(){var t=this;this._popup.addEventListener("mousedown",(function(e){e.target.classList.contains("popup_opened")&&t.close(),e.target.classList.contains("popup__exit-btn")&&t.close()}))}}])&&y(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function m(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==b(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==b(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===b(o)?o:String(o)),r)}var o}function v(){return v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=g(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},v.apply(this,arguments)}function _(t,e){return _=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},_(t,e)}function g(t){return g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},g(t)}var S=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=g(r);if(o){var n=g(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===b(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n,r=e.handleFormSubmit;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._handleFormSubmit=r,n._form=n._popup.querySelector(".popup__form"),n._inputList=n._form.querySelectorAll(".popup__input-item"),n._submitButton=n._form.querySelector(".popup__safe-btn"),n}return e=u,(n=[{key:"_getInputValues",value:function(){var t=this;return this._inputValues={},this._inputList.forEach((function(e){t._inputValues[e.name]=e.value})),this._inputValues}},{key:"setInputValue",value:function(t){this._inputList.forEach((function(e,n){e.value=Object.values(t)[n]}))}},{key:"setEventListener",value:function(){var t=this;this._form.addEventListener("submit",(function(e){e.preventDefault(),t._handleFormSubmit(t._getInputValues())})),v(g(u.prototype),"setEventListener",this).call(this)}},{key:"close",value:function(){this._form.reset(),v(g(u.prototype),"close",this).call(this)}},{key:"renderLoading",value:function(t,e){this._buttonSubmit=this._form.querySelector(".popup__safe-btn"),this._buttonSubmit&&(t?(this._defaultText=this._buttonSubmit.textContent,this._buttonSubmit.textContent=e):this._buttonSubmit.textContent=this._defaultText)}}])&&m(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(d);function k(t){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},k(t)}function w(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==k(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==k(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===k(o)?o:String(o)),r)}var o}function E(){return E="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=L(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},E.apply(this,arguments)}function C(t,e){return C=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},C(t,e)}function L(t){return L=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},L(t)}var j=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&C(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=L(r);if(o){var n=L(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===k(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._popupImageCard=e._popup.querySelector(".popup__img-card"),e._popupDescriptionCard=e._popup.querySelector(".popup__descritption-card"),e}return e=u,(n=[{key:"open",value:function(t){E(L(u.prototype),"open",this).call(this),this._popupImageCard.src=t.link,this._popupImageCard.alt=t.name,this._popupDescriptionCard.textContent=t.name}}])&&w(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(d);function O(t){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},O(t)}function P(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==O(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==O(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===O(o)?o:String(o)),r)}var o}function I(){return I="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=R(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},I.apply(this,arguments)}function T(t,e){return T=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},T(t,e)}function R(t){return R=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},R(t)}var q=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&T(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=R(r);if(o){var n=R(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===O(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._confirmButton=e._popup.querySelector(".popup__safe-btn"),e}return e=u,(n=[{key:"setConfirm",value:function(t){this._handleConfirmCallback=t}},{key:"setEventListener",value:function(){var t=this;I(R(u.prototype),"setEventListener",this).call(this),this._confirmButton.addEventListener("click",(function(){t._handleConfirmCallback()}))}},{key:"renderLoading",value:function(t,e){I(R(u.prototype),"renderLoading",this).call(this,t,e)}}])&&P(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(d);function x(t){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},x(t)}function B(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==x(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==x(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===x(o)?o:String(o)),r)}var o}var D=function(){function t(e){var n=e.userNameSelector,r=e.userInfoSelector,o=e.userAvatarSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._userNameSelector=document.querySelector(n),this._userInfoSelector=document.querySelector(r),this._userAvatarSelector=document.querySelector(o)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{name:this._userNameSelector.textContent,about:this._userInfoSelector.textContent}}},{key:"setUserInfo",value:function(t){console.log(t),this._userNameSelector.textContent=t.name,this._userInfoSelector.textContent=t.about,this._userAvatarSelector.src=t.avatar}}])&&B(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function A(t){return A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},A(t)}function U(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==A(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==A(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===A(o)?o:String(o)),r)}var o}var V=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._formSelector=e.formSelector,this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._form=n,this._buttonElement=this._form.querySelector(this._submitButtonSelector),this._inputList=Array.from(this._form.querySelectorAll(this._inputSelector))}var e,n;return e=t,(n=[{key:"enableValidation",value:function(){this._setEventListener()}},{key:"_showInputError",value:function(t){var e=this._form.querySelector(".".concat(t.id,"-error"));t.classList.add(this._errorClass),e.textContent=t.validationMessage,e.classList.add(this._inputErrorClass)}},{key:"_hideInputError",value:function(t){var e=this._form.querySelector(".".concat(t.id,"-error"));t.classList.remove(this._errorClass),e.classList.remove(this._inputErrorClass),e.textContent=""}},{key:"disableButton",value:function(){this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.disabled=!0}},{key:"_enableButton",value:function(){this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.disabled=!1}},{key:"_isValid",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(t){return!t.validity.valid}))}},{key:"resetValidation",value:function(){var t=this;this._toggleButtonState(),this._inputList.forEach((function(e){t._hideInputError(e)}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this.disableButton():this._enableButton()}},{key:"_setEventListener",value:function(){var t=this;this._toggleButtonState(),this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._isValid(e),t._toggleButtonState()}))}))}}])&&U(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function N(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var z,F={};z={formSelector:".popup__form",inputSelector:".popup__input-item",submitButtonSelector:".popup__safe-btn",inactiveButtonClass:"popup__safe-btn_disabled",inputErrorClass:"popup__input-error_active",errorClass:"popup__input-item_type_error"},Array.from(document.querySelectorAll(z.formSelector)).forEach((function(t){var e=new V(z,t),n=t.getAttribute("name");F[n]=e,e.enableValidation()}));var J=new i({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-65",headers:{authorization:"e66028db-2d04-435a-b30a-e2914b0c1191","Content-Type":"application/json"}});Promise.all([J.getInitialCard(),J.getUserInfo()]).then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,u,a=[],c=!0,l=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(a.push(r.value),a.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(e,n)||function(t,e){if(t){if("string"==typeof t)return N(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?N(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];$=i._id,Q.setUserInfo(i),K.renderItems(o,$)})).catch((function(t){return console.log(t)}));var H=new j(".popup_type_opened-card"),M=new q(".popup_type_verification");M.setEventListener();var $,G=function(t){var e=new c(t,$,".template-card",".card__like-count",{handleImageClick:function(){H.open(t)},handleDeleteCard:function(){M.setConfirm((function(){M.renderLoading(!0,"Удаление..."),J.cardDelete(t._id).then((function(){e.handleButtonDeleteClick(),M.close()})).catch((function(t){return console.log(t)})).finally((function(){W.renderLoading(!1)}))})),M.open()},handlePutLike:function(){e.checkLike()?J.deleteCardLike(t._id).then((function(t){e.countLike(t),e.isLiked()})).catch((function(t){return console.log(t)})):J.putCardLike(t._id).then((function(t){e.countLike(t),e.isLiked()})).catch((function(t){return console.log(t)}))}});return e.generateCard()},K=new f({renderer:function(t){K.addItem(G(t))}},".gallery__list"),Q=new D({userNameSelector:".profile__user-name",userInfoSelector:".profile__user-description",userAvatarSelector:".profile__image"}),W=new S(".popup_type_edit-profile",{handleFormSubmit:function(t){return W.renderLoading(!0,"Сохранение..."),J.setUserInfo(t).then((function(t){Q.setUserInfo(t),W.close()})).catch((function(t){return console.log(t)})).finally((function(){W.renderLoading(!1)}))}});W.setEventListener();var X=new S(".popup_type_edit-avatar",{handleFormSubmit:function(t){console.log("data: ".concat(t)),X.renderLoading(!0,"Сохранение..."),J.setUserAvatar(t).then((function(t){console.log("res: ".concat(t)),Q.setUserInfo(t),X.close()})).catch((function(t){return console.log(t)})).finally((function(){X.renderLoading(!1)}))}}),Y=new S(".popup_type_add-card",{handleFormSubmit:function(t){console.log("data: ".concat(t)),Y.renderLoading(!0,"Сохранение..."),J.addNewCard(t).then((function(t){console.log("res: ".concat(t)),K.addItem(G(t)),console.log("data: ".concat(t,", id: ").concat($)),Y.close()})).catch((function(t){return console.log(t)})).finally((function(){Y.renderLoading(!1)}))}});e.addEventListener("click",(function(){W.open(),W.setInputValue(Q.getUserInfo()),F["edit-profile"].resetValidation()})),t.addEventListener("click",(function(){X.open(),F["edit-avatar"].resetValidation()})),n.addEventListener("click",(function(){Y.open(),F["add-card"].resetValidation()})),W.setEventListener(),X.setEventListener(),Y.setEventListener(),H.setEventListener()})();