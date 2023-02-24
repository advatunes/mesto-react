export const popupNameElement = document.querySelector('.popup-name'),
  popupNameOpenButton = document.querySelector('.profile__edit-button'),
  nameInput = popupNameElement.querySelector('.popup-name__input-name'),
  jobInput = popupNameElement.querySelector('.popup-name__input-job'),
  popupPlaceElement = document.querySelector('.popup-place'),
  popupPlaceOpenButton = document.querySelector('.profile__add-button'),
  elementsContainer = '.elements',
  popupAvatarElement = document.querySelector('.popup-avatar'),
  popupAvatarImg = document.querySelector('.profile__avatar'),
  popupWithSubmitElement = document.querySelector('.popup-withSubmit'),
  popupImageElement = document.querySelector('.popup-image');

// объект настроек
export const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible',
};
