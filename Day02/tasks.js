import { loadTasks, saveTasks } from "./storage.js";

let tasks = loadTasks();

export const getTasks = () => tasks;

export const addTask = (title, dueDate) => {
  const task = {
    id: Date.now(),
    title,
    dueDate,
    completed: false
  };

  tasks = [...tasks, task];
  saveTasks(tasks);
};

export const deleteTask = (id) => {
  tasks = tasks.filter(task => task.id !== id);
  saveTasks(tasks);
};

export const toggleTask = (id) => {
  tasks = tasks.map(task =>
    task.id === id ? { ...task, completed: !task.completed } : task
  );
  saveTasks(tasks);
};

export const getCompletedTasks = () =>
  tasks.filter(task => task.completed);

export const getOverdueTasks = () => {
  const today = new Date().toISOString().split("T")[0];
  return tasks.filter(task => !task.completed && task.dueDate < today);
};
