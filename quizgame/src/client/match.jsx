import React from "react";
import {getRandomQuizzes} from "./quizzes";

export class Match extends React.Component {

    constructor(props) {
        super(props);

        //this.state = {quiz: getRandomQuizzes(1)[0]}
        this.state = {
            match: null,
            error: null
        }
    }

    componentDidMount() {
        this.startNewMatch();
    }

    startNewMatch = async () => {

        const quizzes = await getRandomQuizzes(3);

/*        this.setState({
            match: {
                victory: false,
                defeat: false,
                quizzes: quizzes,
                currentIndex: 0,
                numberOfQuizzes: quizzes.length
            }
        });*/
        this.setState(!quizzes ? {error: "Error when connecting to server"}
        : {
            error: null,
            match: {
                victory: false,
                defeat: false,
                quizzes: quizzes,
                currentIndex: 0,
                numberOfQuizzes: quizzes.length
            }
        });

    };

    handleClick = (correct) => {
        if (correct) {
            if (this.state.match.currentIndex === (this.state.match.numberOfQuizzes - 1)) {
                //last quiz
                console.log("You win!")
                this.setState({match: {victory: true}});
            } else {
                //go on to next quiz
                console.log("Correct answer, going to next question.");
                this.setState(prev => ({
                    match: {
                        currentIndex: prev.match.currentIndex + 1,
                        quizzes: prev.match.quizzes,
                        numberOfQuizzes: prev.match.numberOfQuizzes
                    }
                }));
            }

        } else {
            console.log("Wrong answer...");
            this.setState({match: {defeat: true}});
        }
    };

    renderAnswerTag(answer, correct) {

        return <div className="answer" key={answer} onClick={() => this.handleClick(correct)} tabIndex="0"> {answer} </div>;
    }

    render() {

        if (this.state.error) {
            return <h2>{this.state.error}</h2>
        }

        if (!this.state.match) {
            return <h2>Loading...</h2>;
        }

        if (this.state.match.victory) {
            return (
                <div className="game-result">
                    <h2>You Won!</h2>
                    <div className="action">
                        <button className="play new-game-button" onClick={this.startNewMatch}>New Match</button>
                    </div>
                </div>
            );
        }

        if (this.state.match.defeat) {
            return (
                <div className="game-result">
                    <h2>Wrong Answer! You Lost!</h2>
                    <div className="action">
                        <button className="play new-game-button" onClick={this.startNewMatch}>New Match</button>
                    </div>
                </div>
            );
        }

        //const quiz = this.state.quiz;

        const match = this.state.match;
        const count = "" + (match.currentIndex + 1) + "/" + match.numberOfQuizzes;
        const quiz = match.quizzes[match.currentIndex];

        return (
            <>
                <p className='question'>Question {count}: {quiz.question} </p>
                {quiz.answers.map(e => this.renderAnswerTag(e, quiz.answers.indexOf(e) === quiz.correctAnswerIndex))}
            </>
        )
    }


}