import "./style.css";
// import viteLogo from "/vite.svg";
// import { setupCounter } from './counter.js'

const todos = [];

const list = document.getElementById("list");
const form = document.querySelector("form");
const input = document.getElementById("todo-input");

const listItemTemplate = document.getElementById("list-item-template");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  todos.push({
    id: 1,
    value: input.value,
    is_writable: false,
    commpleted: false,
  });

  input.value = "";
  input.focus();
  console.log(todos);
  render();
});

const render = () => {
  const todosFragment = new DocumentFragment();

  list.innerHTML = "";
  todos.forEach((todo) => {
    const item = listItemTemplate.content.cloneNode(true);
    item.querySelector(".content").innerText = `${todo.value}`;
    todosFragment.append(item);
  });

  list.append(todosFragment);
};
