
// model of todo-element and todo-list

var todos  = new Array();  // start as empty list
var nextId = 0;            // id of next elt to be created

function createTodo(done, text) {
  todos.push({id: nextId, done: done, text: text});
  nextId += 1;
  renderTodos(todos); // signal view(s)
}

function todoElt(id) {
  var i = todos.findIndex(function (elt) {
    return elt.id == id;
  });
  return todos[i];
}

function updateTodo(id, done, text) {
  var todo = todoElt(id);
  todo.done = done;
  todo.text = text;
  renderTodos(todos);
}

function updateTodoDone(id, done) {
  todoElt(id).done = done;
  renderTodos(todos);
}

function updateTodoText(id, text) {
  todoElt(id).text = text;
  renderTodos(todos);
}

function removeTodoItem(id) {
  todos = todos.filter( function (item) {
    return item.id != id;
  });
  renderTodos(todos);
}

// test

function testTodoList() {
  createTodo(false, "Boodschappen bij Jumbo");
  createTodo(false, "Rekening elektra betalen");
  createTodo(true, "Huiswerk maken");
}

// rendering/view

function mkElt(tag, attrs, content) {
  var html = "<" + tag + " " + attrs + ">" + content + "</" + tag + ">";
  return html;
}

function mkInputElt(type, attrs, name, value) {
  var html = '<input type="' + type + '" ' +
      attrs +
      '" name="' + name +
      '" value="' + value + '">';
  return html;
}

function mkTodoItem(todo) {
  var checked = (todo.done) ? ' checked ' : '';
  var contents =
      mkInputElt('checkbox', checked + ' data-id="' + todo.id + '"',
                 'done', 'True') +
      mkElt('span', 'data-id="' + todo.id + '"', todo.text) +
      mkElt('button', 'data-id="' + todo.id + '"', 'x');
  return mkElt('div', 'class="todo-item" data-id="' + todo.id +'"', contents);
}

function mkTodos(todoList) {
  var html = "";
  for (i = 0; i < todoList.length; i++) {
    html = html + mkTodoItem(todoList[i]);
  }
  return html;
}

var todoDiv = document.getElementById("todoDiv");
todoDiv.innerHTML = mkTodos(todos);

function renderTodos(todoList) {
  todoDiv.innerHTML = mkTodos(selectedItems(todoList));
}

function todoClickHandler(evt) {
  if (evt.target.nodeName == 'INPUT' && evt.target.type == 'checkbox') {
    updateTodoDone(evt.target.dataset.id, evt.target.checked);
  } else if (evt.target.nodeName == 'BUTTON') {

    removeTodoItem(evt.target.dataset.id);
  }
}

todoDiv.onclick = todoClickHandler;

function createTodoHandler () {
  var todoForm = document.getElementById("createTodoForm");
  createTodo(todoForm.done.checked, todoForm.text.value);
  todoForm.text.value = "";
  todoForm.text.placeholder = "some action";
  todoForm.done.checked = false;
}

document.getElementById("createTodoButton").onclick = createTodoHandler;

function allItems(todoList) {
  return todoList;
}

function openItems(todoList) {
  return todoList.filter(function (item) {
    return !item.done;
  });
}

function doneItems(todoList) {
  return todoList.filter(function (item) {
    return item.done;
  });
}

var selectedItems = allItems;

var selectAllButton = document.getElementById("selectAllButton");
var selectDoneButton = document.getElementById("selectDoneButton");
var selectOpenButton = document.getElementById("selectOpenButton");

selectAllButton.onclick = function () {
  selectedItems = allItems;
  renderTodos(todos);
}

selectDoneButton.onclick = function () {
  selectedItems = doneItems;
  renderTodos(todos);
}

selectOpenButton.onclick = function () {
  selectedItems = openItems;
  renderTodos(todos);
}

testTodoList();
