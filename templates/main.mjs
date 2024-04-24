import { html } from "../utils.mjs"

export const Main = ({ state }) => {
  return html`<div>
    <p>
      <span>Counter</span>
      <span>${state.counter}</span>
    </p>
    <button data-action="increment">Increment</button>
    <button data-action="decrement">Decrement</button>
  </div>`
}
