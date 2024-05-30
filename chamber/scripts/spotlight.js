const baseURL = 'https://kukkikd.github.io/wdd230/';
const membersURL = 'https://kukkikd.github.io/wdd230/chamber/data/members.json';

async function fetchMembers() {
    try {
        const response = await fetch(membersURL);
        const data = await response.json();
        return data.members;
    } catch (error) {
        console.error('Error fetching members data:', error);
        return [];
    }
}

function getRandomMembers(members, count) {
    const silverGoldMembers = members.filter(member => member.membership_level === 'Silver' || member.membership_level === 'Gold');
    const shuffled = silverGoldMembers.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

async function displaySpotlightMembers() {
    const members = await fetchMembers();
    const spotlightMembers = getRandomMembers(members, 3);
    const spotlightContainer = document.getElementById('spotlight');

    spotlightContainer.innerHTML = '';
    spotlightMembers.forEach(member => {
        const memberElement = document.createElement('div');
        memberElement.classList.add('spotlight-item');
        memberElement.innerHTML = `
            <img src="${baseURL}chamber/images/${member.image}" alt="${member.name}" />
            <h3>${member.name}</h3>
            <p>${member.description}</p>
            <p>☏ ${member.phone}</p>
            <a href="${member.website}" target="_blank">${member.website}</a>
        `;
        spotlightContainer.appendChild(memberElement);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    displaySpotlightMembers();
});