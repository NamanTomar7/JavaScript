let todos = []; // array to hold todo items
let todoList = document.getElementById("todoList");
let input = document.getElementById("todoInput");
let addBtn = document.getElementById("addBtn");

let savedTodos = localStorage.getItem("todos");
if(savedTodos){
    console.log(savedTodos);
    todos = JSON.parse(savedTodos);
    renderTodos();
}

function renderTodos(){
    todoList.innerHTML = ""; // clear list
    todos.forEach((todo, index) => {
        let li = document.createElement("li");
        li.innerText = todo;

        // Add delete button
        let delBtn = document.createElement("button");
        delBtn.innerText = "❌";
        delBtn.style.marginLeft = "10px";

        delBtn.addEventListener("click", function(){
            deleteTodo(index);
        });

        li.appendChild(delBtn);
        todoList.appendChild(li);
    });
}

addBtn.addEventListener("click", function(){
    let task = input.value.trim();
    if(task){
        todos.push(task);
        input.value = ""; // clear input
        saveAndRender();
    }
});

function deleteTodo(index){
    todos.splice(index,1);
    saveAndRender();
}

function saveAndRender(){
    localStorage.setItem("todos", JSON.stringify(todos));
    renderTodos();
}

