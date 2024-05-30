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

