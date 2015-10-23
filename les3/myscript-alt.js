// scripts voor les3

var divA = document.getElementById("divA");

var buttonA = document.getElementById("buttonA");
var buttonB = document.getElementById("buttonB");
var buttonC = document.getElementById("buttonC");

function buttonAHandler() {
  if (divA.style.color === "blue") {
    divA.style.color = "red";
  } else {
    divA.style.color = "blue";
  }
}

function buttonBHandler() {
  if (divA.style.display === "none") {
    divA.style.display = "block";
    buttonB.textContent = "hide the text";
  } else {
    divA.style.display = "none";
    buttonB.textContent = "unhide the text";
  }
}

function buttonCHandler() {
  var txt = divA.innerHTML;
  alert("text: " + txt);
  divA.innerHTML = txt + "<p>...etcetera...</p>";
}

function genericHandler(evt) {
  alert(evt.target.id);
  if (evt.target.id === "buttonA") {
    buttonAHandler();
  } else if (evt.target.id === "buttonB") {
    buttonBHandler();
  } else if (evt.target.id === "buttonC") {
    buttonCHandler();
  }
}

// buttonA.onclick = buttonAHandler;
// buttonB.onclick = buttonBHandler;
// buttonC.onclick = buttonCHandler;

buttonA.onclick = genericHandler;
buttonB.onclick = genericHandler;
buttonC.onclick = genericHandler;
