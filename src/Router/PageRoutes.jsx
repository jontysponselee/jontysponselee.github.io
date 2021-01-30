import {Redirect, Route, Switch} from "react-router-dom";
import React from "react";
import ProjectsPage from "../pages/projectsPage/ProjectsPage";

function PageRoutes() {
    return (
        <Switch>
            <Route exact path={"/projects"}>
                <ProjectsPage/>
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