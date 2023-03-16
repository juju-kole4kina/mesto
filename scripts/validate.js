// const showInputError = (formElement, inputElement, errorMessage) => {
//   const formError = formElement.querySelector(`.${inputElement.id}-error`);
//   inputElement.classList.add('popup__input-item_type_error');
//   formError.textContent = errorMessage;
//   formError.classList.add('popup__input-error_active');
// };

// const hideInputError = (formElement, inputElement) => {
//   const formError = formElement.querySelector(`.${inputElement.id}-error`);
//   inputElement.classList.remove('popup__input-item_type_error');
//   formError.classList.remove('popup__input-error_active');
//   formError.textContent = '';
// };

// const isValid = (formElement, inputElement) => {
//   if (!inputElement.validity.valid) {
//     showInputError(formElement, inputElement, inputElement.validationMessage);
//   } else {
//     hideInputError(formElement, inputElement);
//   };
// };

// const hasInvalidInput = (inputList) => {
//   return inputList.some((inputElement) => {
//     return !inputElement.validity.valid;
//   });
// };

// const toggleButtonState = (inputList, buttonElement) => {
//   if (hasInvalidInput(inputList)) {
//     buttonElement.classList.add('popup__safe-btn_disabled');
//   } else {
//     buttonElement.classList.remove('popup__safe-btn_disabled');
//   }
// };

// const setEventListener = (formElement) => {
//   const inputList = Array.from(formElement.querySelectorAll('.popup__input-item'));
//   const buttonElement = formElement.querySelector('.popup__safe-btn');

//   toggleButtonState(inputList, buttonElement);
//   inputList.forEach((inputElement) => {
//     inputElement.addEventListener('input', () => {
//       isValid(formElement, inputElement);

//       toggleButtonState(inputList, buttonElement);
//     });
//   });
// };

// const enableValidation = () => {
//   const formList = Array.from(document.querySelectorAll('.popup__form'));

//   formList.forEach((formElement) => {
//     setEventListener(formElement);
//   });
// };

// enableValidation();

// =================================

const showInputError = (formElement, inputElement, errorMessage, errorClass, inputErrorClass) => {
  const formError = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(errorClass);
  formError.textContent = errorMessage;
  formError.classList.add(inputErrorClass);
};

const hideInputError = (formElement, inputElement, errorClass, inputErrorClass) => {
  const formError = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(errorClass);
  formError.classList.remove(inputErrorClass);
  formError.textContent = '';
};

const disableButton = (buttonElement, inactiveButtonClass) => {
  buttonElement.classList.add(inactiveButtonClass);
  buttonElement.disabled = true;
};

const enableButton = (buttonElement, inactiveButtonClass) => {
  buttonElement.classList.remove(inactiveButtonClass);
  buttonElement.disabled = false;
};

const isValid = (formElement, inputElement, errorClass, inputErrorClass) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, errorClass, inputErrorClass);
  } else {
    hideInputError(formElement, inputElement, errorClass, inputErrorClass);
  };
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement, inactiveButtonClass) => {
  if (hasInvalidInput(inputList)) {
    disableButton(buttonElement, inactiveButtonClass);
  } else {
    enableButton(buttonElement, inactiveButtonClass);
  }
};

const setEventListener = (formElement, inputList, buttonElement, inactiveButtonClass, errorClass, inputErrorClass) => {

  toggleButtonState(inputList, buttonElement, inactiveButtonClass);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement, errorClass, inputErrorClass);

      toggleButtonState(inputList, buttonElement, inactiveButtonClass);
    });
  });
};

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));

  formList.forEach((formElement) => {
    const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
    const buttonElement = formElement.querySelector(config.submitButtonSelector);
    setEventListener(formElement, inputList, buttonElement, config.inactiveButtonClass, config.errorClass, config.inputErrorClass );
  });
};

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input-item',
  submitButtonSelector: '.popup__safe-btn',
  inactiveButtonClass: 'popup__safe-btn_disabled',
  inputErrorClass: 'popup__input-error_active',
  errorClass: 'popup__input-item_type_error'
});
