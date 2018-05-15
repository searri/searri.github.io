function helloWorld() {
  window.alert("Hello, world!");
}

function funWithConsoles() {
  console.log(8 * 3);
}

function changeColors() {
  document.getElementById("third").className = "alt-one-third column u-maxHeight";
  document.getElementById("twoThirds").className = "alt-two-thirds column u-maxHeight u-alt-background";
  document.getElementById("navigation").className = "alt-Nav-link";
}

function superScriptFiveMillion() {
  var input = prompt("Write something", "Anything");
  document.getElementById("demo").innerHTML = input;
}