document.addEventListener("DOMContentLoaded", function () {
  const plusButton = document.querySelector('#plus');
  const minusButton = document.querySelector('#minus');
  const userInput = document.querySelector('#user-input');
  const countField = document.querySelector('#count');

  plusButton.addEventListener('click', function (e) {
    countField.textContent = Number(countField.textContent) + Number(userInput.value);
    updateColor()
  });

  minusButton.addEventListener('click', function (e) {
    countField.textContent = Number(countField.textContent) - Number(userInput.value);
    updateColor()
  });

  function updateColor(){
    if (Number(countField.textContent) < 0) {
      countField.style.color = 'red';
    } else {
      countField.style.color = 'black';
    }
  }

});
