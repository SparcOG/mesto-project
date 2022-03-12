//Открытие и закрытие попапа, а также очиска формы при закрытии
const closeButton = document.querySelector('.popup__close-button');
const popupHandlerButton = document.querySelector('.popup__handler-button');
const profileInfo = document.querySelector('.profile__info');
const popupСlose = document.querySelector('.popup');
const editButton = document.querySelector('.profile__container');

function showPopup() {
  popupСlose.classList.remove('popup_opened');
}
  closeButton.addEventListener('click', showPopup);


editButton.addEventListener('click', function (e) {
  const popupItemName = document.querySelector('.popup__item-name');
  const popupItemProfession = document.querySelector('.popup__item-profession');
    popupItemName.value = 'Жак-Ив Кусто';
    popupItemProfession.value = 'Исследователь океана';

  if (e.target.classList.contains('profile__edit-button')) {
    popupСlose.classList.add('popup_opened');
  }
});

//Функции замены текст
function addProfile(popupItemNameValue, popupItemProfessionValue) {

  const profileContainer = document.querySelector('.profile__container');

  const profileTitleRemove = document.querySelector('.profile__title');
  const profileParagraphRemove = document.querySelector('.profile__paragraph');
  const profileEditButtonRemove = document.querySelector('.profile__edit-button');

  const profileTitle = document.createElement('h1');
    profileTitle.classList.add('profile__title');
    profileTitle.textContent = popupItemNameValue;

  const profileParagraph = document.createElement('p');
    profileParagraph.classList.add('profile__paragraph');
    profileParagraph.textContent = popupItemProfessionValue;

  const profileEditButton = document.createElement('button');
    profileEditButton.classList.add('profile__edit-button');

  profileContainer.append(profileTitle, profileParagraph);
  profileContainer.append(profileEditButton);

  popupСlose.classList.remove('popup_opened');

  profileTitleRemove.remove();
  profileParagraphRemove.remove();
  profileEditButtonRemove.remove();
};

popupHandlerButton.addEventListener('click', function () {
  const popupItemName = document.querySelector('.popup__item-name');
  const popupItemProfession = document.querySelector('.popup__item-profession');

  addProfile(popupItemName.value, popupItemProfession.value);

  popupItemName.value = '';
  popupItemProfession.value = '';
});

//






