// Update this in your script.js file

function toggleAnswer(questionNumber) {
    const answer = document.querySelector(`.question:nth-child(${questionNumber}) .answer`);
    answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';
}
