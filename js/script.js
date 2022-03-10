//Открытие и закрытие попапа, а также очиска формы при закрытии
let popupСlose = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close-button');
let popupHandlerButton = document.querySelector('.popup__handler-button');
let profileInfo = document.querySelector('.profile__info');


function showPopup() {
  popupСlose.classList.remove('popup_opened');
}

function hidePopup() {
  popupСlose.classList.add('popup_opened');
}

editButton.addEventListener('click', hidePopup);
closeButton.addEventListener('click', showPopup);

//Функции замены текст

function addProfile(popupItemNameValue, popupItemProfessionValue) {
  const profileСontainerTemplate = document.querySelector('#profile__container-template').content;
  const profileContainer = document.querySelector('.profile__container').cloneNode(true);

  profileContainer.querySelector('.profile__title').textContent = popupItemNameValue;
  profileContainer.querySelector('.profile__paragraph').textContent = popupItemProfessionValue;
  profileContainer.querySelector('.profile__edit-button').textContent = 234234;

  profileInfo.append(profileContainer);
};


popupHandlerButton.addEventListener('click', function () {
  let popupItemName = document.querySelector('.popup__item-name');
  let popupItemProfession = document.querySelector('.popup__item-profession');

  addProfile(popupItemName.value, popupItemProfession.value);

  popupItemName.value = '';
  popupItemProfession.value = '';
});
