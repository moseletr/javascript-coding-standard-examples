const CHILD_COUNT = 5;

const listElement = document.createElement('ul');

for (let i = 0; i < CHILD_COUNT; i++) {
    const itemElement = document.createElement('li');

    // Add text to the span element
    itemElement.appendChild(document.createTextNode(`Item #${i + 1}`));

    // Attach an event listener to the element directly, no need for selection
    itemElement.addEventListener('click',
        () => window.alert(`Picked item #${i + 1}`));

    listElement.appendChild(itemElement);
}

document.body.appendChild(listElement);