import React, { useState, useEffect, useContext } from "react";
import { Api } from "../utils/Api";
import Card from "./Card";
import { CurrentUserContext } from "contexts/CurrentUserContext";

function Main(props) {
  const [cards, setCards] = useState([]);
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    Api.loadCards()
      .then((userCards) => {
        setCards(userCards);
      })
      .catch((err) => {
        console.log(`Ошибка загрузки изначальных данных ${err}`);
      });
  }, []);

  return (
    <main>
      <section className="profile">
        <div className="profile__avatar-wrapper">
          <div
            className="profile__avatar-edit"
            onClick={props.onEditAvatar}
          ></div>
          <img
            className="profile__avatar"
            alt="Аватар пользователя"
            src={currentUser.avatar}
          />
        </div>

        <div className="profile__info">
          <div className="profile__name-container">
            <h1 className="profile__name">{currentUser.name}</h1>

            <button
              aria-label="Редактировать профиль"
              type="button"
              className="profile__edit-button"
              onClick={props.onEditProfile}
            ></button>
          </div>

          <p className="profile__position">{currentUser.about}</p>
        </div>

        <button
          type="button"
          className="profile__add-button"
          onClick={props.onAddPlace}
        ></button>
      </section>

      <section className="elements">
        {cards.map((item) => (
          <Card
            key={item._id}
            card={item}
            onDeleteCardClick={props.onDeleteCardClick}
            onCardClick={props.onCardClick}
          ></Card>
        ))}
      </section>
    </main>
  );
}

export default Main;
