const popup = document.querySelector('.popup');
const buttonAdd = document.querySelector('.button-add');
const buttonSubmit = document.querySelector('.popup__sumbit-button-add');
const overlay = document.querySelector('.popup__overlay')
const inputLink = document.querySelector('.popup__input_link')
const inputComment = document.querySelector('.popup__input_comment')
const elementContainer = document.querySelector('.elements__container')
const popupForm = document.querySelector('.popup__form')

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
  popupForm.reset()
}
popupForm.addEventListener('submit', addCard)