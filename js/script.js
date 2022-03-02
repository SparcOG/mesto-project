//Открытие и закрытие попапа, а также очиска формы при закрытии

let popupСlose = document.querySelector('.profile__edit-button');

function hidePopup() {
    if (true) {
  popupСlose.classList.add('popup_opened');
    } else {
      popupСlose.classList.remove('popup_opened');
    };
}

popupСlose.addEventListener('click', hidePopup);




