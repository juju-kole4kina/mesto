const showInputError = (formElement, inputElement, errorMessage, errorClass, inputErrorClass) => {
  const inputError = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(errorClass);
  inputError.textContent = errorMessage;
  inputError.classList.add(inputErrorClass);
};

const hideInputError = (formElement, inputElement, errorClass, inputErrorClass) => {
  const inputError = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(errorClass);
  inputError.classList.remove(inputErrorClass);
  inputError.textContent = '';
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
