import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import NavigationBar from "./NavigationBar";
import AppBar from "@material-ui/core/AppBar";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Button, IconButton, SwipeableDrawer, useMediaQuery, useTheme} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles({
    title: {
        flexGrow: 1,
    },
});

function HamburgerMenu() {
    const [openMenu, setOpenMenu] = React.useState(false);

    const toggleDrawer = (open) => () => {
        setOpenMenu(open);
    };

    return (
        <>
            <IconButton aria-label="menu" onClick={toggleDrawer(true)}>
                <MenuIcon/>
            </IconButton>
            <SwipeableDrawer
                anchor={"right"}
                open={openMenu}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
            >
                <NavigationBar column/>
            </SwipeableDrawer>
        </>
    );
}

function PageHeader() {
    const {title} = useStyles();
    const theme = useTheme();
    const mediumScreen = useMediaQuery(theme.breakpoints.up("md"));

    return (
        <AppBar position="sticky">
            <Toolbar>
                <Typography variant="h6" className={title}>
                    Jonty Sponselee | Portfolio
                </Typography>
                {mediumScreen
                    ? <NavigationBar/>
                    : <HamburgerMenu />
                }

            </Toolbar>
        </AppBar>
    );
}

export default PageHeader;