import {BrowserRouter, Route, Switch} from "react-router-dom";
import Homepage from "../pages/homepage/Homepage";
import PageRoutes from "./PageRoutes";
import PageHeader from "../components/pageHeader/PageHeader";
import {Box, Container, Paper} from "@material-ui/core";

function ApplicationRouter() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={"/"}>
                    <Homepage/>
                </Route>
                <Route>
                    <PageHeader/>
                    <Container>
                        <Box mt={4} p={4} component={Paper} elevation={2}>
                            <PageRoutes/>
                        </Box>
                    </Container>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default ApplicationRouter;