import {getRandomQuizzes} from "./quizzes";

function displayQuiz(quiz) {
    const quizDiv = document.getElementById("quizDiv");

    let html = "";

    html += `<p class="question">Question: ${quiz.question}</p>`;

    quiz.answers.forEach(e => html+= getAnswers(e, quiz.answers.indexOf(e) === quiz.correctAnswerIndex));

    quizDiv.innerHTML = html;
}

function getAnswers(answer, correct) {

    let onclick = correct ? "alert(\"Correct!\"); getQuiz();" : "alert(\"Wrong!\");";

    return `<div class="answer" onclick='${onclick}'>${answer}</div>`;

}

function getQuiz() {

/*    let index = Math.floor(Math.random() * quizzes.length);

    if (index === currentQuizIndex) {
        // yoinked from Andrea :^)
        index = (index + 1) % quizzes.length;
    }

    const quiz = quizzes[index];
    currentQuizIndex = index;*/
    const quiz = getRandomQuizzes(1)[0];

    displayQuiz(quiz);
}

getQuiz();