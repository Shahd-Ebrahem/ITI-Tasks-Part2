let inputTask = document.querySelector("#todo-input");
let addBtn = document.querySelector("#addBtn");
let list = document.querySelector("#todo-list");
// localStorage.clear();
addBtn.addEventListener("click", function () {
    let newTask = inputTask.value;

    if (newTask === "") return; //prevent input empty tasks

    let arrTasks;
        if (localStorage.getItem("Tasks")) {
            arrTasks = JSON.parse(localStorage.getItem("Tasks"));
        } else {
    arrTasks = [];
}

    arrTasks.push(newTask);
    localStorage.setItem("Tasks", JSON.stringify(arrTasks));

    displayTasks(); //show taskslist after adding
    inputTask.value = ""; //empty input field
});

displayTasks(); //show taskslist when visiting the website

function displayTasks() {

    let arrTasks;
        if (localStorage.getItem("Tasks")) {
            arrTasks = JSON.parse(localStorage.getItem("Tasks"));
        } else {
    arrTasks = [];
        }

    let taskList = "";
    for (let i=0; i<arrTasks.length ; i++) {
        taskList += `
            <li id="listItem" class="d-flex justify-content-between align-items-center mb-2 p-2 border rounded" style="width: 100%;">
                <span class="text-truncate" style="max-width: 85%;">${arrTasks[i]}</span>
                <button class="btn btn-danger btn-sm delBtn" data-index="${i}">Delete</button>
            </li>`;
    }

    list.innerHTML = taskList;

    let delBtns = document.querySelectorAll(".delBtn");
    for (let delTask of delBtns){
        delTask.addEventListener("click", function(e){
            let taskIndex = e.target.getAttribute("data-index");
            arrTasks.splice(taskIndex,1);
            localStorage.setItem("Tasks",JSON.stringify(arrTasks));
            displayTasks();

        });
    }
}

