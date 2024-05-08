// Declare three const variables that hold references to
// the input, button, and list elements.
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

//declare an array named chaptersArray 
//and assign it to the results of a defined function named getChapterList
let chaptersArray = getChapterList() || [];

//  populate the displayed list of chapters
chaptersArray.forEach(chapter => {
    displayList(chapter);
});

//Change the button click event listener to only do the following tasks 
button.addEventListener('click', () => {
    if (input.value !== '') {     //check if the input is empty or not
        displayList(input.value); // call displayList with the input.value argument
        chaptersArray.push(input.value); // push the input.value into the chaptersArray,
        setChapterList();  // update the localStorage with the new array by calling a function named setChapterList
        input.value = ''; // set the input.value to nothing
        input.focus(); //set the focus back to the input
    }
});

//Create the displayList defined function that receives one parameter named item.
//Put all the code that builds a list item from the previous button click event listener 
//into this new displayList function and use the item parameter as the input. 
//A deleteChapter function will need to be called within the delete button click event to remove 
//the chapter from the array and localStorage.

function displayList(item) {
    const li = document.createElement("li");
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');
    li.textContent = item;
    li.append(deleteButton);
    list.append(li);
    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(li.textContent); //Delete chapter from localStorage. **Can't put "item" paramiter will delete only onthe current page but not LocalStorage.
        input.focus();
    });
}

//Define the setChapterList function to set the localStorage item that you have already named. 
//Use JSON.stringify() to stringify the array.
function setChapterList() {
    localStorage.setItem('chaptersBOM', JSON.stringify(chaptersArray));
}

//Define the getChapterList function to get the localStorage item. No parameter is needed. 
//Since this function returns to an awaiting array, we will need to use JSON.parse on the string.
function getChapterList() {
    const storedChapters = localStorage.getItem('chaptersBOM');
    return JSON.parse(storedChapters);
}

function deleteChapter(chapter) {
    // Remove the last character from the chapter (the ❌ symbol)
    chapter = chapter.slice(0, chapter.length - 1);

    // Use filter to create a new array excluding the chapter to be deleted
    chaptersArray = chaptersArray.filter((item) => item !== chapter);

    // Update the localStorage with the modified array
    setChapterList();
}

