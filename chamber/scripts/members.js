const baseURL = 'https://kukkikd.github.io/wdd230/';
const linksURL = 'https://kukkikd.github.io/wdd230/chamber/data/members.json';

document.addEventListener('DOMContentLoaded', () => {
    const directoryContainer = document.getElementById('directory-container');
    const gridViewButton = document.getElementById('grid-view');
    const listViewButton = document.getElementById('list-view');

    // ตรวจสอบว่า element ทั้งหมดถูกต้องและไม่เป็น null
    if (!directoryContainer || !gridViewButton || !listViewButton) {
        console.error('Error: One or more elements are not found in the document.');
        return;
    }

    fetch(linksURL)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Data fetched successfully:', data);
            displayMembers(data.members);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });

    const displayMembers = (members) => {
        if (directoryContainer.classList.contains('grid-view')) {
            directoryContainer.innerHTML = '';
            members.forEach(member => {
                const memberCard = document.createElement('section');
                memberCard.innerHTML = `
                    <img src="${baseURL}chamber/images/${member.image}" alt="${member.name}" loading ="lazy" width="100" height="100">
                    <h3>${member.name}</h3>
                    <p>🖁 ${member.phone}</p>
                    <p>${member.address}</p>
                    <a href="${member.website}" target="_blank">${member.website}</a>
                `;
                directoryContainer.appendChild(memberCard);
            });
        } else {
            directoryContainer.innerHTML = '';
            members.forEach(member => {
                const memberRow = document.createElement('section');
                memberRow.innerHTML = `
                    <h3>${member.name}</h3>
                    <p>${member.address}</p>
                    <p>${member.phone}</p>
                    <a href="${member.website}" target="_blank">${member.website}</a>
                `;
                directoryContainer.appendChild(memberRow);
            });
        }
    };

    gridViewButton.addEventListener('click', () => {
        directoryContainer.className = 'grid-view';
        fetch(linksURL)
            .then(response => response.json())
            .then(data => displayMembers(data.members))
            .catch(error => console.error('Error fetching data:', error));
    });

    listViewButton.addEventListener('click', () => {
        directoryContainer.className = 'list-view';
        fetch(linksURL)
            .then(response => response.json())
            .then(data => displayMembers(data.members))
            .catch(error => console.error('Error fetching data:', error));
    });
});