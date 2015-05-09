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
