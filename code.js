const quizzes = [
    {
        question: "Whats your real main in WoW?",
        answers: ["Druid", "Priest", "Paladin", "Shaman"],
        correctAnswerIndex: 2
    },
    {
        question: "Best DotA player?",
        answers: ["Ana", "vigoss", "SumaiL", "Kimkka"],
        correctAnswerIndex: 1
    },
    {
        question: "Best football player?",
        answers: ["Francesco Totti", "Cristiano Ronaldo", "Romario", "Tore André Flo"],
        correctAnswerIndex: 0
    }
];

let currentQuizIndex = -1;

function displayQuiz(quiz) {
    const quizDiv = document.getElementById("quizDiv");

    let html = `<p class="question">Question: ${quiz.question}</p>`;

    quiz.answers.forEach(e => html+= getAnswers(e, quiz.answers.indexOf(e) === quiz.correctAnswerIndex));

    quizDiv.innerHTML = html;
}

function getAnswers(answer, correct) {

    let html = "";
    let onclick;

    onclick = correct ? "alert(\"Correct!\");  getQuiz();" : "alert(\"Wrong!\");";

    html += `<div class="answer" onclick='${onclick}'>${answer}</div>`;

    return html;
}

function getQuiz() {

    let index = Math.floor(Math.random() * quizzes.length);

    if (index === currentQuizIndex) {
        // yoinked from Andrea :^)
        index = (index + 1) % quizzes.length;
    }

    const quiz = quizzes[index];
    currentQuizIndex = index;

    displayQuiz(quiz);
}