function Main() {
    return (
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
    )
}

export default Main;