import React, { useState, useEffect } from 'react';
import Card from './Card.js';
import { api } from '../utils/api.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main({ onEditAvatar, onAddPlace, onEditProfile, onCardClick }) {
  // const [userName, setUserName] = useState('');
  // const [userDescription, setUserDescription] = useState('');
  // const [userAvatar, setUserAvatar] = useState('');

  const currentUser = React.useContext(CurrentUserContext);

  const [cards, setCards] = useState([]);

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

  // useEffect(() => {
  //   api
  //     .getUserData()
  //     .then((data) => {
  //       setUserName(data.name);
  //       setUserDescription(data.about);
  //       setUserAvatar(data.avatar);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  // const ass = console.log(currentUser);

  return (
    <main className='content'>
      <section className='profile content__profile'>
        <div className='profile__avatar-wrap'>
          <img
            className='profile__avatar'
            alt='аватар'
            onClick={onEditAvatar}
            src={`${currentUser.avatar}`}
          />
          <div className='profile__avatar-hover'></div>
        </div>

        <div className='profile__info'>
          <div className='profile__name-wrap'>
            <h1 className='profile__name'>{currentUser.name}</h1>
            <button
              className='profile__edit-button'
              type='button'
              aria-label='Редактировать профиль'
              onClick={onEditProfile}
            ></button>
          </div>
          <p className='profile__job'>{currentUser.about}</p>
        </div>
        <button
          className='profile__add-button'
          type='button'
          aria-label='Добавить карточку'
          onClick={onAddPlace}
        ></button>
      </section>

      <section className='elements'>
        {cards.map((card) => (
          <Card
            key={card._id}
            card={card}
            name={card.name}
            link={card.link}
            likes={card.likes.length}
            onCardClick={onCardClick}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;
