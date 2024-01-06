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

const buildEntry = () => {
    const parent = content

    const form = document.createElement('form')
    form.className = "add-task";
    parent.appendChild(form)

    const inputText = document.createElement('input')
    inputText.type = "text"
    inputText.placeholder = "Enter your task here"
    inputText.className = "input-text"
    form.appendChild(inputText)

    const inputSubmit = document.createElement('input')
    inputSubmit.type = "submit"
    inputSubmit.value = "Add"
    inputSubmit.className = "input-button"
    form.appendChild(inputSubmit)
}

const buildEmptyList = () => {
    const parent = content

    const list = document.createElement('ul')
    list.className = "list-items"
    parent.appendChild(list)
}

const initialPageLoad = () => {
    buildTitle()
    buildEntry()
    buildEmptyList()    
}

const addListItem = (title) => {
    const list = document.querySelector(".list-items")

    const listItem = document.createElement("li")
    listItem.className = "list-item"
    list.appendChild(listItem)

    const itemContents = document.createElement("div")
    itemContents.className = "item"
    listItem.appendChild(itemContents)

        const toggleButton = document.createElement("button")
        toggleButton.className = "toggle"
        itemContents.appendChild(toggleButton)

        const text = document.createElement("p")
        text.textContent = title
        itemContents.appendChild(text)

    const remove = document.createElement("span")
    remove.textContent = "X"
    listItem.appendChild(remove)
}

export default {
    initialPageLoad,
    addListItem,
}