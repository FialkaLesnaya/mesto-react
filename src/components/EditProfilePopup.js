import PopupWithForm from "./PopupWithForm";

function EditProfilePopup(props) {
  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="edit-profile"
      isOpen={props.isOpen}
      onClose={props.onClose}
      buttonText="Сохранить"
    >
      <label className="popup__label">
        <input
          required
          placeholder="Введите имя"
          type="text"
          className="popup__input"
          id="name-input"
          name="name"
          minLength={2}
          maxLength={40}
        />

        <span className="popup__input-error name-input-error"></span>
      </label>

      <label className="popup__label">
        <input
          required
          placeholder="Введите ваш вид деятельности"
          type="text"
          className="popup__input"
          id="job-input"
          name="job"
          minLength={2}
          maxLength={200}
        />

        <span className="popup__input-error job-input-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
