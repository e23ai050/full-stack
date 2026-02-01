import { getTasks, addTask, deleteTask, toggleTask, getCompletedTasks, getOverdueTasks } from "./tasks.js";

const taskInput = document.getElementById("taskInput");
const dateInput = document.getElementById("dateInput");
const taskList = document.getElementById("taskList");
const addBtn = document.getElementById("addBtn");
const filterBtns = document.querySelectorAll(".filters button");

const today = () => new Date().toISOString().split("T")[0];

const render = (tasks) => {
  taskList.innerHTML = tasks.map(task => `
    <li class="${task.completed ? "completed" : ""} ${!task.completed && task.dueDate < today() ? "overdue" : ""}">
      <span>${task.title} (${task.dueDate})</span>
      <div class="task-actions">
        <button data-action="toggle" data-id="${task.id}">✔</button>
        <button data-action="delete" data-id="${task.id}">❌</button>
      </div>
    </li>
  `).join("");

  taskList.querySelectorAll("button").forEach(btn => {
    btn.onclick = () => {
      const id = Number(btn.dataset.id);
      btn.dataset.action === "toggle" ? toggleTask(id) : deleteTask(id);
      render(getTasks());
    };
  });
};

addBtn.onclick = () => {
  if (!taskInput.value || !dateInput.value) return;
  addTask(taskInput.value, dateInput.value);
  taskInput.value = dateInput.value = "";
  render(getTasks());
};

filterBtns.forEach(btn => btn.onclick = () => {
  const filter = btn.dataset.filter;
  render(filter === "completed" ? getCompletedTasks() : filter === "overdue" ? getOverdueTasks() : getTasks());
});


render(getTasks());

