import React, { useEffect, useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import { api } from '../utils/api';
import {CurrentUserContext} from '../contexts/CurrentUserContext';

function App() {
  const [selectedCard, setSelectedCard] = useState(null);

  const [popups, setPopups] = useState({
    isEditProfilePopupOpen: false,
    isAddPlacePopupOpen: false,
    isEditAvatarPopupOpen: false,
  });

  const [currentUser, setCurrentUser] = useState('');

  useEffect(() => {
    api
      .getUserData()
      .then((data) => setCurrentUser(data))
      .catch((err) => {
        console.log(err);
      });
  },[]);

  function handleEditProfileClick() {
    setPopups({ ...popups, isEditProfilePopupOpen: !popups.isEditProfilePopupOpen });
  }

  function handleAddPlaceClick() {
    setPopups({ ...popups, isAddPlacePopupOpen: !popups.isAddPlacePopupOpen });
  }

  function handleEditAvatarClick() {
    setPopups({ ...popups, isEditAvatarPopupOpen: !popups.isEditAvatarPopupOpen });
  }

  function closeAllPopups() {
    setPopups(false);
    setSelectedCard(null);
  }

  return (
    <div className='root'>
      <CurrentUserContext.Provider value={currentUser}>
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
          isOpen={popups.isEditAvatarPopupOpen}
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
          isOpen={popups.isAddPlacePopupOpen}
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
          isOpen={popups.isEditProfilePopupOpen}
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
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
