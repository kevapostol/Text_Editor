/**
 * DONE: Update the text in the "Formatted Text" section as a user types in the textarea
 * DONE: Add a .bold, .italic classes to "Formatted Text" when the appropriate button is clicked
 * DONE: Add an .underline class to "Formatted Text" when Underline button is clicked
 * TODO: Toggle the align style for "Formatted Text" when the appropriate button is clicked
 */

/**
 * Update the output text as a user types in the textarea
 */
function updateText() {
    let text = document.getElementById("text-input").value;
    document.getElementById("text-output").innerText = text;
}

/**
 * Toggle the bold class for the output text
 */
function makeBold(elem) {
    elem.classList.toggle("active");
    document.getElementById("text-output").classList.toggle("bold");
}

/**
 * Toggle the italic class for the output text
 */
function makeItalic(elem) {
    elem.classList.toggle("active");
    document.getElementById("text-output").classList.toggle("italic");
}

/**
 * Toggle the underline class for the output text
 */
function makeUnderline(elem) {
    elem.classList.toggle("active");
    let formattedText = document.getElementById("text-output");

    if (formattedText.classList.contains("underline")) {
        formattedText.classList.remove("underline");
    } else {
        formattedText.classList.add("underline");
    }
}

/**
 * Toggle the style textAlign attribute
 * Toggle the active state for the align butttons
 * HINT: Use the style property of the element
 * HINT: Make sure to untoggle the active state for all other align buttons
 */
function alignText(elem, alignType) {
    // CODE GOES HERE
}
