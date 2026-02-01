function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");
    li.textContent = taskText;

    let completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";

    completeBtn.onclick = function () {
        li.remove();   
    };

    li.appendChild(completeBtn);
    document.getElementById("taskList").appendChild(li);

    input.value = "";
}

function deleteFirstTask() {
    let list = document.getElementById("taskList");
    if (list.firstChild) {
        list.removeChild(list.firstChild);
    } else {
        alert("No tasks to delete");
    }
}




