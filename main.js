let draggedTask = null;

function drag(event) {
  draggedTask = event.target;
}

function allowDrop(event) {
  event.preventDefault();
  const targetColumn = event.target.closest(".column");

  if (targetColumn) {
    targetColumn.appendChild(draggedTask);
  }
}

function addTask(event) {
  event.preventDefault();
  const newTaskInput = document.querySelector(".add-task-input");
  const newTaskText = newTaskInput.value.trim();

  if (newTaskText !== "") {
    const todoColumn = document.querySelector(".column:first-child");
    const newTaskElement = document.createElement("div");
    newTaskElement.className = "task";
    newTaskElement.innerHTML = `<span>${newTaskText}</span>  <button class="delete-task-button" onclick="deleteTask(this)"><i class="fa-solid fa-trash"></i></button>`;
    newTaskElement.draggable = true;
    newTaskElement.ondragstart = drag;
    todoColumn.appendChild(newTaskElement);
    newTaskInput.value = ""; 
  }
}

function deleteTask(button) {
  const task = button.closest(".task");
  task.parentNode.removeChild(task);
}



