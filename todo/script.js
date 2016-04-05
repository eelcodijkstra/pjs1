
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

// rendering

function mkElt(tag, content) {
  var html = "<" + tag + ">" + content + "</" + tag + ">";
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
    todoElt = todoElt + mkElt("span", todo.text) + "<br>";
    html = html + todoElt;
  }
  return html;
}

var todoDiv = document.getElementById("todoDiv");

function renderTodos(todoList) {
  todoDiv.innerHTML = mkTodos(todoList);
}

todoDiv.innerHTML = mkTodos(todos);

testTodoList();
