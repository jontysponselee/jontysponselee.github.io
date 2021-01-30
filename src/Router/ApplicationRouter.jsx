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
                        <Box mt={3}>
                            <Paper elevation={2}>
                                <PageRoutes/>
                            </Paper>
                        </Box>
                    </Container>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default ApplicationRouter;