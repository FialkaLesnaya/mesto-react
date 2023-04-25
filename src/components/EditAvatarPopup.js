import { useContext, useEffect, useState } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "contexts/CurrentUserContext";

function EditAvatarPopup(props) {
  return (
    <PopupWithForm
      title="Обновить аватар"
      name="update-avatar"
      isOpen={props.isOpen}
      onClose={props.onClose}
      buttonText="Сохранить"
    >
      <label className="popup__label">
        <input
          required
          placeholder="Ссылка на аватар"
          type="url"
          className="popup__input"
          name="link"
          id="avatar-link-input"
        />

        <span className="popup__input-error avatar-link-input-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
