const containerElement = document.getElementById('container');

// Create a copy of the element (not including its children)
const containerClone = containerElement.cloneNode(false);

// Replace the element with its empty clone
containerElement.parentNode.replaceChild(containerClone, containerElement);