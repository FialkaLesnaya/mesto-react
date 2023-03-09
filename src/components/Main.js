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
            .then(([userData, userCards]) => {
                setUserName(userData.name);
                setUserDescription(userData.about);
                setUserAvatar(userData.avatar);
                setCards(userCards);
            })
            .catch(err => {
                console.log(`Ошибка загрузки изначальных данных ${err}`);
            });
    }, []);

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
                    <Card
                        key={item._id}
                        card={item}
                        onDeleteCardClick={props.onDeleteCardClick}
                        onCardClick={props.onCardClick}>
                    </Card>
                ))}
            </section>
        </main>
    )
}

export default Main;