


var display = document.getElementById("display");

var buttons = document.querySelectorAll("button");

var firstNumber = "";
var secondNumber = "";
var operator = "";

// Button Click Function
buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        var value = button.getAttribute("data-value");
        var action = button.getAttribute("data-action");

        // Clear All
        if (action == "clear") {
            display.value = "0";
            firstNumber = "";
            secondNumber = "";
            operator = "";
        }

        // Delete Last Number
        else if (action == "delete") {
            display.value = display.value.slice(0, -1);

            if (display.value == "") {
                display.value = "0";
            }
        }

