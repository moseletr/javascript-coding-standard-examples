const buttonElement = document.getElementById('clicky-button');

// Multiple statements with no arguments
buttonElement.addEventListener('click', () => {
    const day = getDayOfMonth();

    checkSchedule(day);
});

// Single statement with one argument
buttonElement.addEventListener('click', (month) => clearSchedule(month));