//Открытие и закрытие попапа, а также очиска формы при закрытии
let popupСlose = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close-button');

let profile = document.querySelector('.profile__container');

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

//Функция замены текста
 function addProfile () {
  profile.insertAdjacentHTML('afterbegin', `
    <h1 class="profile__title">Жак-Ив Кустоqqqq</h1>
    <p class="profile__paragraph">Исследователь океанаqqqq</p>
  `);
}

addProfile ();


