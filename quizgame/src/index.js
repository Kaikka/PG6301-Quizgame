import {getRandomQuizzes} from "./quizzes";


function getAnswers(answer, correct) {

    let onclick = correct ? "alert(\"Correct!\"); EntryPoint.displayNewQuiz();" : "alert(\"Wrong!\");";

    return `<div class="answer" onclick='${onclick}'>${answer}</div>`;

}

function displayQuiz(quiz) {

    const quizDiv = document.getElementById("quizDivId");
    let html = "";

    html += `<p class="question">Question: ${quiz.question}</p>`;

    quiz.answers.forEach(e => html+= getAnswers(e, quiz.answers.indexOf(e) === quiz.correctAnswerIndex));

    quizDiv.innerHTML = html;
}

export function displayNewQuiz() {

    const quiz = getRandomQuizzes(1)[0];

    displayQuiz(quiz);
    console.log("Displays quiz: " + quiz.question);
}