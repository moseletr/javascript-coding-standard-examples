const buttons = document.getElementsByTagName('button');

// Traditional for loop iterating over array
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', callbackFunction());
}

// This for...of loop completes same task and is more concise
for (let button of buttons) {
    button.addEventListener('click', callbackFunction());
}