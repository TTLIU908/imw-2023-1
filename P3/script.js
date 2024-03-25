document.addEventListener('DOMContentLoaded', function() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    const guessInput = document.getElementById('guessInput');
    const guessButton = document.getElementById('guessButton');
    const message = document.getElementById('message');

    let attempts = 0;

    guessButton.addEventListener('click', function() {
        const guess = parseInt(guessInput.value);
        if (isNaN(guess) || guess < 1 || guess > 100) {
            message.textContent = 'Please enter a valid number between 1 and 100.';
            return;
        }

        attempts++;

        if (guess === randomNumber) {
            message.textContent = `Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts 🥳.`;
            guessInput.disabled = true;
            guessButton.disabled = true;
        } else if (guess < randomNumber) {
            message.textContent = 'Try a higher number.';
        } else {
            message.textContent = 'Try a lower number.';
        }
    });
});
