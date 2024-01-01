import './styles.css';

class ToDoItem {
    constructor(task, isComplete) {
        this.task = task;
        this.isComplete = isComplete;
    }
}

const toDoList = [];

const addNewItem = (title, isComplete) => {
    const newItem = new ToDoItem(title, isComplete)
    toDoList.push(newItem);
}

const removeItem = (index) => {
    toDoList.splice(index, 1)
}

addNewItem('Do the dishes', true)
addNewItem('Walk the dog', false)
addNewItem('Laundry', false)

const readToDoList = () => {
    for (let i = 0; i < toDoList.length; i++) {
        console.log(toDoList[i].task)
        console.log(toDoList[i].isComplete)
    }
}

readToDoList()

// DOM creation
// 
const content = document.querySelector("#content");

const buildTitle = () => {
    const parent = content
    
    const titleContainer = document.createElement("div")
    titleContainer.className = "title"
    parent.appendChild(titleContainer)

    const titleText = document.createElement("h1")
    titleText.textContent = "To-Do List"
    titleContainer.appendChild(titleText)

    const titleSVG = document.createElement("img")
    titleSVG.src = "../src/images/main-logo.svg"
    titleSVG.alt = "Main Logo of a Checkmark"
    titleSVG.className = "main-logo"
    titleContainer.appendChild(titleSVG)
}

buildTitle()