// Declare three const variables that hold references to
// the input, button, and list elements.
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Create a click event listener for the Add Chapter button
// using addEventListener and an anonymous function or arrow function.
button.addEventListener('click', () => {
    // Check if the input is not empty
    if (input.value !== '') {
        // Create the li element
        const li = document.createElement("li");

        // Create a delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';  // Setting text content of the delete button to '❌'

        // Populate the li element's textContent with the input value
        li.textContent = input.value;

        // Append the delete button to the li element
        li.append(deleteButton);

        // Append the li element to the unordered list in your HTML
        list.append(li);

        // Add an event listener to the delete button that removes the li element when clicked
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
        });

        // Clear the input field
        input.value = '';

        // Send the focus to the input element
        input.focus();
    } else {
        // If the input is empty, focus back on the input field
        input.focus();
    }
});

