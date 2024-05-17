// Ensure passwords match
const password1 = document.querySelector("#password");
const password2 = document.querySelector("#confirmPassword");
const feedback = document.querySelector("#feedback");

password2.addEventListener('focusout', controlar)

function controlar() {
    //console.log('inside the function')
    if (password1.value !== password2.value) {
        //console.log('no match')
        password1.value = ""
        password2.value = ""
        password1.focus()
        feedback.textContent = "Passwords do not match. Please try again."
    } else {
        //console.log(Yea)
        feedback.textContent = ""
    }
}


const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("r");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}