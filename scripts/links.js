// Define the baseURL and linksURL variables.
const baseURL = 'https://kukkikd.github.io/wdd230/';
const linksURL = 'https://kukkikd.github.io/wdd230/data/links.json';

// Select the HTML ul element with the class "learningAct"
const activityLinks = document.querySelector('.learningAct');

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        const data = await response.json();
        displayLinks(data.weeks);
    } catch (error) {
        console.error('Error fetching links data:', error);
    }
}

const displayLinks = (weeks) => {
    weeks.forEach(week => {
        const li = document.createElement('li');
        const weekTitle = document.createTextNode(week.week + ': ');
        li.appendChild(weekTitle);

        week.activities.forEach((activity, index) => {
            const link = document.createElement('a');
            link.href = baseURL + activity.url;
            link.textContent = activity.title;
            li.appendChild(link);

            // Check if the current activity is not the last activity
            if (index < week.activities.length - 1) {
                const separator = document.createTextNode(' | ');
                li.appendChild(separator);
            }
        });

        activityLinks.appendChild(li);
    });
}

getLinks();