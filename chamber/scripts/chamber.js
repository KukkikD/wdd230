// Copyright year
document.getElementById("currentYear").innerHTML = new Date().getFullYear();

//Lasmodify//
document.getElementById('lastModified').textContent = new Date(document.lastModified).toLocaleDateString();



//Hamburger button
const hamburgerElement = document.querySelector('#menuButton');
const navElement = document.querySelector('nav ul.menuLinks');

hamburgerElement.addEventListener('click', () => {
    navElement.classList.toggle('open');
    hamburgerElement.classList.toggle('open');
})

const joinElement = document.querySelector('a.join');

// Add click event listener to every "read more..." link
document.querySelectorAll('.read-more').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent page from reloading when clicking the link

        // If the "read more..." link is clicked, we will show/hide the additional information
        const hiddenParagraph = this.nextElementSibling;
        hiddenParagraph.classList.toggle('hidden');

        // Remove the "read more" link after it's clicked
        this.remove();

    });
});

//Dark mode//
// Select the main element
//const main = document.querySelector('main');
//const myBtn = document.querySelector('#darkBtn');

//myBtn.addEventListener('click', () => {
//    myBtn.classList.toggle('dark');
//});

// Display visit message based on localStorage
//const visitsDisplay = document.querySelector(".visits");

// Get the stored VALUE for the numVisits-ls KEY in localStorage if it exists. If the numVisits KEY is missing, then assign 0 to the numVisits variable.
//let lastVisits = Number(window.localStorage.getItem("lastVisits-ls")) || 0;

// If this is the first visit or display the number of visits.
//if (lastVisits !== 0) {
//visitsDisplay.textContent = lastVisits;
//}
//else {
//    visitsDisplay.textContent = `🥳 Welcome! Let us know if you have any questions.`;
//}

// increment the number of visits by one.
//lastVisits++;

// store the new visit total into localStorage, key=numVisits-ls
//localStorage.setItem("lastVisits-ls", lastVisits);


//if (!lastVisits) {
//    visitMessage.textContent = "🥳 Welcome! Let us know if you have any questions.";
//} else {
//   const now = new Date();
//   const daysSinceLastVisit = Math.floor((now - new Date(lastVisits)) / (1000 * 60 * 60 * 24));

//   if (daysSinceLastVisit === 0) {
//        visitMessage.textContent = "Back so soon! Awesome!";
//    } else {
//        visitMessage.textContent = `You last visited ${daysSinceLastVisit} ${daysSinceLastVisit === 1 ? 'day' : 'days'} ago.`;
//    }
//}

const visitMessage = document.querySelector("#visitMessage");

// Get the stored timestamp for the last visit from localStorage
let lastVisitTimestamp = window.localStorage.getItem("lastVisit");

// If lastVisitTimestamp is null (meaning it's the first visit), show the welcome message
if (!lastVisitTimestamp) {
    visitMessage.textContent = "🥳 Welcome! Let us know if you have any questions.";
} else {
    // Convert the lastVisitTimestamp to a Date object
    lastVisitTimestamp = new Date(parseInt(lastVisitTimestamp));

    // Calculate the days since the last visit
    const daysSinceLastVisit = Math.floor((Date.now() - lastVisitTimestamp) / (1000 * 60 * 60 * 24));

    // Format the last visit date
    const lastVisitDate = lastVisitTimestamp.toLocaleDateString();

    // Show the appropriate message based on the days since last visit
    if (daysSinceLastVisit === 0) {
        visitMessage.textContent = "Back so soon! Awesome!";
    } else {
        visitMessage.textContent = `You last visited ${daysSinceLastVisit} ${daysSinceLastVisit === 1 ? 'day' : 'days'} ago on ${lastVisitDate}.`;
    }
}

// Update the lastVisitTimestamp in localStorage with the current timestamp
window.localStorage.setItem('lastVisit', Date.now().toString());