/*
Class TODO
definisce lo standard di un nuovo todo
*/

class Todo {
  title;
  done;

  constructor(_title) {
    this.title = _title;
    this.done = false;
  }
}

/*
Class AppTodo
definisce la nostra applicazione
*/

class AppTodo {
  todos;

  constructor() {
    this.todos = [];
  }

  getAllTodos() {
    return this.todos;
  }

  addTodo(todo) {
    this.todos.push(todo);
  }
}

/*
Functions
*/

/**
 * Mostra tutti i todos
 * @returns {any}
 */
function showTodosFun() {
  todoListElement.innerHTML = '';
  result.forEach((todo) => {
    const liElement = document.createElement('li');
    liElement.classList.add('list-group-item');
    liElement.innerHTML = todo.title;
    todoListElement.append(liElement);
  });
}

/*
Esecuzione del programma
*/

const todoList = new AppTodo();

todoList.addTodo(new Todo('Imparare Javascript'));
todoList.addTodo(new Todo('Mangiare la pizza'));
todoList.addTodo(new Todo('Andare al mare'));
todoList.addTodo(new Todo('Usare un bicchiere'));

const result = todoList.getAllTodos();

const showTodos = document.getElementById('show-todos');
const addTodo = document.getElementById('add-todo');
const todoListElement = document.querySelector('.list-group');
//mostra i todo
showTodos.addEventListener('click', showTodosFun);
//aggiungi i todo
const todoText = document.getElementById('todo-testo');
addTodo.addEventListener('click', function (event) {
  event.preventDefault();
  todoList.addTodo(new Todo(todoText.value));
  todoText.value = '';
  // showTodosFun();
  showTodos.click();
});
