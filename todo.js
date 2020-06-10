const todo = document.querySelector(".js-todo");
const todoInput = todo.querySelector("input");
const todoList = document.querySelector(".js-todoList");
const locTodo = 'todos';
let todos = [];

function deleteTodo(e) {
     const del = event.target;
     const li = del.parentNode;
     todoList.removeChild(li);

    if(todoList.length >= 5) todoList.removeChild(li);

     const cleanTodo = todos.filter(function(todo) {
         return todo.id !== parseInt(li.id);
     }
     )
     todos = cleanTodo;
     saveTodo();
}

function saveTodo() {
    localStorage.setItem(locTodo, JSON.stringify(todos));
}

function showTodo(text) {
    const li = document.createElement("li");
    const del = document.createElement("button");
    del.innerText = "✖️";
    del.addEventListener("click",deleteTodo)
    const span = document.createElement("span");
    const newId = todos.length + 1;
    span.innerText = text;
    li.appendChild(del);
    li.appendChild(span);
    li.id = newId;


    todoList.appendChild(li);

    const todoObject = {
        text: text,
        id: newId
    }

    todos.push(todoObject);
    saveTodo();
}


function handleSubmit(e) {
    e.preventDefault();
    const userValue = todoInput.value;
    showTodo(userValue);
    todoInput.value = "";
}

function getTodo() {
    const todos = localStorage.getItem(locTodo);
    if(todos !== null) {
        const parsedTodos = JSON.parse(todos);
        parsedTodos.forEach(function(todo) {
            showTodo(todo.text);
        })
    } 
}
function start() {
    getTodo();
    todo.addEventListener("submit",handleSubmit)
}

start();