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
                <p>Welcome to my quizgame uwu :^)</p>
                <Link to={"/match"}>New match!</Link>
            </div>
        )
    }
}