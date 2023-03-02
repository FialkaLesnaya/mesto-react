function Main() {

    function handleEditAvatarClick() {
        //document.querySelector('#update-avatar').classNameList.add('popup_opened');
    }

    function handleEditProfileClick() {
        //document.querySelector('#edit-profile').classNameList.add('popup_opened');
    }

    function handleAddPlaceClick() {
        //document.querySelector('#add-card').classNameList.add('popup_opened');
    }

    return (
        <main>
            <section className="profile">
                <div className="profile__avatar-wrapper">
                    <div className="profile__avatar-edit" onClick={handleEditAvatarClick()}></div>
                    <img className="profile__avatar" alt="Аватар пользователя" />
                </div>

                <div className="profile__info">
                    <div className="profile__name-container">
                        <h1 className="profile__name"></h1>

                        <button aria-label="Редактировать профиль" type="button" className="profile__edit-button" onClick={handleEditProfileClick()}></button>
                    </div>

                    <p className="profile__position"></p>
                </div>

                <button type="button" className="profile__add-button" onClick={handleAddPlaceClick()}></button>
            </section>

            <section className="elements">
            </section>
        </main>
    )
}

export default Main;