const root = document.getElementById('root')
const url = 'https://jsonplaceholder.typicode.com/todos'

function getTodos() {
    fetch(url)
        .then(res => res.json())
        .then(data => printTodos(data))
}

function printTodos(todos) {
    const list = document.createElement('ul')
    todos.forEach(element => {
        const item = document.createElement('li')
        item.textContent = element.title
        list.append(item)
    })
    root.append(list)
}

getTodos()