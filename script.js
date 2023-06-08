// Get all the items with the class 'item'
const items = document.querySelectorAll('.item');

// Get the drop container with the id 'container2'
const dropContainer = document.getElementById('container2');

// Get the success message element with the class 'success-message'
const successMessage = document.querySelector('.success-message');

// Get the reset button with the id 'reset-btn'
const resetButton = document.getElementById('reset-btn');

// Variable to keep track of the dragged item
let draggedItem = null;

// Event listeners for drag events
items.forEach(item => {
  // Add dragstart and dragend event listeners to each item
  item.addEventListener('dragstart', dragStart);
  item.addEventListener('dragend', dragEnd);
});

// Add dragover, dragenter, dragleave, and drop event listeners to the drop container
dropContainer.addEventListener('dragover', dragOver);
dropContainer.addEventListener('dragenter', dragEnter);
dropContainer.addEventListener('dragleave', dragLeave);
dropContainer.addEventListener('drop', drop);

// Add click event listener to the reset button
resetButton.addEventListener('click', reset);

// Drag start event
function dragStart() {
  draggedItem = this;
  draggedItem.style.backgroundColor = 'white'; // Set background color to white
  setTimeout(() => this.classList.add('dragging'), 0);
}

// Drag end event
function dragEnd() {
  draggedItem.classList.remove('dragging');
  draggedItem.style.backgroundColor = ''; // Reset background color
  draggedItem = null;
}

// Drag over event
function dragOver(e) {
  e.preventDefault();
}

// Drag enter event
function dragEnter(e) {
  e.preventDefault();
  this.classList.add('drag-over');
}

// Drag leave event
function dragLeave() {
  this.classList.remove('drag-over');
}

// Drop event
function drop() {
  this.classList.remove('drag-over');
  const itemName = draggedItem.textContent;
  this.appendChild(draggedItem);
  successMessage.style.display = 'block';
  successMessage.textContent = `${itemName} is dropped in container-2`;
}

// Reset button click event
function reset() {
  dropContainer.innerHTML = '<center><h2>Container-2</h2><center>'; // Reset the content of drop container
  successMessage.style.display = 'none'; // Hide the success message
  const container1 = document.getElementById('container1');
  items.forEach(item => container1.appendChild(item)); // Move all items back to container1
}
