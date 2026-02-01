const form = document.getElementById("taskForm");
const titleInput = document.getElementById("title");
const descInput = document.getElementById("description");
const dateInput = document.getElementById("dueDate");
const errorMsg = document.getElementById("errorMsg");
const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const title = titleInput.value.trim();
  const description = descInput.value.trim();
  const dueDate = dateInput.value;

  if (title === "") {
    errorMsg.textContent = "Task title cannot be empty.";
    return;
  }

  const today = new Date();
  today.setHours(0,0,0,0);
  const selectedDate = new Date(dueDate);

  if (!dueDate || selectedDate < today) {
    errorMsg.textContent = "Due date cannot be in the past.";
    return;
  }

  errorMsg.textContent = "";

  const task = {
    id: Date.now(),
    title,
    description,
    dueDate,
    completed: false
  };

  tasks.push(task);
  saveTasks();
  renderTasks();
  form.reset();
});

function renderTasks() {
  taskList.innerHTML = "";

  tasks.forEach(task => {
    const taskDiv = document.createElement("div");
    taskDiv.className = "task" + (task.completed ? " completed" : "");

    taskDiv.innerHTML = `
      <h3>${task.title}</h3>
      <p>${task.description || "No description"}</p>
      <small>Due: ${task.dueDate}</small>
      <div class="task-buttons">
        <button onclick="toggleComplete(${task.id})">
          ${task.completed ? "Undo" : "Complete"}
        </button>
        <button onclick="editTask(${task.id})">Edit</button>
        <button onclick="deleteTask(${task.id})">Delete</button>
      </div>
    `;

    taskList.appendChild(taskDiv);
  });
}

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  saveTasks();
  renderTasks();
}

function toggleComplete(id) {
  const task = tasks.find(task => task.id === id);
  task.completed = !task.completed;
  saveTasks();
  renderTasks();
}

function editTask(id) {
  const task = tasks.find(task => task.id === id);
  if (!task) return;

  const newTitle = prompt("Edit title:", task.title);
  if (!newTitle || newTitle.trim() === "") return;

  const newDesc = prompt("Edit description:", task.description);
  const newDate = prompt("Edit due date (YYYY-MM-DD):", task.dueDate);

  const today = new Date();
  today.setHours(0,0,0,0);
  const selectedDate = new Date(newDate);

  if (!newDate || selectedDate < today) {
    alert("Invalid date. Cannot be in the past.");
    return;
  }

  task.title = newTitle.trim();
  task.description = newDesc.trim();
  task.dueDate = newDate;

  saveTasks();
  renderTasks();
}

renderTasks();
