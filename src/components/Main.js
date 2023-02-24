import React, { useState, useEffect } from 'react';
import Card from './Card.js';
import { api } from '../utils/api.js';

function Main({onEditAvatar, onAddPlace, onEditProfile, onCardClick}) {
  const [userName, setUserName] = useState();
  const [userDescription, setUserDescription] = useState();
  const [userAvatar, setUserAvatar] = useState();

  useEffect(() => {
    api
      .getUserData()
      .then((data) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getInitialCards().then((cards) => {
      setCards(cards);
      cards.map((card, i) => card);
    });
  }, []);

  return (
    <main className='content'>
      <section className='profile content__profile'>
        <div className='profile__avatar-wrap'>
          <img
            className='profile__avatar'
            alt='аватар'
            onClick={onEditAvatar}
            src={`${userAvatar}`}
          />
          <div className='profile__avatar-hover'></div>
        </div>

        <div className='profile__info'>
          <div className='profile__name-wrap'>
            <h1 className='profile__name'>{userName}</h1>
            <button
              className='profile__edit-button'
              type='button'
              aria-label='Редактировать профиль'
              onClick={onEditProfile}
            ></button>
          </div>
          <p className='profile__job'>{userDescription}</p>
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
          <Card key={card._id} card={card} name={card.name} link={card.link} likes ={card.likes.length} onCardClick={onCardClick}/>
        ))

        }
      </section>
    </main>
  );
}

export default Main;
