//Открытие и закрытие попапа, а также очиска формы при закрытии
let popupСlose = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close-button');
let popupHandlerButton = document.querySelector('.popup__handler-button');

let profileContainer = document.querySelector('.profile__container');

function showPopup() {
  popupСlose.classList.remove('popup_opened');
}

function hidePopup() {
  popupСlose.classList.add('popup_opened');
}

editButton.addEventListener('click', hidePopup);
closeButton.addEventListener('click', showPopup);

//Функция замены текст

 function addProfile () {
  const profileTitle = document.createElement('h1');
    profileTitle.classList.add('profile__title');
    profileTitle.textContent = popupItemName.value;
  const profileParagraph = document.createElement('p');
    profileParagraph.classList.add('profile__paragraph');
    profileParagraph.textContent = popupItemName.value;
  const profileEditButton = document.createElement('button');
    profileEditButton.classList.add('profile__edit-button');

  profileContainer.append(profileTitle, profileParagraph, profileEditButton);

  let popupItemName = document.querySelector('.popup__item-name');
  let popupItemProfession = document.querySelector('.popup__item-profession');

  popupItemName.value = '';
  popupItemProfession.value = '';

  popupСlose.classList.remove('popup_opened');
}

popupHandlerButton.addEventListener('click', addProfile);
