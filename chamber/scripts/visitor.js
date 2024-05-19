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