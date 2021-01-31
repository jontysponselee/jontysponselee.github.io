import {Box, Link} from "@material-ui/core";
import {NavLink} from "react-router-dom";
import React, {forwardRef} from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        "& > *": {
            transition: theme.transitions.create(),
            marginLeft: theme.spacing(2),
            paddingBottom: theme.spacing(0.5),
            "&:hover": {
                color: theme.palette.text.primary,
                textDecoration: "none",
                borderBottom: "1px solid",
                borderColor: theme.palette.text.primary,
            }
        }
    },
    activeNavLink: {
        color: theme.palette.text.primary,
        borderBottom: "1px solid",
        borderColor: theme.palette.text.primary,
    },
}));

const NavigationLink = forwardRef((props, ref) => {
    const {activeNavLink} = useStyles();

    return <Link exact ref={ref} component={NavLink} color={"textSecondary"}
                 activeClassName={activeNavLink} {...props} />
});

function NavigationBar() {
    const {root} = useStyles();

    return (
        <Box className={root}>
            <NavigationLink to="/">Home</NavigationLink>
            <NavigationLink to="/projects">Projects</NavigationLink>
            <NavigationLink to="/about-me">About me</NavigationLink>
            <NavigationLink to="/contact">Contact</NavigationLink>
        </Box>
    );
}

export default NavigationBar;