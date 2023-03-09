import React, { useState, useEffect } from 'react';
import { Api } from '../utils/Api';
import Card from './Card';

function Main(props) {
    const [userName, setUserName] = useState('');
    const [userDescription, setUserDescription] = useState('');
    const [userAvatar, setUserAvatar] = useState('');
    const [cards, setCards] = useState([]);

    useEffect(() => {
        Promise.all([Api.getCurrentUser(), Api.loadCards()])
            // тут деструктурируете ответ от сервера, чтобы было понятнее, что пришло
            .then(([userData, userCards]) => {
                setUserName(userData.name);
                setUserDescription(userData.about);
                setUserAvatar(userData.avatar);
                setCards(userCards);
            })
            .catch(err => {
                // тут ловим ошибку
                console.log(`Ошибка загрузки изначальных данных ${err}`);
            });
    }, []);

    console.log(cards);

    return (
        <main>
            <section className="profile">
                <div className="profile__avatar-wrapper">
                    <div className="profile__avatar-edit" onClick={props.onEditAvatar}></div>
                    <img className="profile__avatar" alt="Аватар пользователя" src={userAvatar} />
                </div>

                <div className="profile__info">
                    <div className="profile__name-container">
                        <h1 className="profile__name">{userName}</h1>

                        <button aria-label="Редактировать профиль" type="button" className="profile__edit-button" onClick={props.onEditProfile}></button>
                    </div>

                    <p className="profile__position">{userDescription}</p>
                </div>

                <button type="button" className="profile__add-button" onClick={props.onAddPlace}></button>
            </section>

            <section className="elements">
                {cards.map((item) => (
                    <article className="elements__item">
                        <div className="elements__trash"></div>
                        <img className="elements__image" src={item.link} />
                        <div className="elements__info">
                            <h2 className="elements__name" title="">{item.name}</h2>
                            <div className="elements__like-container">
                                <button type="button" className="elements__like-button" onClick={props.onDeleteCardClick}></button>
                                <span className="elements__like-count">{item.likes.length}</span>
                            </div>
                        </div>
                    </article>
                ))}
            </section>
        </main>
    )
}

export default Main;