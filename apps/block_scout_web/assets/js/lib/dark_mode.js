import Cookies from 'js-cookie'

function isDarkMode () {
  // @ts-ignore
  const permanentDarkModeEnabled = document.getElementById('permanent-dark-mode').textContent === 'true'
  // @ts-ignore
  const permanentLightModeEnabled = document.getElementById('permanent-light-mode').textContent === 'true'
  if (permanentLightModeEnabled) {
    return true
  } else if (permanentDarkModeEnabled) {
    return true
  } else {
    // return Cookies.get('chakra-ui-color-mode') === 'dark'
    return true
  }
}

export { isDarkMode }
