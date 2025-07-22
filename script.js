// script.js

// Elementos
const taskInput = document.getElementById('new-task');
const addTaskBtn = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

// Cargar tareas del LocalStorage
document.addEventListener('DOMContentLoaded', loadTasks);

// Agregar tarea
addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    addTask(taskText);
    saveTask(taskText);
    taskInput.value = '';
  }
});

// Función para agregar tarea en el DOM
function addTask(text) {
  const li = document.createElement('li');

  const span = document.createElement('span');
  span.className = 'task-text';
  span.textContent = text;

  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'material-icons delete-btn';
  deleteBtn.textContent = 'delete';
  deleteBtn.addEventListener('click', () => {
    li.remove();
    deleteTask(text);
  });

  li.appendChild(span);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);
}

// Guardar tarea en LocalStorage
function saveTask(text) {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.push(text);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Cargar tareas guardadas
function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.forEach(task => addTask(task));
}

// Eliminar tarea de LocalStorage
function deleteTask(text) {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks = tasks.filter(task => task !== text);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
