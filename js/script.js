//Открытие и закрытие попапа, а также очиска формы при закрытии
let popupСlose = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close-button');
let popupHandlerButton = document.querySelector('.popup__handler-button');
let profileInfo = document.querySelector('.profile__info');


function showPopup() {
  popupСlose.classList.remove('popup_opened');
}


closeButton.addEventListener('click', showPopup);


//Функции замены текст

function addProfile(popupItemNameValue, popupItemProfessionValue) {
  let editButton = document.querySelector('.profile__edit-button');

  const profileContainer = document.createElement('div');
  profileContainer.classList.add('profile__container');

  const profileTitle = document.createElement('h1');
  profileTitle.classList.add('song__artist');
  profileTitle.textContent = popupItemNameValue;

  const profileParagraph = document.createElement('p');
  profileParagraph.classList.add('profile__paragraph');
  profileParagraph.textContent = popupItemProfessionValue;

  const profileEditButton = document.createElement('button');
  profileEditButton.classList.add('profile__edit-button');

  profileContainer.append(profileTitle, profileParagraph, profileEditButton);
  profileInfo.append(profileContainer);

  editButton.addEventListener('click', function (evt) {
    evt.target.classList.toggle('popup_opened');
  });

};


popupHandlerButton.addEventListener('click', function () {
  let popupItemName = document.querySelector('.popup__item-name');
  let popupItemProfession = document.querySelector('.popup__item-profession');

  addProfile(popupItemName.value, popupItemProfession.value);

  popupItemName.value = '';
  popupItemProfession.value = '';
});




function brat() {
  const btns = document.querySelectorAll('.alert-container');

  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function (e) {
      if (e.target.classList.contains('alert-button')) {
        alert(e.target.innerHTML);
      }
    });
  }

  // Add a new button dynamically
  const newBtn = document.createElement('button');
  newBtn.classList.add('alert-button');
  newBtn.innerHTML = 'Button 3';
  const container = document.querySelector('.alert-container');
  container.append(newBtn);

}

brat();
