import React, {useEffect, useState} from "react";
/*import getRandomQuizzes from "../server/db/quizzes";*/

export const Match = () => {
    const [match, setMatch] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        startNewMatch();
    }, [])

    const startNewMatch = async () => {
        const quizzes = await getRandomQuizzes();

        if (!quizzes) {
            setError("Error connecting to the server");
        }
        setError(null);
        setMatch({
            victory: false,
            defeat: false,
            quizzes: quizzes,
            currentIndex: 0,
            numberOfQuizzes: quizzes.length
        })
    }

    const getRandomQuizzes = async () => {
        const url = "/api/randomQuizzes/3";

        try {
            let res = await fetch(url);
            return await res.json();
        } catch (e) {
            setError(e);
        }
    }

    const handleClick = (correct) => {
        if (correct) {
            if (match.currentIndex === (match.numberOfQuizzes - 1)) {
                //last quiz
                console.log("You win!")
                setMatch({victory: true});
            } else {
                //go on to next quiz
                console.log("Correct answer, going to next question.");
                setMatch({
                    currentIndex: match.currentIndex + 1,
                    quizzes: match.quizzes,
                    numberOfQuizzes: match.numberOfQuizzes
                });
            }

        } else {
            console.log("Wrong answer...");
            setMatch({defeat: true});
        }
    }

/*    const renderAnswerTag = (answer, correct, index) => {
        return <div className={"answer"} key={index} onClick={() => handleClick(correct)} tabIndex="0"> {answer} </div>;
    }*/

    if (error) {
        return <h2>{error}</h2>
    }

    if (!match) {
        return <h2>Loading...</h2>;
    }

    if (match.victory) {
        return (
            <div className="game-result">
                <h2>You Won!</h2>
                <div className="action">
                    <button className="play new-game-button" onClick={startNewMatch}>New Match</button>
                </div>
            </div>
        );
    }

    if (match.defeat) {
        return (
            <div className="game-result">
                <h2>Wrong Answer! You Lost!</h2>
                <div className="action">
                    <button className="play new-game-button" onClick={startNewMatch}>New Match</button>
                </div>
            </div>
        );
    }

    const quiz = match.quizzes[match.currentIndex];

/*    return (
        <>
            <p className='question'>Question: {quiz.question} </p>
            {/!*{match.quizzes.answers.map(e => renderAnswerTag(e, match.quizzes.answers.indexOf(e) === match.quizzes.correctAnswerIndex))}*!/}
{/!*            {quiz.answers.map((answer, index) =>
                renderAnswerTag(answer, quiz.correctAnswerIndex === index, index))}*!/}
                quiz.answers.map
        </>
    )*/
    return (
        <>
            <p className='question'>Question: {quiz.question} </p>
            {quiz.answers.map((answer, index) => (
                <div
                    className={"answer"}
                    key={index}
                    onClick={() => handleClick(quiz.correctAnswerIndex === index)}
                >
                    {answer}
                </div>
            ))}
        </>
    )
}


