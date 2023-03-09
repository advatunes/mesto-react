import React, { useEffect, useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import { api } from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';

function App() {
  const [selectedCard, setSelectedCard] = useState(null);

  const [isEditProfilePopupOpen, setProfilePopupOpen] = useState(false);

  const [isAddPlacePopupOpen, setPlacePopupOpen] = useState(false);

  const [isEditAvatarPopupOpen, setAvatarPopupOpen] = useState(false);

  const [currentUser, setCurrentUser] = useState('');

  useEffect(() => {
    api
      .getUserData()
      .then((data) => setCurrentUser(data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

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

  function handleUpdateUser(data) {
    api.editUserData(data).then((data) => {
      setCurrentUser(data);
      closeAllPopups();
    });
  }

  return (
    <div className="root">
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
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          buttonTitle={'Сохранить'}>
          <input
            className="popup__input popup-avatar__input-link"
            name="avatar"
            placeholder="Ссылка на аватар"
            type="url"
            required
          />
          <span className="popup__error" id="avatar-error"></span>
        </PopupWithForm>

        <PopupWithForm
          name={'place'}
          title={'Новое место'}
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          buttonTitle={'Создать'}>
          <label className="popup__form-field">
            <input
              className="popup__input popup-place__input-place"
              name="place"
              placeholder="Название"
              type="text"
              minLength="2"
              maxLength="30"
              required
            />
            <span className="popup__error" id="place-error"></span>
          </label>
          <label className="popup__form-field">
            <input
              className="popup__input popup-place__input-link"
              name="link"
              placeholder="Ссылка на картинку"
              type="url"
              required
            />
            <span className="popup__error" id="link-error"></span>
          </label>
        </PopupWithForm>
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
