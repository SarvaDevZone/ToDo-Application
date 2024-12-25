// Select elements
const taskInput = document.getElementById("task-input");
const todoList = document.getElementById("todo-list");

// Main Function to add a task after clicking the add button
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  // Create a new task list item
  const li = document.createElement("li");

  // Complete button
  const completeCheckBox = document.createElement("input");
  completeCheckBox.type = "checkbox";
  completeCheckBox.onchange = () => markComplete(taskSpan, completeCheckBox);
  li.appendChild(completeCheckBox);

  // Task text
  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;
  li.appendChild(taskSpan);

  // Edit button
  const editButton = document.createElement("button");
  editButton.innerHTML = '<i class="fa fa-edit"></i>';
  editButton.onclick = () => editTask(taskSpan, editButton);
  li.appendChild(editButton);

  // Delete button
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = '<i class="fa fa-trash"></i>';
  deleteButton.onclick = () => deleteTask(li);
  li.appendChild(deleteButton);

  // Add the new task to the list
  todoList.appendChild(li);

  // Clear the input field
  taskInput.value = "";
}

// Function to edit a task
function editTask(taskSpan, editButton) {
  if (editButton.innerHTML === '<i class="fa fa-edit"></i>') {
    const newTaskText = prompt("Edit your task:", taskSpan.textContent);

    if (newTaskText !== null && newTaskText.trim() !== "") {
      taskSpan.textContent = newTaskText.trim();
    }
  } else {
    editButton.innerHTML = '<i class="fa fa-edit"></i>';
  }
}

// Function to mark a task as complete
function markComplete(taskSpan, completeCheckBox) {
  if (completeCheckBox.checked) {
    taskSpan.style.textDecoration = "line-through";
    taskSpan.style.color = "gray";
    // completeCheckBox.textContent = "Undo";
  } else {
    taskSpan.style.textDecoration = "none";
    taskSpan.style.color = "black";
    // completeButton.textContent = "Complete";
  }
}

// Function to delete a task
function deleteTask(taskItem) {
  todoList.removeChild(taskItem);
}
