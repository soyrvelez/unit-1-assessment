document.addEventListener("DOMContentLoaded", function () {
  const plusButton = document.querySelector('#plus');
  const minusButton = document.querySelector('#minus');
  const plusAlphaButton = document.querySelector('#plus-alpha');
  const minusAlphaButton = document.querySelector('#minus-alpha');
  const userInput = document.querySelector('#user-input');
  const userInputAlpha = document.querySelector('#user-input-alpha');
  const countField = document.querySelector('#count');
  const alphaField = document.querySelector('#current-alpha');
  const alphabet = ["a","b","c","d","e","f","g","h","i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  plusButton.addEventListener('click', function (e) {
    countField.textContent = Number(countField.textContent) + Number(userInput.value);
    updateColor();
  });

  minusButton.addEventListener('click', function (e) {
    countField.textContent = Number(countField.textContent) - Number(userInput.value);
    updateColor();
  });

  plusAlphaButton.addEventListener('click', function (e) {
    alphaField.textContent = alphabet[alphabet.indexOf(alphaField.textContent.toLowerCase()) + Number(userInputAlpha.value)].toUpperCase();
  });

  minusAlphaButton.addEventListener('click', function (e) {
    alphaField.textContent = alphabet[alphabet.indexOf(alphaField.textContent.toLowerCase()) - Number(userInputAlpha.value)].toUpperCase();
  });


  function updateColor(){
    if (Number(countField.textContent) < 0) {
      countField.style.color = 'red';
    } else {
      countField.style.color = 'black';
    }
  }

});
