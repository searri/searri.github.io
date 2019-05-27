var maxVal = null;
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
if (slider != null) {
    output.innerHTML = slider.value; // Display the default slider value
    // Update the current slider value (each time you drag the slider handle)
    slider.oninput = function () {
        output.innerHTML = this.value;
    }
}

function getStartInfo() {
    var maxValField = document.getElementById("maxVal");
    maxVal = maxValField.value;
    console.log(maxVal);
    var sliderToAdd = document.createElement("input");
    sliderToAdd.type = "range";
    sliderToAdd.min = "0";
    sliderToAdd.max = maxVal;
    slider.value = "4";
    slider.id = "myRange";
    var whereToAdd = document.getElementById("putSliderHere");
    whereToAdd.appendChild(sliderToAdd);
    var tempChild = document.getElementById("gameStartInfo");
    var tempParent = tempChild.parentNode;
    tempParent.removeChild(tempChild);
}