function check() {
    let buttons = document.getElementsByName('answer');
    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].checked) {
            alert('Выбран ' + i + ' radiobutton');
        }
    }
}