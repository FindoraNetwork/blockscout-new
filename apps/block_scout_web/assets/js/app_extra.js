import { isDarkMode } from './lib/dark_mode'

function applyDarkMode() {
  if (isDarkMode()) {
    document.body.className += ' ' + 'dark-theme-applied'
    document.body.style.backgroundColor = '#131313'
  }
}
window.onload = applyDarkMode()

if (isDarkMode()) {
  if (document.getElementById('top-navbar')) {
    document.getElementById('top-navbar').style.backgroundColor = '#212121'
  }
  if (document.getElementById('navbar-logo')) {
    // document.getElementById('navbar-logo').style.filter = 'brightness(0) invert(1)'
  }
  const modeChanger = document.getElementById('dark-mode-changer')
  if (modeChanger) {
    modeChanger.className += ' ' + 'dark-mode-changer--dark'
  }

  const search = document.getElementById('main-search-autocomplete')
  const searchMobile = document.getElementById('main-search-autocomplete-mobile')
  if (search && search.style) {
    search.style.backgroundColor = '#1A1A1A'
    search.style.borderColor = '#1A1A1A'
  }
  if (searchMobile && searchMobile.style) {
    searchMobile.style.backgroundColor = '#1A1A1A'
    searchMobile.style.borderColor = '#1A1A1A'
  }
}
