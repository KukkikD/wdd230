
// Declare the URL of the JSON resource
const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

// Select the HTML div element with the id "cards"
const cards = document.querySelector('#cards');

//Create a async defined function named "getProphetData" 
//to fetch data from the JSON source url using the await fetch() method.

async function getProphetData() {

    //Store the response from the fetch() method in a const variable named "response".
    const response = await fetch(url);

    //Convert the response to a JSON object using the .json method 
    //and store the results in a const variable named "data".
    const data = await response.json();

    //Add a console.table() expression method to check the data response at this point in the console window.
    //console.table(data.prophets);

    // Call the displayProphets function with data.prophets
    displayProphets(data.prophets);
}

//Call the function getProphetData() in the main line of your .js code to test the fetch and response
getProphetData()

// Define the displayProphets function using an arrow function
const displayProphets = (prophets) => {
    prophets.forEach(prophet => {
        // Create a section element for the card
        const card = document.createElement('section');

        // Create an h2 element for the full name
        const fullName = document.createElement('h2');

        // Create an img element for the portrait
        const portrait = document.createElement('img');

        // Create p elements for birthdate and birthplace
        const birthdate = document.createElement('p');
        const birthplace = document.createElement('p');

        // Populate the heading element with the prophet's full name
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;

        // Populate the birthdate and birthplace elements
        birthdate.textContent = `Date of Birth: ${prophet.birthdate}`;
        birthplace.textContent = `Place of Birth: ${prophet.birthplace}`;

        // Build the image element by setting the attributes
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '200');
        portrait.setAttribute('height', '250');

        // Append the heading and image elements to the section element
        card.appendChild(fullName);
        card.appendChild(birthdate);
        card.appendChild(birthplace);
        card.appendChild(portrait);


        // Append the card to the cards container
        cards.appendChild(card);
    });
};