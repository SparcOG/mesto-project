//Открытие и закрытие попапа, а также очиска формы при закрытии
let popupСlose = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close-button');

function showPopup() {
  popupСlose.classList.remove('popup_opened');
}

function hidePopup() {
  let popupItemName = document.querySelector('.popup__item-name');
  let popupItemProfession = document.querySelector('.popup__item-profession');

  popupItemName.value = 'Жак-Ив Кусто';
  popupItemProfession.value = 'Исследователь океана';

  popupСlose.classList.add('popup_opened');
}

editButton.addEventListener('click', hidePopup);
closeButton.addEventListener('click', showPopup);


