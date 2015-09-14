/*global
    alert, confirm, console, Debug, opera, prompt, WSH
*/

alert("hi there - les 2");

var inTextElt = document.getElementById("inText");

function textHandler() {
  var elt = document.getElementById("inText");
  alert("input changed: " + elt.value);
  elt.value = "OK";
}

inTextElt.onchange = textHandler;

var formElt = document.getElementById("myForm");

function radioHandler() {
  var sugar = formElt.elements["sugar"].checked;
  var milk = formElt.elements["milk"].checked;
  alert("pizza selection: " + formElt.elements["pizza"].value + "\n" +
        "coffee with sugar: " + sugar + "\n" +
         "coffee with milk: " + milk);
}

formElt.onchange = radioHandler;

var todoItem = {open: true, text: "T.B.D."};
var todoList = [];

function addItem(txt) {
  todoList.push({open: true, text: txt});
}

function nest(tag, attrs, cont) {
  var res = "<" + tag + ">\n  ";
  res = res + cont;
  return res + "</" + tag + ">\n";
}

function single(tag, attrs) {
  var res = "<" + tag + " " + attrs + ">\n  ";
  return res;
}

function renderList() {
  var listElt = document.getElementById("myList");
  var html = "";
  var item = "";
  var i = 0;
  for (i = 0; i < todoList.length; i = i + 1) {
    item = single('input', 'type="checkbox"');
    item = nest("label", "", item + todoList[i].text + "\n");
    html = html + nest("li", "", item + "\n");
  }
  html = nest("ul", "", html);
  alert(html);
  listElt.innerHTML = html;
}

function testList() {
  renderList();
  addItem("item 1");
  renderList();
  addItem("item2");
  renderList();
}

testList();

function addHandler() {
  addItem("item " + (todoList.length + 1));
  renderList();
}

var buttonElt = document.getElementById("addButton");

buttonElt.onclick = addHandler;


