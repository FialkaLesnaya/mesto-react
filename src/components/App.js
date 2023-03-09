import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import React, { useState } from 'react';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isDeleteCardOpen, setIsDeleteCardOpen] = useState(false);

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  }

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  }

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  }

  const handleDeleteCardClick = () => {
    setIsDeleteCardOpen(true);
  }

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsDeleteCardOpen(false);
  }

  return (
    <div className="page">
      <div className="page__content">

        <Header></Header>

        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
        ></Main>

        <Footer></Footer>

        <ImagePopup></ImagePopup>

        <PopupWithForm
          title="Редактировать профиль"
          name="edit-profile"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        >
          <fieldset className="popup__fieldset">
            <label className="popup__label">
              <input required placeholder="Введите имя" type="text" className="popup__input" id="name-input"
                name="name" minLength="2" maxLength="40" />

              <span className="popup__input-error name-input-error"></span>
            </label>

            <label className="popup__label">
              <input required placeholder="Введите ваш вид деятельности" type="text" className="popup__input"
                id="job-input" name="job" minLength="2" maxLength="200" />

              <span className="popup__input-error job-input-error"></span>
            </label>

            <button className="popup__save-button" type="submit">Сохранить</button>
          </fieldset>
        </PopupWithForm>

        <PopupWithForm
          title="Обновить аватар"
          name="update-avatar"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <fieldset className="popup__fieldset">
            <label className="popup__label">
              <input required placeholder="Ссылка на аватар" type="url" className="popup__input" name="link"
                id="avatar-link-input" />

              <span className="popup__input-error avatar-link-input-error"></span>
            </label>

            <button className="popup__save-button" type="submit">Сохранить</button>
          </fieldset>
        </PopupWithForm>

        <PopupWithForm
          title="Новое место"
          name="add-card"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <fieldset className="popup__fieldset">
            <label className="popup__label">
              <input required placeholder="Название" type="text" className="popup__input" name="name"
                id="card-name-input" minLength="2" maxLength="30" />

              <span className="popup__input-error card-name-input-error"></span>
            </label>

            <label className="popup__label">
              <input required placeholder="Ссылка на картинку" type="url" className="popup__input" name="link"
                id="link-input" />

              <span className="popup__input-error link-input-error"></span>
            </label>

            <button className="popup__save-button" type="submit">Создать</button>
          </fieldset>
        </PopupWithForm>

        <PopupWithForm
          title="Вы уверены ?"
          name="delete-card"
          isOpen={isDeleteCardOpen}
          onClose={closeAllPopups}
        >
          <button className="popup__save-button" type="submit">Да</button>
        </PopupWithForm>

        <template id="card-template">
          <article className="elements__item">
            <div className="elements__trash"></div>
            <img className="elements__image" src="/" />
            <div className="elements__info">
              <h2 className="elements__name" title=""></h2>
              <div className="elements__like-container">
                <button type="button" className="elements__like-button" onClick={handleDeleteCardClick}></button>
                <span className="elements__like-count"></span>
              </div>
            </div>
          </article>
        </template>

      </div>
    </div>
  );
}

export default App;

