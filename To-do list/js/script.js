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
    for (let task of arrTasks) {
        taskList += `<li>${task}</li>`;
    }

    list.innerHTML = taskList;
}


