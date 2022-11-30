const sitenav = document.querySelector('.sitenav')
const toggleBtn = document.querySelector('.toggele-btn')
const toggleBtnImg = document.querySelector('.toggele-btn img')

toggleBtn.addEventListener('click', () => {
  sitenav.classList.toggle('open')

  if (sitenav.classList.contains('open')) {
    toggleBtnImg.src = '../images/close-icon.svg'
  } else {
    toggleBtnImg.src = '../images/hamburger-icon.svg'
  }
})