import React from "react";
import {Link} from "react-router-dom";

export const Home = () => {
    return (
        <div>
            <h2>Welcome</h2>
            <Link to={"/match"}>Start a new match</Link>
        </div>
    )
}