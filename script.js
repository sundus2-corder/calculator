
const display = document.getElementById("display");
const buttons = document.querySelector(".buttons");

let expression = "";
let resultShown = false;

buttons.addEventListener("click", function (event) {
    const button = event.target;

    if (button.tagName !== "BUTTON") return;

    const value = button.dataset.value;
    const action = button.dataset.action;

    if (action === "clear") {
        expression = "";
        display.value = "0";
        resultShown = false;
        return;
    }

    if (action === "delete") {
        expression = expression.slice(0, -1);
        display.value = expression || "0";
        resultShown = false;
        return;
    }

    if (action === "calculate") {
        try {
            if (!expression || !/^[0-9+\-*/.() ]+$/.test(expression)) {
                return;
            }

            // Evaluate only a validated arithmetic expression.
            const result = Function(
                '"use strict"; return (' + expression + ')'
            )();

            if (!Number.isFinite(result)) {
                display.value = "Error";
                expression = "";
                resultShown = true;
                return;
            }

            expression = String(
                Number(result.toPrecision(12))
            );

            display.value = expression;
            resultShown = true;
        } catch {
            display.value = "Error";
            expression = "";
            resultShown = true;
        }

        return;
    }

    if (value !== undefined) {
        if (resultShown) {
            if (/[0-9.]/.test(value)) {
                expression = "";
            }

            resultShown = false;
        }

        expression += value;
        display.value = expression;
    }
});
