import React from "react";
import ReactDOM from "react-dom";
import {getRandomQuizzes} from "./quizzes";


class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {quiz: getRandomQuizzes(1)[0]}
    }

    handleClick = (correct) => {
        if (correct) {
            alert('Correct!!!');
            this.setState({quiz: getRandomQuizzes(1)[0]})
        } else {
            alert('Wrong answer');
        }
    };

    renderAnswerTag(answer, correct) {

        //let onclick = correct ? "alert(\"Correct!\"); this.setState({quiz: getRandomQuizzes(1)[0]});" : "alert(\"Wrong!\");";
        //return <div className="answer" onClick={() => onclick}>{answer}</div>;

        return <div className="answer" onClick={() => this.handleClick(correct)}> {answer} </div>;
    }

    render() {

        const quiz = this.state.quiz;

        return (
            <>
                <p className='question'>Question: {quiz.question} </p>
                {this.renderAnswerTag(quiz.answers[0], quiz.correctAnswerIndex === 0)}
                {this.renderAnswerTag(quiz.answers[1], quiz.correctAnswerIndex === 1)}
                {this.renderAnswerTag(quiz.answers[2], quiz.correctAnswerIndex === 2)}
                {this.renderAnswerTag(quiz.answers[3], quiz.correctAnswerIndex === 3)}
            </>
        )
        // how can i make this above be a forEach?
    }
}

ReactDOM.render(<App/>, document.getElementById("root"));