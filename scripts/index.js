const popup = document.querySelector('.popup');
const buttonAdd = document.querySelector('.button-add');
const buttonSubmit = document.querySelector('.popup__sumbit-button-add');
const overlay = document.querySelector('.popup__overlay')
const inputLink = document.querySelector('.popup__input_link')
const inputComment = document.querySelector('.popup__input_comment')

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