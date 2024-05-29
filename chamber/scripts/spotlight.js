const baseURL = 'https://kukkikd.github.io/wdd230/';
const membersURL = 'https://kukkikd.github.io/wdd230/chamber/data/members.json';

async function fetchMembers() {
    try {
        const response = await fetch(membersURL);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Fetched members:', data.members); // เพิ่มการดีบั๊ก
        return data.members;
    } catch (error) {
        console.error('Error fetching members data:', error);
        return [];
    }
}

function getRandomMembers(members, count) {
    const silverGoldMembers = members.filter(member => member.membership_level === 'Silver' || member.membership_level === 'Gold');
    console.log('Filtered members:', silverGoldMembers); // เพิ่มการดีบั๊ก
    if (silverGoldMembers.length < count) {
        console.warn('Not enough members to display in spotlight');
        return silverGoldMembers; // ส่งกลับสมาชิกทั้งหมดที่มี
    }
    const shuffled = silverGoldMembers.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

async function displaySpotlightMembers() {
    const members = await fetchMembers();
    if (members.length === 0) {
        console.error('No members found'); // เพิ่มการดีบั๊ก
        return;
    }
    const spotlightMembers = getRandomMembers(members, 3);
    console.log('Spotlight members:', spotlightMembers); // เพิ่มการดีบั๊ก
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