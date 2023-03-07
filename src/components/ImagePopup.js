function ImagePopup() {
    return (
        <div className="popup popup_image-overlay" id="image-details">
            <div className="popup__image-container">
                <button aria-label="Close" className="popup__close" type="button"></button>

                <img className="popup__image" src="/" />

                <p className="popup__subtitle"></p>
            </div>
        </div>
    )
}

export default ImagePopup;