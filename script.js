document.getElementById('todo-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const input = document.getElementById('input-box');
  const todoText = input.value.trim();
  
  if (todoText !== '') {
    addTodoItem(todoText);
    input.value = '';
  }
});
function addTodoItem(text) {
  const todoList = document.getElementById('todo-list');
  const listItem = document.createElement('li');
  const listItemText = document.createElement('span');
  listItemText.textContent = text;
  const removeItem = document.createElement('button');
  todoList.appendChild(listItem);
  listItem.appendChild(listItemText);
  listItem.appendChild(removeItem);
  removeItem.textContent = 'X';
  removeItem.className = 'remove-button';
  removeItem.addEventListener('click', function(){
    todoList.removeChild(this.parentElement);
  });
}