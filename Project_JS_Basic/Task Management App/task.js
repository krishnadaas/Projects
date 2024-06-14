
// Add task
const collection = document.querySelector('#task-list');
const form = document.querySelector('#task-form');
const input = document.querySelector('#task-input');
function addTask(e){
    e.preventDefault();
    const listNode = document.createElement('li');
    const checkBox = document.createElement('input');
    
    //check Box
    checkBox.type = 'checkbox';
    checkBox.className = 'task-checkbox';
    listNode.appendChild(checkBox);

    // Task 
    const textArea = document.createElement('span'); // for inline content
    textArea.textContent = input.value;
    listNode.appendChild(textArea);

    // Task Value appended into the collection
    collection.appendChild(listNode);
    input.value = ''; // for new task, input textArea should be Blank
}
form.addEventListener('submit',addTask);


// Complete
function completed(e){
    if(e.target && e.target.classList.contains('task-checkbox'))
    {
        const listItem = e.target.parentElement;
        listItem.classList.toggle('completed');
    }
}
collection.addEventListener('change',completed);
