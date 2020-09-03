// GET TASKS FROM INPUT

function getTodos() {
    var todos = new Array;
    var todosstr = localStorage.getItem('todo');
    if (todosstr !== null) {
        todos = JSON.parse(todosstr);
    }
    return todos;
}

// ADD TASK TO THE TODOS ARRAY

function add() {
    var task = document.getElementById('task').value;
    var todos = getTodos();
    todos.push(task);
    localStorage.setItem('todo', JSON.stringify(todos));
    document.getElementById('task').value = "";
    show();

    return false;
}

// PERM DISPLAYS TASK ON SCREEN

function show() {
    var todos = getTodos();
    var html = '<ul>';
    for (var i = 0; i < todos.length; i++) {
        html += '<li>' + todos[i] + '<button class="remove" id=""' + i + '">x</button></li>';
    };
    html += '<ul>';
    document.getElementById('todos').innerHTML = html;
}

document.getElementById('add').addEventListener('click', add);
show();

// REMOVE ITEMS FROM THE LIST

function remove() {
    var id = this.getAttribute('id"');
    var todos = getTodos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
    show();

    return false;
}

// TELLS BROWSER TO DISPLAY LIST AFTER REMOVAL

var buttons = document.getElementsByClassName('remove');
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', remove);
};