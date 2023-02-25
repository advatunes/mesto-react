import React, { useState } from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';

function App() {
  const [isEditProfilePopupOpen, setProfilePopupOpen] = useState(false);

  const [isAddPlacePopupOpen, setPlacePopupOpen] = useState(false);

  const [isEditAvatarPopupOpen, setAvatarPopupOpen] = useState(false);

  const [selectedCard, setSelectedCard] = useState(null);

  function handleEditProfileClick() {
    setProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleAddPlaceClick() {
    setPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function handleEditAvatarClick() {
    setAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function closeAllPopups() {
    setProfilePopupOpen(false);
    setPlacePopupOpen(false);
    setAvatarPopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <div className='root'>
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onAddPlace={handleAddPlaceClick}
        onEditProfile={handleEditProfileClick}
        onCardClick={setSelectedCard}
      />
      <Footer />

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />

      <PopupWithForm
        name={'avatar'}
        title={'Обновить аватар'}
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        buttonTitle={'Сохранить'}
      >
        <input
          className='popup__input popup-avatar__input-link'
          name='avatar'
          placeholder='Ссылка на аватар'
          type='url'
          required
        />
        <span className='popup__error' id='avatar-error'></span>
      </PopupWithForm>

      <PopupWithForm
        name={'place'}
        title={'Новое место'}
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        buttonTitle={'Создать'}
      >
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
      </PopupWithForm>

      <PopupWithForm
        name={'name'}
        title={'Редактировать профиль'}
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        buttonTitle={'Сохранить'}
      >
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
      </PopupWithForm>
    </div>
  );
}

export default App;
