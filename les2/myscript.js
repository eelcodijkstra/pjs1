/*global
    alert, confirm, console, Debug, opera, prompt, WSH
*/

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
