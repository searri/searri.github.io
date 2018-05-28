function happyBirthday() {
  //window.alert("HAPPY BIRTHDAY ELLIE!");
  console.log("weezy");
  // analyzeColors();
}

function startGame1() {
  document.getElementById("welcome").innerHTML = "Whaddup nerd, and welcome to your favorite number guessing game!";
  //Remove other version buttons
  document.getElementById("starter2").parentNode.removeChild(document.getElementById("starter1"));
  document.getElementById("starter2").parentNode.removeChild(document.getElementById("starter2"));
  document.getElementById("starter2").parentNode.removeChild(document.getElementById("starter3"));

  var gameInput = document.getElementById("prompt"); //add text to prompt field
  gameInput.innerHTML = "<br>I'm thinking of a number between 1 and 10. <br> Take a guess:";

  var inputBox = document.createElement("input"); //Create the input box
  inputBox.type = "text";
  inputBox.id = "inputBox";
  gameInput.appendChild(inputBox);

  var submitButton = document.createElement("button"); //create the guess button
  submitButton.onclick = function() { //Function associated with the guess button
    var guess = document.getElementById("inputBox").value;
    var r = numGen(10);
    console.log(r);
    console.log(guess);
    if (r == guess) {
      document.getElementById("welcome").innerHTML = "Wow. Good job. You guessed my number. Well freakin done."
    } else {
      document.getElementById("welcome").innerHTML = "WRONG-O! To be fair, though, the odds weren't on your side."
    }
  };
  submitButton.innerHTML = "Spam it! Eventually it'll work.";
  gameInput.appendChild(submitButton);
}

function startGame2() {
  document.getElementById("welcome").innerHTML = "WIMP! Infinite guesses...tsk, tsk.";

  document.getElementById("starter2").parentNode.removeChild(document.getElementById("starter1"));
  document.getElementById("starter2").parentNode.removeChild(document.getElementById("starter2"));
  document.getElementById("starter2").parentNode.removeChild(document.getElementById("starter3"));

  var gameInput = document.getElementById("prompt"); //add text to prompt field
  gameInput.innerHTML = "<br>I'm thinking of a number between 1 and 10. <br> Take a guess:";

  var inputBox = document.createElement("input"); //Create the input box
  inputBox.type = "text";
  inputBox.id = "inputBox";
  gameInput.appendChild(inputBox);

  var num = numGen(10);
  localStorage.setItem("weezinator", num);

  var submitButton = document.createElement("button"); //create the guess button
  submitButton.onclick = function() { //Function associated with the guess button
    var guess = document.getElementById("inputBox").value;
    var r = localStorage.getItem("weezinator");
    console.log(r);
    console.log(guess);
    if (r == guess) {
      document.getElementById("welcome").innerHTML = "Wow. You guessed my number. But...you had infinite guesses, sooo..."
    } else {
      document.getElementById("welcome").innerHTML = "Sorry, mate! Try again."
    }
  };
  submitButton.innerHTML = "Try your luck";
  gameInput.appendChild(submitButton);
}

function startGame3() {
  document.getElementById("welcome").innerHTML = "WIMP! Infinite guesses...tsk, tsk.";

  document.getElementById("starter2").parentNode.removeChild(document.getElementById("starter1"));
  document.getElementById("starter2").parentNode.removeChild(document.getElementById("starter2"));
  document.getElementById("starter2").parentNode.removeChild(document.getElementById("starter3"));

  var gameInput = document.getElementById("prompt"); //add text to prompt field
  gameInput.innerHTML = "<br>I'm thinking of a number between 1 and 10. <br> Take a guess:";

  var inputBox = document.createElement("input"); //Create the input box
  inputBox.type = "text";
  inputBox.id = "inputBox";
  gameInput.appendChild(inputBox);

  var num = numGen(10);
  localStorage.setItem("weezinator", num);

  var submitButton = document.createElement("button"); //create the guess button
  submitButton.onclick = function() { //Function associated with the guess button
    var guess = document.getElementById("inputBox").value;
    var r = localStorage.getItem("weezinator");
    console.log(r);
    console.log(guess);
    if (r == guess) {
      document.getElementById("welcome").innerHTML = "Wow. You guessed my number. But...you had infinite guesses, sooo..."
    } else {
      document.getElementById("welcome").innerHTML = "Sorry, mate! Try again."
    }
  };
  submitButton.innerHTML = "Try your luck";
  gameInput.appendChild(submitButton);
}

function numGen(s) {
  var n = Math.floor(Math.random() * s);
  n++;
  return n;
}

function checkLocalStorage() {
  if (typeof(Storage) !== "undefined") {
    window.alert("Your browser is compatible...\nThere must be a different issue.");
  } else {
    window.alert("Sorry, this version is incompatible with your browser.")
  }
}