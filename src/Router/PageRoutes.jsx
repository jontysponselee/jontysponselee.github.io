import {Redirect, Route, Switch} from "react-router-dom";
import React from "react";
import ProjectsPage from "../pages/projectsPage/ProjectsPage";
import AboutMePage from "../pages/aboutMePage/AboutMePage";

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
                <AboutMePage/>
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