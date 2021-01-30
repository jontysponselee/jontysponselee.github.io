import {Redirect, Route, Switch} from "react-router-dom";
import React from "react";

function PageRoutes() {
    return (
        <Switch>
            <Route exact path={"/projects"}>
                <p>Projects</p>
            </Route>
            <Route exact path={"/toolkit"}>
                <p>toolkit</p>
            </Route>
            <Route exact path={"/about-me"}>
                <p>About me</p>
            </Route>
            <Route exact path={"/contact-me"}>
                <p>Contact me</p>
            </Route>
            <Route path={"*"}>
                <Redirect to={"/"}/>
            </Route>
        </Switch>
    );
}

export default PageRoutes;