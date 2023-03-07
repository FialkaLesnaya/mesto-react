function PopupWithForm(props) {
    return (
        <div className={`popup popup_type_${props.name}`} id="${props.name}">
            <div className="popup__container">
                <h2 className="popup__title">{props.title}</h2>
                <button aria-label="Close" className="popup__close" type="button"></button>

                <form className="popup__body" name="${props.name}" noValidate>
                    {props.children}
                </form>
            </div>
        </div>
    )
}

export default PopupWithForm;