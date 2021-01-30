import {BrowserRouter, Route, Switch} from "react-router-dom";
import Homepage from "../pages/homepage/Homepage";
import PageRoutes from "./PageRoutes";
import PageHeader from "../components/pageHeader/PageHeader";

function ApplicationRouter() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={"/"}>
                    <Homepage/>
                </Route>
                <Route>
                    <PageHeader/>
                    <PageRoutes/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default ApplicationRouter;