function happyBirthday() {
  //window.alert("HAPPY BIRTHDAY ELLIE!")
}

function startGame() {
  var startSwitch = document.getElementById("starter");
  startSwitch.parentNode.removeChild(startSwitch);
  document.getElementById("output").innerHTML = "Whaddup nerd, and welcome back to your favorite number guessing game!";

  var gameInput = document.createElement("div");
  gameInput.innerHTML = "<br>I'm thinking of a number between 1 and 10. <br> Take a guess:";
  gameInput.id = "prompt";
  document.getElementById("output").appendChild(gameInput);

  var inputBox = document.createElement("input");
  inputBox.type = "text";
  inputBox.target = "weezinator";
  inputBox.id = "inputBox";
  gameInput.appendChild(inputBox);

  var submitButton = document.createElement("button");
  submitButton.onclick = "guesserGame()";
  submitButton.innerHTML = "Guess";
  gameInput.appendChild(submitButton);
}

function guesserGame() {
  var n = document.getElementById("inputBox");
  document.getElementById("textOut").innerHTML = n;
}

// <input type="text" id="input1" />
// <button onclick="myJsFunction()">I'm a button</button>
// <script type="text/javascript">
//  function myJsFunction(){
//     var text=document.getElementById('input1').value;
//     document.getElementById("starter").innerHTML = text;
//  }
// </script>