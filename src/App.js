import './index.css';
import logoPath from './images/logo.svg';

function App() {
  return (
    <div class="page">
      <div class="page__content">

        <header class="header">
          <a class="header__logo-link" href="#" target="_self">
            <img class="header__logo" src={logoPath} alt="Логотип сайта Место" />
          </a>
        </header>

        <main>
          <section class="profile">
            <div class="profile__avatar-wrapper">
              <div class="profile__avatar-edit"></div>
              <img class="profile__avatar" alt="Аватар пользователя" />
            </div>

            <div class="profile__info">
              <div class="profile__name-container">
                <h1 class="profile__name"></h1>

                <button aria-label="Редактировать профиль" type="button" class="profile__edit-button"></button>
              </div>

              <p class="profile__position"></p>
            </div>

            <button type="button" class="profile__add-button"></button>
          </section>

          <section class="elements">
          </section>
        </main>

        <footer class="footer">
          <span class="footer__copyright">&copy; 2020 Mesto Russia</span>
        </footer>

        <template id="card-template">
          <article class="elements__item">
            <div class="elements__trash"></div>
            <img class="elements__image" src="/" />
            <div class="elements__info">
              <h2 class="elements__name" title=""></h2>
              <div class="elements__like-container">
                <button type="button" class="elements__like-button"></button>
                <span class="elements__like-count"></span>
              </div>
            </div>
          </article>
        </template>

        <div class="popup" id="edit-profile">
          <div class="popup__container">
            <h2 class="popup__title">Редактировать профиль</h2>
            <button aria-label="Close" class="popup__close" type="button"></button>

            <form class="popup__body" name="edit-profile" novalidate>
              <fieldset class="popup__fieldset">
                <label class="popup__label">
                  <input required placeholder="Введите имя" type="text" class="popup__input" id="name-input"
                    name="name" minlength="2" maxlength="40" />

                  <span class="popup__input-error name-input-error"></span>
                </label>

                <label class="popup__label">
                  <input required placeholder="Введите ваш вид деятельности" type="text" class="popup__input"
                    id="job-input" name="job" minlength="2" maxlength="200" />

                  <span class="popup__input-error job-input-error"></span>
                </label>

                <button class="popup__save-button" type="submit">Сохранить</button>
              </fieldset>
            </form>
          </div>
        </div>

        <div class="popup" id="add-card">
          <div class="popup__container">
            <h2 class="popup__title">Новое место</h2>
            <button aria-label="Close" class="popup__close" type="button"></button>

            <form class="popup__body" name="add-card" novalidate>
              <fieldset class="popup__fieldset">
                <label class="popup__label">
                  <input required placeholder="Название" type="text" class="popup__input" name="name"
                    id="card-name-input" minlength="2" maxlength="30" />

                  <span class="popup__input-error card-name-input-error"></span>
                </label>

                <label class="popup__label">
                  <input required placeholder="Ссылка на картинку" type="url" class="popup__input" name="link"
                    id="link-input" />

                  <span class="popup__input-error link-input-error"></span>
                </label>

                <button class="popup__save-button" type="submit">Создать</button>
              </fieldset>
            </form>
          </div>
        </div>

        <div class="popup popup_image-overlay" id="image-details">
          <div class="popup__image-container">
            <button aria-label="Close" class="popup__close" type="button"></button>

            <img class="popup__image" src="/" />

            <p class="popup__subtitle"></p>
          </div>
        </div>

        <div class="popup" id="delete-card">
          <div class="popup__container">
            <h2 class="popup__title">Вы уверены ?</h2>
            <button aria-label="Close" class="popup__close" type="button"></button>

            <form class="popup__body" name="edit-profile" novalidate>
              <button class="popup__save-button" type="submit">Да</button>
            </form>
          </div>
        </div>

        <div class="popup" id="update-avatar">
          <div class="popup__container">
            <h2 class="popup__title">Обновить аватар</h2>
            <button aria-label="Close" class="popup__close" type="button"></button>

            <form class="popup__body" name="update-avatar" novalidate>
              <fieldset class="popup__fieldset">
                <label class="popup__label">
                  <input required placeholder="Ссылка на аватар" type="url" class="popup__input" name="link"
                    id="avatar-link-input" />

                  <span class="popup__input-error avatar-link-input-error"></span>
                </label>

                <button class="popup__save-button" type="submit">Сохранить</button>
              </fieldset>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
