function helloWorld() {
  window.alert("Hello, world!");
}

function funWithConsoles() {
  console.log(8 * 3);
}

function changeColors() {
  document.getElementById("third").class = "alt-one-third column u-maxHeight";
  document.getElementById("twoThirds").class = "alt-two-thirds column u-maxHeight u-alt-background";
  document.getElementById("navigation").class = "alt-Nav-link";
}

function superScriptFiveMillion() {
  var input = prompt("Write something", "Anything");
  document.getElementById("demo").innerHTML = input;
}