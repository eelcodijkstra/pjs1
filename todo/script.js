
var
  todo = new Array();

function mkTodo(done, text) {
  todo.push({done: done, text: text});
}

function mkTestDone() {
  todo = new Array();
  mkTodo(false, "Boodschappen bij Jumbo");
  mkTodo(false, "Rekening elektra betalen");
  mkTodo(true, "Huiswerk maken");
}

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

function mkCheckboxElt(nr) {
  return mkInputElt("checkbox", "done-" + nr, todo[nr].done);
}

function mkTodoList() {
  var html = "";
  for (i = 0; i < todo.length; i++) {
    var todoElt = mkCheckboxElt(i);
    todoElt = todoElt + mkElt("span", todo[i].text) + "<br>";
    html = html + todoElt;
  }
  return html;
}

var todoDiv = document.getElementById("todoDiv");
mkTestDone();

todoDiv.innerHTML = mkTodoList();

