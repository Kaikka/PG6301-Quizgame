import React from "react";
import {Link} from "react-router-dom";

export class Home extends React.Component {


    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>Quizgame</h2>
                <p className={"welcome-text"}>
                    Welcome to my quizgame uwu :^)
                </p>

                <div className={"action"}>
                    <Link to={"/match"}>New match!</Link>
                </div>
            </div>
        )
    }
}