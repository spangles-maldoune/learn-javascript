//Есть 3 input.Выводить в textarea содержимое всех полей ввода через запятую.Использовать setInterval.

function inputListen() {
    var inputs = document.querySelectorAll('.inputValue');
    var textarea = document.querySelector('.textArea');
    var tempCont = '';
    console.log(inputs)
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value) {
            tempCont += inputs[i].value + ', ';
        }
    }
    tempCont = tempCont.trim();
    textarea.textContent = tempCont.charAt(tempCont.length - 1) === ',' ?
        tempCont.substr(0, tempCont.length - 1) : tempCont
}
