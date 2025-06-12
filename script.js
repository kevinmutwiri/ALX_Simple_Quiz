// Wrap the entire script in a DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', () => {
    function checkAnswer() {
        const correctAnswer = "4";

        const selectedChoice = document.querySelector('input[name="quiz"]:checked');
        const feedbackElement = document.getElementById('feedback');

        if (selectedChoice) {
            const userAnswer = selectedChoice.value;

            if (userAnswer === correctAnswer) {
                feedbackElement.textContent = "Correct! Well done.";
                // feedbackElement.style.color = "#28a745";
            } else {
                feedbackElement.textContent = "That's incorrect. Try again!";
                // feedbackElement.style.color = "#dc3545";
            }
        } // else {
        //     // If no choice was selected, prompt the user to make a selection.
        //     feedbackElement.textContent = "Please select an answer.";
        //     feedbackElement.style.color = "#ffc107"; // Orange for warning
        // }
        feedbackElement.style.display = 'block';
    }

    const submitButton = document.getElementById('submit-answer');

    if (submitButton) {
        submitButton.addEventListener('click', checkAnswer);
    } else {
        console.error('Submit button not found!');
    }
});
