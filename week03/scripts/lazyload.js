// Copyright year
document.getElementById("currentYear").innerHTML = new Date().getFullYear();

// Last modified date
document.addEventListener("DOMContentLoaded", function () {
    var lastModified = document.lastModified;
    document.getElementById("lastModified").textContent = lastModified;
});