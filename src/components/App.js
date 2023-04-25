import "../index.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import React, { useEffect, useState } from "react";
import { Api } from "utils/Api";
import {
  CurrentUserContext,
  currentUserObject,
} from "contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isDeleteCardOpen, setIsDeleteCardOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState(currentUserObject);
  const [cards, setCards] = useState([]);

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const handleDeleteCardClick = () => {
    setIsDeleteCardOpen(true);
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsDeleteCardOpen(false);
    setSelectedCard(null);
  };

  useEffect(() => {
    Api.getCurrentUser()
      .then((userData) => {
        setCurrentUser(userData);
      })
      .catch((err) => {
        console.log(`Ошибка загрузки данных ${err}`);
      });
  }, []);

  useEffect(() => {
    Api.loadCards()
      .then((userCards) => {
        setCards(userCards);
      })
      .catch((err) => {
        console.log(`Ошибка загрузки изначальных данных ${err}`);
      });
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    Api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
    });
  }

  function handleCardDelete(card) {
    Api.deleteCard(card._id).then(() => {
      setCards(
        cards.filter((item) => {
          return item._id != card._id;
        })
      );
    });
  }

  function handleUpdateUser({ name, about }) {
    Api.editProfile(name, about).then((user) => {
      setCurrentUser({ name: name, about: about, avatar: user.avatar });
      closeAllPopups();
    });
  }

  function handleUpdateAvatar({ avatar }) {
    Api.updateAvatar(avatar).then((user) => {
      setCurrentUser({
        name: user.name,
        about: user.about,
        avatar: user.avatar,
      });
      closeAllPopups();
    });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__content">
          <Header></Header>

          <Main
            onEditAvatar={handleEditAvatarClick}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onDeleteCardClick={handleDeleteCardClick}
            onCardClick={handleCardClick}
            cards={cards}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          ></Main>

          <Footer></Footer>

          <ImagePopup onClose={closeAllPopups} card={selectedCard}></ImagePopup>

          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
          />

          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
          />

          <PopupWithForm
            title="Новое место"
            name="add-card"
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            buttonText="Создать"
          >
            <label className="popup__label">
              <input
                required
                placeholder="Название"
                type="text"
                className="popup__input"
                name="name"
                id="card-name-input"
                minLength={2}
                maxLength={30}
              />

              <span className="popup__input-error card-name-input-error"></span>
            </label>

            <label className="popup__label">
              <input
                required
                placeholder="Ссылка на картинку"
                type="url"
                className="popup__input"
                name="link"
                id="link-input"
              />

              <span className="popup__input-error link-input-error"></span>
            </label>
          </PopupWithForm>

          <PopupWithForm
            title="Вы уверены ?"
            name="delete-card"
            isOpen={isDeleteCardOpen}
            onClose={closeAllPopups}
            buttonText="Да"
          ></PopupWithForm>
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
