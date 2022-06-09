const buttonAddImage = document.querySelector('.button-add');
const popupAddImage = document.querySelector('.popup');
const popupAddImageCloseBtn = popupAddImage.querySelector('.popup__close-button')
const overlay = popupAddImage.querySelector('.popup__overlay')

const openPopup = () => {
  popupAddImage.classList.add('popup_active');
}

const closePopup = () => {
  popupAddImage.classList.remove('popup_active');
}

const closePopupEscape = (evt) => {
  if (evt.key === "Escape"){
    closePopup()
  }
}

buttonAddImage.addEventListener('click', () => {
  openPopup()
  document.addEventListener('keyup', closePopupEscape)
})
popupAddImageCloseBtn.addEventListener('click', () => {
  closePopup()
  document.removeEventListener('keyup', closePopupEscape)
})
overlay.addEventListener('click', () => {
  closePopup()
})

