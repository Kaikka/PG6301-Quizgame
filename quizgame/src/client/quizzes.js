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

export async function getRandomQuizzes(numberOfQuizzes) {

    if(numberOfQuizzes < 1){
        throw "Invalid number of requested quizzes: " + numberOfQuizzes;
    }

    const url = "https://opentdb.com/api.php?difficulty=easy&type=multiple&category=18&amount=" + numberOfQuizzes;
    let response;
    let payload;

    try {
        response = await fetch(url);
        payload = await response.json();
    } catch (err) {
        return null;
    }

    if (response.status !== 200) {
        return null;
    }

    return payload.results.map(q => {

        const correct = Math.floor(Math.random() * Math.floor(3));
        const answers = q.incorrect_answers;
        answers.splice(correct, 0, q.correct_answer);

        return {
            question: q.question,
            answers: answers,
            correctAnswerIndex: correct,
            id: 0
        };
    })

/*    if(numberOfQuizzes > quizzes.length){
        throw "Too many quizzes";
    }

    const selection = Array(numberOfQuizzes);

    let i = 0;
    while (i < numberOfQuizzes) {

        const k = Math.floor(quizzes.length * Math.random());
        if (selection.includes(k)) {
            continue;
        }

        selection[i] = k;
        i++;
    }

    return Array.from(selection).map(e => quizzes[e]);*/

}
