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
        question: "2+2?",
        answers: ["3", "1", "8", "4"],
        correctAnswerIndex: 3
    }
];

let currentQuizIndex = -1;

function displayQuiz(quiz) {
    const quizDiv = document.getElementById("quizDiv");

    let html = `<p class="question">Question: ${quiz.question}</p>`;

    //quiz.answers.forEach(e => html += `<div>${e}</div>`);

    // this loop should be sexified
    for (let i = 0; i < quiz.answers.length; i++) {
        let onclick = "";
        if (quiz.correctAnswerIndex === i) {
            onclick = "alert(\"Correct!\");  getQuiz();";
        } else {
            onclick = "alert(\"Wrong!\");";
        }
        html+= `<div class="answer" onclick='${onclick}'>${quiz.answers[i]}</div>`;
    }

    quizDiv.innerHTML = html;
}

function getQuiz() {

    let index = Math.floor(Math.random() * quizzes.length);

    if (index === currentQuizIndex) {
        index = (index + 1) % quizzes.length;
    }

    const quiz = quizzes[index];

    displayQuiz(quiz);
}