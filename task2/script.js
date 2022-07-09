const consoleLog = document.querySelector('#consoleLog');
const alertFunction = document.querySelector('#alert');
const promptFunction = document.querySelector('#prompt');


consoleLog.addEventListener ('click', () => {
    alert('Служит для вывода информации в консоль')
})

alertFunction.addEventListener ('click', () => {
    alert('Служит для отображения информации пользователям')
})

promptFunction.addEventListener ('click', () => {
    alert('Отображает диалоговое окно с запросом на ввод текста')
})