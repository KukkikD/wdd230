// Copyright year
document.getElementById("currentYear").innerHTML = new Date().getFullYear();

//Lasmodify//
document.getElementById('lastModified').textContent = new Date(document.lastModified).toLocaleDateString();



//Hamburger button
const hamburgerElement = document.querySelector('#myButton');
const navElement = document.querySelector('.menuLinks');

hamburgerElement.addEventListener('click', () => {
    navElement.classList.toggle('open');
    hamburgerElement.classList.toggle('open');
})

//Dark mode//
// Select the main element
const main = document.querySelector('main');
const myBtn = document.querySelector('#darkBtn');

myBtn.addEventListener('click', () => {
    main.classList.toggle('dark');
});

//Number of visitor
// Display element variable
const visitsDisplay = document.querySelector(".visits");

// Get the stored VALUE for the numVisits-ls KEY in localStorage if it exists. If the numVisits KEY is missing, then assign 0 to the numVisits variable.
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

// If this is the first visit or display the number of visits.
if (numVisits !== 0) {
    visitsDisplay.textContent = numVisits;
} else {
    visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}

// increment the number of visits by one.
numVisits++;

// store the new visit total into localStorage, key=numVisits-ls
localStorage.setItem("numVisits-ls", numVisits);
