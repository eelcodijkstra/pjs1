
// model of todo-element and todo-list

var todos  = new Array();  // start as empty list
var nextId = 0;            // id of next elt to be created

function createTodo(done, text) {
  todos.push({id: nextId, done: done, text: text});
  nextId += 1;
  renderTodos(todos); // signal view(s)
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

function mkInputElt(type, name, value) {
  var html = '<input type="' + type +
      '" id="id-' + name +
      '" name="' + name +
      '" value="' + value + '">';
  return html;
}

function mkCheckboxElt(nr, done) {
  var html = '<input type="checkbox" id="id-' + nr +
      '" name="done-' + nr +
      '" value="' + done + '" ';
  if (done) {
    html = html + 'checked ';
  }
  html = html + '>'
  return html;
}

function mkTodos(todoList) {
  var html = "";
  for (i = 0; i < todoList.length; i++) {
    var todo = todoList[i]
    var todoElt = mkCheckboxElt(todo.id, todo.done);
    todoElt = todoElt +
      mkElt("span", 'id="text-' + todo.id + '"', todo.text) +
      "<br>";
    html = html + todoElt;
  }
  return html;
}

function createTodoHandler () {
  var todoForm = document.getElementById("createTodoForm");
  var todoText = todoForm.text.value;
  var todoDone = todoForm.done.checked;
  createTodo(todoDone, todoText);
  todoForm.text.value = "";
  todoForm.done.checked = false;
}

var todoDiv = document.getElementById("todoDiv");

function renderTodos(todoList) {
  todoDiv.innerHTML = mkTodos(todoList);
}

todoDiv.innerHTML = mkTodos(todos);

var createTodoButton = document.getElementById("createTodoButton");

createTodoButton.onclick = createTodoHandler;

testTodoList();

todoDiv.onclick = todoListHandler

function todoListHandler(evt) {
  alert("elt-tag: " + evt.target.nodeName + " id: " + evt.target.id);
  if (evt.target.nodeName == 'INPUT' && evt.target.id.startsWith("id-")) {
    var nr = parseInt(evt.target.id.slice(3));
    todos[nr].done = evt.target.checked;
    renderTodos(todos);
  } else if (evt.target.nodeName == 'SPAN' && evt.target.id.startsWith("text-")) {
    alert("change text" + evt.target.id.slice(5));
    var i = parseInt(evt.target.id.slice(5));
     todos[i].text = todos[i].text + "..";
     renderTodos(todos);
  }
}
