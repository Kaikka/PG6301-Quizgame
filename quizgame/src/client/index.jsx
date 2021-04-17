import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import {Match} from "./match";
import {Home} from "./home";

const NotFound = () => {

    return (
        <div>
            <h2>NOT FOUND: 404</h2>
            <p>
                ERROR: the paw you requwuested is not availible :3
            </p>
        </div>
    )
}

const App = () => {

    return(
        <BrowserRouter>
            <Switch>
                <Route exact path={"/"} component={Home} />
                <Route exact path={"/match"} component={Match} />
                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
    )

}

ReactDOM.render(<App/>, document.getElementById("root"));