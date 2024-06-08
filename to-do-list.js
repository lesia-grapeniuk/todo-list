const  button = document.querySelector('.todo-wrapper button');
const input = document.querySelector('.todo-wrapper input');
const list = document.querySelector('.todo-list');
const clearBtn = document.querySelector('.clear-btn');

button.addEventListener('click', () => {
    const  li = document.createElement('li');
    li.className = 'todo-list-item';
    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('delete-btn');
    deleteBtn.innerText = 'Delete';
    li.innerText = input.value;
    list.appendChild(li);
    li.appendChild(deleteBtn);
    input.value = '';

    deleteBtn.addEventListener('click', () => {
        list.removeChild(li);
    })
})


function clearList() {
    clearBtn.addEventListener('click', () => {
        list.innerHTML = '';
    })
}