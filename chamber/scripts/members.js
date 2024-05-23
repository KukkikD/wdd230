// Define the baseURL and linksURL variables.
const baseURL = 'https://kukkikd.github.io/wdd230/';
const linksURL = 'https://kukkikd.github.io/wdd230/data/members.json';

document.addEventListener('DOMContentLoaded', () => {
    const membersContainer = document.getElementById('members-container');
    const gridViewButton = document.getElementById('grid-view');
    const listViewButton = document.getElementById('list-view');

    fetch('data/members.json')
        .then(response => response.json())
        .then(data => {
            displayMembers(data.members);
        });

    const displayMembers = (members) => {
        membersContainer.innerHTML = '';
        members.forEach(member => {
            const memberCard = document.createElement('div');
            memberCard.className = 'member-card';
            memberCard.innerHTML = `
                <img src="images/${member.image}" alt="${member.name}">
                <h3>${member.name}</h3>
                <p>${member.description}</p>
                <p>📞 ${member.phone}</p>
                <p>${member.address}</p>
                <a href="${member.website}" target="_blank">${member.website}</a>
                <p>Membership Level: ${member.membership_level}</p>
            `;
            membersContainer.appendChild(memberCard);
        });
    };

    gridViewButton.addEventListener('click', () => {
        membersContainer.className = 'grid-view';
    });

    listViewButton.addEventListener('click', () => {
        membersContainer.className = 'list-view';
    });
});