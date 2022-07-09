const newReference = document.querySelector('a');

newReference.addEventListener('click', function (event) {
   event.preventDefault();
   this.textContent = prompt('Измените ссылку');
})

