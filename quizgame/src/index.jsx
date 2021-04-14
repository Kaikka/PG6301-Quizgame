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

        return <div className="answer" key={answer} onClick={() => this.handleClick(correct)}> {answer} </div>;
    }

    render() {

        const quiz = this.state.quiz;

        return (
            <>
                <p className='question'>Question: {quiz.question} </p>
                {quiz.answers.map(e => this.renderAnswerTag(e, quiz.answers.indexOf(e) === quiz.correctAnswerIndex))}
            </>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById("root"));