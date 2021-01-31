import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import NavigationBar from "./NavigationBar";
import AppBar from "@material-ui/core/AppBar";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    title: {
        flexGrow: 1,
    },
});

function PageHeader() {
    const {title} = useStyles();

    return (
        <AppBar position="sticky">
            <Toolbar>
                <Typography variant="h6" className={title}>
                    Jonty Sponselee | Portfolio
                </Typography>
                <NavigationBar/>
            </Toolbar>
        </AppBar>
    );
}

export default PageHeader;