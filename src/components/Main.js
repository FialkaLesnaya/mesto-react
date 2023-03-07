function Main(props) {

    return (
        <main>
            <section className="profile">
                <div className="profile__avatar-wrapper">
                    <div className="profile__avatar-edit" onClick={props.onEditAvatar}></div>
                    <img className="profile__avatar" alt="Аватар пользователя" />
                </div>

                <div className="profile__info">
                    <div className="profile__name-container">
                        <h1 className="profile__name"></h1>

                        <button aria-label="Редактировать профиль" type="button" className="profile__edit-button" onClick={props.onEditProfile}></button>
                    </div>

                    <p className="profile__position"></p>
                </div>

                <button type="button" className="profile__add-button" onClick={props.onAddPlace}></button>
            </section>

            <section className="elements">
            </section>
        </main>
    )
}

export default Main;