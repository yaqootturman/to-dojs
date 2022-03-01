// * Select DOM

const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')

// * add event listener to add todo item to the list
todoButton.addEventListener('click', addTodo)
//! when the page is loaded
document.addEventListener('DOMContentLoaded', getTodoListOnLoad)

// * function to create and add todo
function addTodo(e) {
  //Prevent natural behavior
  e.preventDefault()

  // ? Create todo div => every item is a li div
  const todoDiv = document.createElement('div')
  todoDiv.classList.add('todo')
  todoList.appendChild(todoDiv)

  //? Create list
  const newTodo = document.createElement('li')
  newTodo.innerText = todoInput.value
  newTodo.classList.add('todo-item')
  todoDiv.appendChild(newTodo)

  // ? Save to local
  saveTodoLocalStorage(todoInput.value)
  todoInput.value = ''
}

// ==============================================================

function saveTodoLocalStorage(todo) {
  let todos
  if (localStorage.getItem('todos') === null) {
    todos = []
  } else {
    todos = JSON.parse(localStorage.getItem('todos'))
  }
  todos.push(todo)
  localStorage.setItem('todos', JSON.stringify(todos))
}

// ==============================================================
function getTodoListOnLoad() {
  let todos

  if (localStorage.getItem('todos') === null) {
    todos = []
  } else {
    todos = JSON.parse(localStorage.getItem('todos'))
  }

  todos.forEach(function (todo) {
    // ? Create todo div => every item is a li div
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')
    todoList.appendChild(todoDiv)

    //? Create list
    const newTodo = document.createElement('li')
    newTodo.innerText = todo
    newTodo.classList.add('todo-item')
    todoDiv.appendChild(newTodo)
  })
}
