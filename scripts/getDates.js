// Copyright year
document.getElementById("currentYear").innerHTML = new Date().getFullYear();

// Last modified date
document.getElementById("lastModified").innerHTML = document.lastModified;



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
