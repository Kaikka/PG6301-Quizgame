const quizzes = [
    {
        question: "Your real main in WoW?",
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

const getRandomQuizzes = (numberOfQuizzes) => {

    if(numberOfQuizzes < 1){
        throw "Invalid number of requested quizzes: " + numberOfQuizzes;
    }

    if(numberOfQuizzes > quizzes.length){
        throw "Too many quizzes";
    }

    const selection = Array(numberOfQuizzes);

    let i = 0;
    while (i < numberOfQuizzes) {

        const k = Math.floor(quizzes.length * Math.random());
        if (selection.includes(k)) {
            continue;}
        selection[i] = k;
        i++;
    }

    return Array.from(selection).map(e => quizzes[e]);
}

const getAllQuizzes = () => {
    return quizzes;
}

module.exports = {getAllQuizzes, getRandomQuizzes};