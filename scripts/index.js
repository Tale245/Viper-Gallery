const popup = document.querySelector('.popup');
const buttonAdd = document.querySelector('.button-add');
const buttonSubmit = document.querySelector('.button-submit');
const buttonShow = document.querySelector('.button-show');
const overlay = document.querySelector('.popup__overlay')
const inputLink = document.querySelector('.popup__input_link')
const inputComment = document.querySelector('.popup__input_comment')
const elementContainer = document.querySelector('.elements__container')
const newsCardsContainer = document.querySelector('.cards__container')
const popupForm = document.querySelector('.popup__form')
const popupImage = document.querySelector('.popup__image')

const openPopup = () => {
  popup.classList.add('popup_active');
  document.addEventListener('keyup', closePopupEscape)
}
const closePopup = () => {
  popup.classList.remove('popup_active')
  document.removeEventListener('keyup', closePopupEscape)
}
const closePopupEscape = (event) => {
  if (event.key === "Escape"){
    closePopup()
  }
}
buttonAdd.addEventListener('click', () => {
  openPopup()
})
overlay.addEventListener('click', () => {
  closePopup()
})

const showCard = (evt) => {
  evt.preventDefault();
  popupImage.src = inputLink.value;
  popupImage.alt = inputComment.value;
}
buttonShow.addEventListener('click', showCard)


const copyCard = () => {
  const cardTemplate =  document.querySelector('#template-card').content
  const cardElement = cardTemplate.querySelector('.template-card__container').cloneNode(true);
  const templateImage = cardElement.querySelector('.card__image')

  templateImage.src = inputLink.value;
  templateImage.alt = inputComment.value;
  return cardElement
}
const createCard = () => {
 const cardItem = copyCard();
 elementContainer.prepend(cardItem)
}
function addCard (evt) {
  evt.preventDefault();
  createCard()
  closePopup()
  popupImage.src = 'https://images.unsplash.com/photo-1463438690606-f6778b8c1d10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  popupForm.reset()
}
popupForm.addEventListener('submit', addCard)