const form = document.querySelector('form');
const todoInput = document.querySelector('#todo-input');
const addButton = document.querySelector('#todo-button');
const todoList = document.querySelector('#todo-list');

let todos = [
    {
        id: 1,
        taskname:'task1'
    }
    ,{
        id: 2,
        taskname:'task2'
    }
];
    

function renderTodo(){

    todoList.innerHTML = '';

    todos.forEach((todo)=>{
        const todoItem = document.createElement("li");
        const todoText = document.createElement("span");
        const DeleteButton = document.createElement("button");

        todoText.textContent = todo.taskname;
        DeleteButton.textContent = "Delete";
        todoItem.appendChild(todoText);
        todoText.appendChild(DeleteButton);
        todoList.appendChild(todoItem);
    }
)

}
form.addEventListener("submit", (event) =>{
    event.preventDefault();
    
    //addtodo():
});