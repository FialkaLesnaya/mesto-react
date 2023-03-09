import React, { useState, useEffect } from 'react';
import { Api } from '../utils/Api';

function Main(props) {
    const [userName, setUserName] = useState('');
    const [userDescription, setUserDescription] = useState('');
    const [userAvatar, setUserAvatar] = useState('');

    useEffect(() => {
        Promise.all([Api.getCurrentUser()])
            // тут деструктурируете ответ от сервера, чтобы было понятнее, что пришло
            .then(([userData]) => {
                setUserName(userData.name);
                setUserDescription(userData.about);
                setUserAvatar(userData.avatar);
            })
            .catch(err => {
                // тут ловим ошибку
                console.log(`Ошибка загрузки изначальных данных ${err}`);
            });
    });

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
            </section>
        </main>
    )
}

export default Main;