// Create the wrapper div
const wrapper = document.createElement('div');

// Create the element to be wrapped
const divToWrap = document.createElement('div');
divToWrap.classList.add('foo'); // Assuming the element has the class 'foo'

// Append the element to the wrapper div
wrapper.appendChild(divToWrap);

// Append the wrapper div to the document or another parent element
document.body.appendChild(wrapper); // Example: Appending to the body
