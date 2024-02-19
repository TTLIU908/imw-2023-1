// Interaction - Click on a circle to change background color of container.
const colors = document.querySelectorAll('.colors');

colors.forEach(color => {
    color.addEventListener('click', () => {
        const colorName = color.id;
        document.getElementById('interactionContainer').style.backgroundColor = colorName;
    });
});

// Loop - Use a for loop to add repeating text.
const loopContainer = document.getElementById('loopContainer');
const repeatingText = 'E6  ';
let loopText = '';

for (let i = 0; i < 21; i++) {
    loopText += repeatingText;
}

loopContainer.innerHTML += '<p>' + loopText + '</p>';


// Condition - Change the color of the square based on a set of conditions.
const square = document.getElementById('square'); 

let condition = true;

if (condition) {
    square.style.backgroundColor = 'lightgreen';
} else {
    square.style.backgroundColor = 'plum';
}

// Time - Increase the font size of the text as time passes.
const increaseText = document.getElementById('increaseText');

let fontSize = 16;

setInterval(() => {
    fontSize += 1;
    increaseText.style.fontSize = fontSize + 'px';
}, 1000);

// Input - Display the number of characters from an input field.
const inputText = document.getElementById('inputText');
const textLength = document.getElementById('text-length');

inputText.addEventListener('input', () => {
    const length = inputText.value.length;
    textLength.textContent = 'Number of characters: ' + length;
});

// Console - Print a message of your choice to the console.
console.log('Hello, world!');
