function happyBirthday() {
  //window.alert("HAPPY BIRTHDAY ELLIE!");
  console.log("weezy");
  // analyzeColors();
}

function startGame1() {
  document.getElementById("welcome").innerHTML = "Whaddup nerd, and welcome to your favorite number guessing game!";
  //Remove other version buttons
  document.getElementById("starter1").parentNode.removeChild(document.getElementById("starter1"));
  document.getElementById("starter2").parentNode.removeChild(document.getElementById("starter2"));
  document.getElementById("starter3").parentNode.removeChild(document.getElementById("starter3"));
  document.getElementById("instructions").parentNode.removeChild(document.getElementById("instructions"));

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
      document.getElementById("welcome").innerHTML = "Wow. Good job. You guessed my number. Well freakin done.";
    } else {
      document.getElementById("welcome").innerHTML = "WRONG-O! To be fair, though, the odds weren't on your side.";
    }
  };
  submitButton.innerHTML = "Spam it! Eventually it'll work.";
  gameInput.appendChild(submitButton);
}

function startGame2() {
  document.getElementById("welcome").innerHTML = "WIMP! Infinite guesses...tsk, tsk.";

  document.getElementById("starter1").parentNode.removeChild(document.getElementById("starter1"));
  document.getElementById("starter2").parentNode.removeChild(document.getElementById("starter2"));
  document.getElementById("starter3").parentNode.removeChild(document.getElementById("starter3"));
  document.getElementById("instructions").parentNode.removeChild(document.getElementById("instructions"));

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
      document.getElementById("welcome").innerHTML = "Wow. You guessed my number. But...you had infinite guesses, sooo...";
    } else {
      document.getElementById("welcome").innerHTML = "Sorry, mate! Try again.";
    }
  };
  submitButton.innerHTML = "Try your luck";
  gameInput.appendChild(submitButton);
}

function startGame3() {
  var gameInput = document.getElementById("input");
  document.getElementById("welcome").innerHTML = "Ah, so you think you're ready for the big guns, huh?";
  var levelLabel = document.createElement("h2");
  levelLabel.innerHTML = "Level I";
  levelLabel.id = "level";
  var lifeLabel = document.createElement("h5");
  lifeLabel.innerHTML = "temp";
  lifeLabel.id = "lifeLabel";
  document.getElementById("title").appendChild(levelLabel);
  document.getElementById("title").appendChild(lifeLabel);

  document.getElementById("starter1").parentNode.removeChild(document.getElementById("starter1"));
  document.getElementById("starter2").parentNode.removeChild(document.getElementById("starter2"));
  document.getElementById("starter3").parentNode.removeChild(document.getElementById("starter3"));
  document.getElementById("instructions").parentNode.removeChild(document.getElementById("instructions"));

  localStorage.setItem("randSeed", 5); //set life and random number seed in memory
  localStorage.setItem("life", 3);
  localStorage.setItem("gameState", 1);

  var num = numGen(localStorage.getItem("randSeed"));
  localStorage.setItem("weezinator", num);

  var inputBox = document.createElement("input"); //Create the input box
  inputBox.type = "text";
  inputBox.id = "inputBox";
  gameInput.appendChild(inputBox);

  var submitButton = document.createElement("button"); //create the guess button
  submitButton.onclick = function() { //Function associated with the guess button
    var guess = document.getElementById("inputBox").value;
    var r = localStorage.getItem("weezinator");
    console.log(r);
    console.log(guess);
    if (r == guess) {
      document.getElementById("welcome").innerHTML = "CONGRATULATIONS NERD! New level unlocked and life refilled.";
      localStorage.setItem("life", 3);
      var l = localStorage.getItem("gameState");
      l++;
      localStorage.setItem("gameState", l);
      advanceLevel(l);
      ver3updatePrompt();
    } else {
      document.getElementById("welcome").innerHTML = "Ouch...wrong answer. Be a shame if you lost all your progress...";
      var l = localStorage.getItem("life");
      l--;
      if (l == 0) { //loss condition
        loser();
      }
      localStorage.setItem("life", l);
      ver3updatePrompt();
    }
  };
  submitButton.innerHTML = "Is it right?";
  gameInput.appendChild(submitButton);

  ver3updatePrompt();
}


function ver3updatePrompt() {
  var seed = localStorage.getItem("randSeed");
  var lyfe = localStorage.getItem("life");
  var gameInput = document.getElementById("prompt"); //add text to prompt field
  gameInput.innerHTML = "<br>I'm thinking of a number between 1 and " + seed + ". <br> Take a guess:";
  if (lyfe == 1) {
    document.getElementById("lifeLabel").innerHTML = "You have " + lyfe + " life left! Don't mess up!";
  } else {
    document.getElementById("lifeLabel").innerHTML = "You have " + lyfe + " lives remaining.";
  }
}

function advanceLevel(l) {
  if (l == 2) {
    document.getElementById("level").innerHTML = "Level II";
    localStorage.setItem("randSeed", 10);
  } else if (l == 3) {
    document.getElementById("level").innerHTML = "Level III";
    localStorage.setItem("randSeed", 15);
  } else if (l == 4) {
    document.getElementById("level").innerHTML = "Level IV";
    localStorage.setItem("randSeed", 20);
  } else if (l == 5) {
    console.log("u win");
    clearPage();
    document.getElementById("welcome").innerHTML = "Good job. You win...absolutely nothing."
    var celebration = document.createElement("img");
    celebration.src = "https://i.gifer.com/Pcb.gif";
    document.getElementById("welcome").appendChild(celebration);
  } else {
    window.alert("Error encountered.");
    pageRefresh();
  }
  var num = numGen(localStorage.getItem("randSeed"));
  localStorage.setItem("weezinator", num);
}

function numGen(s) {
  var n = Math.floor(Math.random() * s);
  n++;
  console.log(n);
  return n;
}

function checkLocalStorage() {
  if (typeof(Storage) !== "undefined") {
    window.alert("Your browser is compatible...\nThere must be a different issue.\n\n...you better be following my instructions.");
  } else {
    window.alert("Sorry, this version is incompatible with your browser.")
  }
}

function pageRefresh() {
  location.reload();
}

function clearPage() {
  document.getElementById("input").parentNode.removeChild(document.getElementById("input"));
  document.getElementById("prompt").parentNode.removeChild(document.getElementById("prompt"));
  document.getElementById("level").parentNode.removeChild(document.getElementById("level"));
  document.getElementById("lifeLabel").parentNode.removeChild(document.getElementById("lifeLabel"));
}

function loser() {
  clearPage();
  document.getElementById("welcome").innerHTML = "HA HA YOU LOST.<br><br>"
  var datDiv = document.createElement("div");
  datDiv.className = "crop";
  datDiv.id = "weezy";
  document.getElementById("welcome").appendChild(datDiv);
  var celebration = document.createElement("img");
  celebration.src = "https://pa1.narvii.com/6645/3bf5660f494a12c0c294084121be1bb8231857d9_hq.gif";
  document.getElementById("weezy").appendChild(celebration);
}