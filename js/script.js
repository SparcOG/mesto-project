//Открытие и закрытие попапа, а также очиска формы при закрытии
let popupСlose = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close-button');

let primer = document.querySelector('.popup__handler-button');

let profileTitle = document.querySelector('.profile__title');
let profileParagraph = document.querySelector('.paragraph');

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

  let popupItemName = document.querySelector('.popup__item-name');
  let popupItemProfession = document.querySelector('.popup__item-profession');

  profileTitle.innerHTML = `
    <h1 class="profile__title">${popupItemName.value}</h1>
  `;


  popupItemName.value = '';
  popupItemProfession.value = '';

  popupСlose.classList.remove('popup_opened');
}

primer.addEventListener('click', addProfile);



