const newForm = document.querySelector('input');
const newParagraph = document.querySelector('#duplicateField');
const newButton = document.querySelector('button');

newForm.addEventListener('keydown', function (event) {
    newParagraph.textContent = this.value;
})

newButton.addEventListener('click', function (event) {
  event.preventDefault();
  console.log(newForm.value);
  newForm.value = '';
  newParagraph.textContent = '';
})