//Add event listener to button to get input value and create task-item

///Selectors
const addTaskBtn = document.getElementById('add-task');
const list = document.getElementById('list');
const inputField = document.getElementById('task-input');
const emptyText = document.getElementById('empty-text');
///reused functions
const isEmpty = () => {
  const listItemsArr = document.querySelectorAll('li');

  if (listItemsArr.length > 0) {
    emptyText.style.display = 'none';
  } else {
    emptyText.style.display = 'block';
  }
};

const addTask = () => {
  let inputValue = inputField.value;
  if (inputValue == '') {
    return;
  }
  let newLI = document.createElement('LI');
  let node = document.createTextNode(inputValue);
  newLI.appendChild(node);
  list.appendChild(newLI);
  isEmpty();
  inputField.value = '';
};

///Event Listeners
addTaskBtn.addEventListener('click', addTask);
document.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    addTask();
  }
});
document.addEventListener('click', (event) => {
  if (
    event.target.nodeName === 'LI' ||
    event.target.parentNode.nodeName === 'LI'
  ) {
    setInterval(() => {
      event.target.remove();
    }, 600);
    event.target.style.textDecoration = 'line-through';
  } else {
    console.log('You clicked something else');
  }
  isEmpty();
});
