/*global
    alert, confirm, console, Debug, opera, prompt, WSH
*/

var inleidingElt = document.getElementById("inleiding");
var buttonElt = document.getElementById("myButton");

function buttonHandler() {
  var elt = document.getElementById("inleiding");
  if (elt.style.color === "") {
    elt.style.color = "red";
  } else {
    elt.style.color = "";
  }
}

buttonElt.onclick = buttonHandler;
