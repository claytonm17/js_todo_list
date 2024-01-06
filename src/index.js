import './styles.css';
import manipulateDOM from "./modules/DOM.js"

const DOM = manipulateDOM

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
    DOM.addListItem(title)
}

const removeItem = (index) => {
    toDoList.splice(index, 1)
}

const readToDoList = () => {
    for (let i = 0; i < toDoList.length; i++) {
        console.log(toDoList[i].task)
        console.log(toDoList[i].isComplete)
    }
}

DOM.initialPageLoad()

addNewItem('Do the dishes', true)
addNewItem('Walk the dog', false)
addNewItem('Laundry', false)