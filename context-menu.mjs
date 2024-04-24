function RightClickContext(options) {
  const items = options.items
  const menu = document.createElement("ul")
  menu.classList.add("right-click-menu")

  items.forEach((item) => {
    const menuItem = document.createElement("li")
    menuItem.textContent = item.label
    menuItem.addEventListener("click", function () {
      item.onClick()
      hide()
    })
    menu.appendChild(menuItem)
  })

  const show = (x, y) => {
    menu.style.left = x + "px"
    menu.style.top = y + "px"
    document.body.appendChild(menu)
  }

  const hide = () => {
    const menuInDom = document.querySelector(".right-click-menu")
    if (menuInDom) document.body.removeChild(menu)
  }

  return {
    show: show,
    hide: hide,
  }
}

const contextMenu = new RightClickContext({
  items: [
    {
      label: "Choose background",
      onClick: () => {
        $block.style.background = "red" //"url()"
      },
    },
  ],
})

$block.addEventListener("contextmenu", function (e) {
  e.preventDefault()
  contextMenu.show(e.clientX, e.clientY)
})

document.addEventListener("click", (e) => {
  contextMenu.hide()
})
