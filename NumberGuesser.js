function happyBirthday() {
  //window.alert("HAPPY BIRTHDAY ELLIE!");
  console.log("weezy");
}

function startGame1() {
  var startSwitch = document.getElementById("starter1");
  startSwitch.parentNode.removeChild(startSwitch);
  document.getElementById("welcome").innerHTML = "Whaddup nerd, and welcome back to your favorite number guessing game!";
  document.getElementById("starter2").parentNode.removeChild(document.getElementById("starter2"));

  var gameInput = document.getElementById("prompt");
  gameInput.innerHTML = "<br>I'm thinking of a number between 1 and 10. <br> Take a guess:";

  var inputBox = document.createElement("input");
  inputBox.type = "text";
  inputBox.id = "inputBox";
  gameInput.appendChild(inputBox);

  var submitButton = document.createElement("button");
  submitButton.onclick = function() {
    var guess = document.getElementById("inputBox").value;
    var r = numGen();
    console.log(r);
    console.log(guess);
    if (r == guess) {
      document.getElementById("welcome").innerHTML = "Wow. Good job. You guessed my number. Well freakin done."
    } else {
      document.getElementById("welcome").innerHTML = "WRONG-O! To be fair, though, the odds aren't on your side."
    }
  };
  submitButton.innerHTML = "Try your luck";
  submitButton.id = "dasButtoon";
  gameInput.appendChild(submitButton);

  // numGen();
}

function numGen() {
  var n = Math.floor(Math.random() * 10);
  n++;
  return n;
}

// <input type="text" id="input1" />
// <button onclick="myJsFunction()">I'm a button</button>
// <script type="text/javascript">
//  function myJsFunction(){
//     var text=document.getElementById('input1').value;
//     document.getElementById("starter1").innerHTML = text;
//  }
// </script>