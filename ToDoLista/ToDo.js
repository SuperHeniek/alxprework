const todoForm = document.querySelector('#form');
const todoInput = document.querySelector('#todoItem');
const todoList = document.querySelector('#todoList');
const clearTodos = document.querySelector('#clearTodos');

const validateForm = () => {
  return todoInput.value.length > 2;
}

const addTodo = (event) => {
  event.preventDefault();

  const isValid = validateForm();
  if(!isValid) return;

  todoList.innerHTML = todoList.innerHTML + `
    <li>
      <label>
        <input type="checkbox">
        ${todoInput.value}
      </label>
    </li>
  `

  todoInput.value = '';
}

const clearTodo = (event) => {
  event.preventDefault();

  const allTodoInputs = todoList.querySelectorAll('input');

  // 1. przerobic tego forEach na funkcje filter i forEach :)

  // allTodoInputs.forEach(todoInput => {
  //   if(todoInput.checked) {
  //     todoInput.parentElement.parentElement.remove();
  //   }
  // })

  [...allTodoInputs]
    .filter(todoInput => todoInput.checked)
    .forEach(filteredTodoInput => filteredTodoInput.parentElement.parentElement.remove())
}

todoForm.addEventListener('submit', addTodo)
clearTodos.addEventListener('click', clearTodo)