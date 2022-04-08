document.querySelector(".card__email__button").addEventListener('click', acceptEmailInput);
function isPossiblyValidEmail(txt) {
  return txt.length > 5 && txt.indexOf('@')>0;
}

function acceptEmailInput() {
  const email = document.querySelector('.card__email__input').value
  if (isPossiblyValidEmail(email)){
    return
  }else {
    document.querySelector('.card__email__input').classList.add('error')
  }
  console.log(`${email}`)
}
