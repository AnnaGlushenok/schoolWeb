function addDivBlock() {
    // let id = findLastId(".questions");
    let id = findLastId(".block__card");
    console.log("id ", id);
    let div = document.createElement("div")
    div.setAttribute("class", "questions__question question");
    let len = document.querySelector(".block__card").children.length - 2;
    console.log("len ", len);
    div.setAttribute("id", "" + id + len);
    //  document.querySelector(".block__card").children.length - 2;

    return div;
}

function addInput() {
    let input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("class", "question__text");
    input.setAttribute("placeholder", "Ответ");
    return input;
}

function addButton() {
    let button = document.createElement("button");
    button.setAttribute("class", "question__add_btn");
    button.setAttribute("onclick", "deleteAnswer()");

    let img = document.createElement("img");
    img.setAttribute("class", "questions__img");
    img.setAttribute("src", "../../images/cross_teacher.svg");
    img.setAttribute("alt", "plus");
    button.appendChild(img);

    return button;
}

function findLastId(className) {
    let el = document.querySelector(className);
    if (!el)
        return 0;
    let children = el.childNodes;
    let max = -1;
    for (let i = 0; i < children.length; i++) {
        if (max < children[i].id)
            max = children[i].id
    }
    return +max;
}

function deleteAnswer() {
    document.getElementById(event.target.parentNode.parentNode.id).remove();
}

function addQuestion() {
    let div = addDivBlock();
    let input = addInput()
    let button = addButton();

    div.appendChild(input);
    div.appendChild(button);

    let id = event.target.parentNode.parentNode.parentNode.id;
    let parent = document.getElementById(id).children[1];
    let d = document.getElementById(id);
    d.insertBefore(div, parent);
}

function addCard() {
    let div = document.createElement("div");
    div.setAttribute("class", "block__card card");
    div.setAttribute("id", findLastId(".block") + 1);

    let questionDiv = document.createElement("div");
    questionDiv.setAttribute("class", "card__question_title question_title");

    let input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("class", "question_title__question");
    input.setAttribute("name", "question");
    input.setAttribute("placeholder", "Вопрос");

    let select = document.createElement("select");
    select.setAttribute("name", "question_types");
    select.setAttribute("class", "question_title__combobox");
    select.setAttribute("id", "question_type");

    let values = ["1 выбор", "Чек боксы", "Самому написать"];
    for (let i = 0; i < values.length; i++) {
        let option = document.createElement("option");
        option.innerHTML = values[i]
        select.appendChild(option);
    }

    let buttonsDiv = document.createElement("div");
    buttonsDiv.setAttribute("class", "card__questions questions");

    let button = document.createElement("button");
    button.setAttribute("class", "questions__add_btn");
    button.setAttribute("onclick", "addQuestion()");

    let img = document.createElement("img");
    img.setAttribute("class", "questions__img");
    img.setAttribute("src", "../../images/plus.svg");
    img.setAttribute("alt", "plus");

    questionDiv.appendChild(input);
    questionDiv.appendChild(select);
    button.appendChild(img);
    buttonsDiv.appendChild(button);

    div.appendChild(questionDiv);
    div.appendChild(buttonsDiv);

    let parent = document.getElementsByClassName("block__button")[0];
    document.getElementsByClassName("block")[0].insertBefore(div, parent);
}

function save() {
    let children = document.querySelector(".page").children;
    let data = [];
    let ids = [];
    for (let i = 0; i < children.length; i++) {
        data[i] = document.getElementsByClassName("block__content")[0].textContent;
        ids[i] = children[i].id;
    }
    console.log(data);
    let json = {
        ids: ids,
        content: data
    }
    console.log(json);
    fetch('/api/user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(json)
    }).then(function (response) {
        console.log("Данные успешно отправлены на сервер");
    }).catch(function (error) {
        console.log("Ошибка при отправке данных на сервер");
    });
}