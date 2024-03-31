document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('create-task-form');
  const taskList = document.getElementById('tasks');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    const taskInput = document.getElementById('new-task-description');
    const taskDescription = taskInput.value.trim();

    if (taskDescription !== '') {
      addTask(taskDescription);
      taskInput.value = ''; 
    }
  });

  function addTask(description) {
    const taskItem = document.createElement('li');
    taskItem.textContent = description;

    taskList.appendChild(taskItem);
  }
});
