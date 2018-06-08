/* global $ */

const cenafy = () => {
  setTimeout(() => {
    window.location.href = 'https://davidbrownman.com/instantcena/'
  }, 3000)
}

$(document).ready(() => {
  var chance = Math.floor(Math.random() * 100)
  if (chance === 69) {
    cenafy()
  }
})
