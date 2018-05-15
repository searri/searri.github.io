function helloWorld() {
  window.alert("Hello, world!");
}

function funWithConsoles() {
  console.log(8 * 3);
}

function changeColors() {
  document.getElementById("third").className = "alt-one-third column u-maxHeight";
  document.getElementById("twoThirds").className = "alt-two-thirds column u-maxHeight u-alt-background";
  var navigation = document.getElementsByClassName("Nav-link");
  console.log(navigation.length);
  var i = 0;
  while (i < navigation.length) {
    navigation[i].className = "alt-Nav-link";
    i++;
  }
  // navigation[3].className = "alt-Nav-link";
}

function superScriptFiveMillion() {
  var input = prompt("Write something", "Anything");
  document.getElementById("demo").innerHTML = input;
}