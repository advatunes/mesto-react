import React, { useState } from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
// import { handleEditAvatarClick } from './Main.js';
// import { handleEditProfileClick } from './Main.js';
// import { handleAddPlaceClick } from './Main.js';

// const isEditProfilePopupOpen
// const isAddPlacePopupOpen
// const isEditAvatarPopupOpen

function App() {
  const [isEditProfilePopupOpen, setProfilePopupOpen] = React.useState(false);
  function handleEditProfileClick() {
    setProfilePopupOpen(!isEditProfilePopupOpen);
  }

  const [isAddPlacePopupOpen, setPlacePopupOpen] = React.useState(false);
  function handleAddPlaceClick() {
    setPlacePopupOpen(!isAddPlacePopupOpen);
  }

  const [isEditAvatarPopupOpen, setAvatarPopupOpen] = React.useState(false);
  function handleEditAvatarClick() {
    setAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function closeAllPopups() {
    setProfilePopupOpen(false)
    setPlacePopupOpen(false)
    setAvatarPopupOpen(false)
  }


  return (
    <div className='root'>
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onAddPlace={handleAddPlaceClick}
        onEditProfile={handleEditProfileClick}
      />
      <Footer />
      <PopupWithForm
        name={'avatar'}
        title={'Обновить аватар'}
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        buttonTitle={'Сохранить'}
        children={
          <>
            <input
              className='popup__input popup-avatar__input-link'
              name='avatar'
              placeholder='Ссылка на аватар'
              type='url'
              required
            />
            <span className='popup__error' id='avatar-error'></span>
          </>
        }
      />
      <PopupWithForm
        name={'place'}
        title={'Новое место'}
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        buttonTitle={'Создать'}
        children={
          <>
            <label className='popup__form-field'>
              <input
                className='popup__input popup-place__input-place'
                name='place'
                placeholder='Название'
                type='text'
                minLength='2'
                maxLength='30'
                required
              />
              <span className='popup__error' id='place-error'></span>
            </label>
            <label className='popup__form-field'>
              <input
                className='popup__input popup-place__input-link'
                name='link'
                placeholder='Ссылка на картинку'
                type='url'
                required
              />
              <span className='popup__error' id='link-error'></span>
            </label>
          </>
        }
      />
      <PopupWithForm
        name={'name'}
        title={'Редактировать профиль'}
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        buttonTitle={'Сохранить'}
        children={
          <>
            <input
              className='popup__input popup-name__input-name'
              name='name'
              type='text'
              minLength='2'
              maxLength='40'
              required
            />
            <span className='popup__error' id='name-error'></span>
            <input
              className='popup__input popup-name__input-job'
              name='job'
              type='text'
              minLength='2'
              maxLength='200'
              required
            />
            <span className='popup__error' id='job-error'></span>
          </>

        }
      />
      {/* <template id='element-template'>
        <article className='element'>
          <img className='element__image' src='#' alt='#' />
          <button className='element__trash-icon' type='button' aria-label='удалить'></button>
          <div className='element__info'>
            <h2 className='element__name'></h2>
            <div className='element__like'>
              <button className='element__like-btn' type='button' aria-label='лайк'></button>
              <p className='element__like-counter'>0</p>
            </div>
          </div>
        </article>
      </template> */}
    </div>
  );
}

export default App;
