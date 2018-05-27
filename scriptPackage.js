function helloWorld() {
  window.alert("Hello, world!");
}

function funWithConsoles() {
  console.log(8 * 3);
}

function changeColors(state) {
  if (state) {
    document.getElementById("third").className = "alt-one-third column u-maxHeight";
    document.getElementById("twoThirds").className = "alt-two-thirds column u-maxHeight u-alt-background";
    document.getElementById("sendOff").className = "alt-Home";
    var i = 0;
    while (i < 5) {
      document.getElementById("menu").className = "alt-Nav-link";
      document.getElementById("menu").id = "changed";
      i++;
    }
  } else {
    document.getElementById("third").className = "one-third column u-maxHeight";
    document.getElementById("twoThirds").className = "two-thirds column u-maxHeight u-background";
    document.getElementById("sendOff").className = "Home";
    var i = 0;
    while (i < 5) {
      document.getElementById("changed").className = "Nav-link";
      document.getElementById("changed").id = "menu";
      i++;
    }
  }
}

function superScriptFiveMillion() {
  var input = prompt("Write something", "Anything");
  document.getElementById("demo").innerHTML = input;
}