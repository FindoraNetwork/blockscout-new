import Cookies from 'js-cookie'
// @ts-ignore
const darkModeChangerEl = document.getElementsByClassName('dark-mode-changer')[0]
Cookies.set('chakra-ui-color-mode', 'dark')


// darkModeChangerEl && darkModeChangerEl.addEventListener('click', function () {
//   if (Cookies.get('chakra-ui-color-mode') === 'dark') {
//     Cookies.set('chakra-ui-color-mode', 'dark')
//   } else {
//     Cookies.set('chakra-ui-color-mode', 'dark')
//   }
//   document.location.reload()
// })
