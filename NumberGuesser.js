function happyBirthday() {
  //window.alert("HAPPY BIRTHDAY ELLIE!")
}

function startGame() {
  var startSwitch = document.getElementById("starter");
  startSwitch.parentNode.removeChild(startSwitch);
  document.getElementById("output").innerHTML = "Whaddup nerd, and welcome back to your favorite number guessing game!";

  var gameInput = document.getElementById("theGame");
  gameInput.innerHTML = "I'm thinking of a number between 1 and 10. <br> Take a guess:";

  var inputBox = document.createElement("input");
  inputBox.type = "text";
  inputBox.target = "weezinator"
  inputBox.id = "inputBox";
  gameInput.appendChild(inputBox);

  var submitButton = document.createElement("button");
  submitButton.onclick = "guesserGame()";
  submitButton.innerHTML = "Guess";
  gameInput.appendChild(submitButton);
}

function guesserGame() {
  var n = document.getElementById("inputBox");
  document.getElementById("output").innerHTML = n;
}