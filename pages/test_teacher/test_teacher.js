function addDivBlock() {
    let id = findLastId(".questions");
    let div = document.createElement("div")
    div.setAttribute("class", "questions__question question");
    div.setAttribute("id", (id + 1));

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

    let parent = document.getElementsByClassName("questions__add_btn")[0];
    document.getElementsByClassName("questions")[0].insertBefore(div, parent);
}