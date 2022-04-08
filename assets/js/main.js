document.querySelector(".card__email__button").addEventListener('click', acceptEmailInput);
function isPossiblyValidEmail(txt) {
  return txt.length > 5 && txt.indexOf('@')>0;
}

function acceptEmailInput() {
  const email = document.querySelector('.card__email__input').value
  if (isPossiblyValidEmail(email)){
    alert(`Thank you for signing up using ${email}!`)
  }else {
    document.querySelector('.card__email__input--error').classList.add('visible');
    document.querySelector('.card__email__input--error').classList.remove('hidden')
    document.querySelector('.card__email__input--error__text').classList.remove('hidden')
    document.querySelector('card__email__input--error__text').classList.add('visible')
   
  }
  console.log(`${email}`)
}
