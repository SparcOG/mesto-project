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
  const profileContainer = document.createElement('div');
  profileContainer.classList.add('profile__container');

  const profileTitle = document.createElement('h1');
  profileTitle.classList.add('song__artist');
  profileTitle.textContent = popupItemNameValue;

  const profileParagraph = document.createElement('p');
  profileParagraph.classList.add('profile__paragraph');
  profileParagraph.textContent = popupItemNameValue;

  const profileEditButton = document.createElement('button');
  profileEditButton.classList.add('profile__edit-button');

  profileContainer.append(profileTitle, profileParagraph, profileEditButton);
  profileInfo.append(profileContainer);
};


popupHandlerButton.addEventListener('click', function () {
  let popupItemName = document.querySelector('.popup__item-name');
  let popupItemProfession = document.querySelector('.popup__item-profession');

  addProfile(popupItemName.value, popupItemProfession.value);

  popupItemName.value = '';
  popupItemProfession.value = '';
});
