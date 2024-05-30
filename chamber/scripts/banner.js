function handleModalDisplay() {
    const modal = document.getElementById('myModal');
    const closeModal = document.getElementsByClassName('close')[0];
    const currentDay = new Date().getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday

    if (currentDay === 1 || currentDay === 2 || currentDay === 3) {
        modal.style.display = 'block';
        console.log('Displaying modal');
    }

    closeModal.onclick = function () {
        modal.style.display = 'none';
    }

    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    handleModalDisplay();
});