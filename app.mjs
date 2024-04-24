import { resizedrag } from "./resizedrag.js"

// ----------------------------------------------

const addNewScreen = () => {
  const $newScreen = document.createElement("div")
  const $main = document.getElementById("main")
  $newScreen.id = "new-screen"
  $main.appendChild($newScreen)

  resizedrag($newScreen)
}

// ----------------------------------------------

const addTextArea = () => {
  const $newTextarea = document.createElement("div")
  const $main = document.getElementById("main")
  $newTextarea.id = "new-textarea"
  $newTextarea.innerHTML = "<textarea>some editable content</textarea>"
  $main.appendChild($newTextarea)

  resizedrag($newTextarea)
}

// ----------------------------------------------

const addButton = () => {
  const $newButton = document.createElement("div")
  const $main = document.getElementById("main")
  $newButton.id = "new-button"
  $newButton.innerHTML = '<button id="submit">submit</button>'
  $main.appendChild($newButton)

  resizedrag($newButton)
}

document.addEventListener("click", (e) => {
  if (e.target.id === "add-textarea") {
    addTextArea()
  }

  if (e.target.id === "add-button") {
    addButton()
  }

  if (e.target.id === "submit") {
    document.getElementById("main").innerHTML = ""
    const el = document.getElementById("screen-title")
    const screen = parseInt(el.dataset.screen)
    el.innerHTML = "Screen " + (screen + 1)
    el.dataset.screen = screen + 1
    addNewScreen()
  }
})

// ----------------------------------------------

addNewScreen()
