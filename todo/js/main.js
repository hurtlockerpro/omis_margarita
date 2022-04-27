
let todos = [
    { // 0
        title: 'todo 1',
        date: '28.04.2022',
        isDone: true // false
    },
    { // 1
        title: 'todo 2',
        date: '28.04.2022',
        isDone: false // false
    },
    {
        title: 'todo 3',
        date: '28.04.2022',
        isDone: true // false
    },
]

let todoList = document.getElementById('todoList')

function generateTodoItem(todoItem, index){
    let li = document.createElement('li')
    li.innerText = todoItem.title
    li.classList.add('listItem', 'd-flex', 'justify-content-between')

    if (todoItem.isDone == true)
    {
        li.classList.add('is-done')
    }

    let btn = document.createElement('button')
    btn.classList.add('btn', 'btn-danger', 'delete')
    btn.innerText = 'x'
    btn.setAttribute('data-rowid', index)

    li.appendChild(btn)

    return li.outerHTML
}

function showTodoItems () {
    todoList.innerHTML = ''

    for (let index = 0; index < todos.length; index++) {
        todoList.innerHTML += generateTodoItem(todos[index], index)
    }

    getAllButtons()
}

/* step 2 write */

let inputTodo = document.querySelector('#inputTodo')
let btn = document.querySelector('button')

btn.addEventListener('click', event => {
    if (inputTodo.value.toString().trim().length > 3)
    {
        let newTodoItem = {
            title: inputTodo.value.toString(),
            date: new Date().toISOString().replace(/T.*/,'').split('-').reverse().join('.'),
            isDone: false
        }
        console.log(newTodoItem);
        //newTodoItem.author = 'vladimir'
        todos.push(newTodoItem)
        showTodoItems() // v1
        //todoList.innerHTML += generateTodoItem(newTodoItem) // v2

    } else {
        inputTodo.style.border = '1px solid red' 
    }
})

function getAllButtons(){

    let btns = document.querySelectorAll('.delete')
    for (let index = 0; index < btns.length; index++) {
        btns[index].addEventListener('click', event => {
            let rowid = event.target.dataset.rowid
            console.log(rowid);

            todos.splice(rowid, 1)
            showTodoItems()
        })
    }
}

showTodoItems()
