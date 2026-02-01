const STORAGE_KEY = "training_tasks";

export const loadTasks = () =>
  JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

export const saveTasks = (tasks) =>
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
