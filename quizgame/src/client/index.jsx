import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import {Match} from "./match";

const App = () => {

    return(
        <Match/>
    )

}

ReactDOM.render(<App/>, document.getElementById("root"));