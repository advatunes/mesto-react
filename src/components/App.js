import React, { useEffect, useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import { api } from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';

function App() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [cards, setCards] = useState([]);

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

  useEffect(() => {
    api
      .getInitialCards()
      .then((cards) => {
        setCards(cards);
      })
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

  function handleUpdateAvatar(data) {
    api.editAvatar(data).then((data) => {
      setCurrentUser(data);
      closeAllPopups();
    });
  }

  // function handleCardLike(card) {
  //   const isLiked = card.likes.some((i) => i._id === currentUser._id);

  //   api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
  //     setCards((state) => {
  //       state.map((c) => (c._id === card._id ? newCard : c))
  //     });
  //   });
  // }

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
    });
  }

  function handleDeleteCard(card) {
    // const isOwn = card.owner._id === currentUser._id;
    api.deleteCard(card._id).then(setCards(cards.filter((c) => c._id !== card._id)));
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
          onCardLike={handleCardLike}
          onCardDelete={handleDeleteCard}
          cards={cards}
        />
        <Footer />

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />

        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />

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
