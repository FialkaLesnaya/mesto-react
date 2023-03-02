import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <div className="page">
      <div className="page__content">

        <Header></Header>

        <Main></Main>

        <Footer></Footer>

        <template id="card-template">
          <article className="elements__item">
            <div className="elements__trash"></div>
            <img className="elements__image" src="/" />
            <div className="elements__info">
              <h2 className="elements__name" title=""></h2>
              <div className="elements__like-container">
                <button type="button" className="elements__like-button"></button>
                <span className="elements__like-count"></span>
              </div>
            </div>
          </article>
        </template>

        <div className="popup" id="edit-profile">
          <div className="popup__container">
            <h2 className="popup__title">Редактировать профиль</h2>
            <button aria-label="Close" className="popup__close" type="button"></button>

            <form className="popup__body" name="edit-profile" noValidate>
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
            </form>
          </div>
        </div>

        <div className="popup" id="add-card">
          <div className="popup__container">
            <h2 className="popup__title">Новое место</h2>
            <button aria-label="Close" className="popup__close" type="button"></button>

            <form className="popup__body" name="add-card" noValidate>
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
            </form>
          </div>
        </div>

        <div className="popup popup_image-overlay" id="image-details">
          <div className="popup__image-container">
            <button aria-label="Close" className="popup__close" type="button"></button>

            <img className="popup__image" src="/" />

            <p className="popup__subtitle"></p>
          </div>
        </div>

        <div className="popup" id="delete-card">
          <div className="popup__container">
            <h2 className="popup__title">Вы уверены ?</h2>
            <button aria-label="Close" className="popup__close" type="button"></button>

            <form className="popup__body" name="edit-profile" noValidate>
              <button className="popup__save-button" type="submit">Да</button>
            </form>
          </div>
        </div>

        <div className="popup" id="update-avatar">
          <div className="popup__container">
            <h2 className="popup__title">Обновить аватар</h2>
            <button aria-label="Close" className="popup__close" type="button"></button>

            <form className="popup__body" name="update-avatar" noValidate>
              <fieldset className="popup__fieldset">
                <label className="popup__label">
                  <input required placeholder="Ссылка на аватар" type="url" className="popup__input" name="link"
                    id="avatar-link-input" />

                  <span className="popup__input-error avatar-link-input-error"></span>
                </label>

                <button className="popup__save-button" type="submit">Сохранить</button>
              </fieldset>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;

