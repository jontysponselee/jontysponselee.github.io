import PageContent from "../../components/PageContent";
import {Box, IconButton, Link, Typography} from "@material-ui/core";
import {AlternateEmail, GitHub, LinkedIn} from "@material-ui/icons";
import {createElement} from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
        "&:hover": {
            color: theme.palette.primary["400"],
            "& .icon": {
                color: theme.palette.primary["400"]
            }
        }
    },
    icon: {

    }
}));

function BoxedSocialMedia({icon, text, to}) {
    const classes = useStyles();

    return (
        <Link href={to} target="_blank" rel="noopener noreferrer" color={"textPrimary"} className={classes.root}>
            <Box display="flex" alignItems="center">
                <Box pr={1} py={1} className="icon">
                    {createElement(icon)}
                </Box>
                <Typography>{text}</Typography>
            </Box>
        </Link>
    );
}

function ContactMePage() {
    return (
        <>
            <PageContent title={"Get in touch"}/>
            <BoxedSocialMedia
                icon={GitHub}
                text="Let's code together"
                to="https://github.com/jontysponselee"
            />
            <BoxedSocialMedia
                icon={LinkedIn}
                text="Let's extend our network"
                to="https://www.linkedin.com/in/jonty-sponselee"
            />
            <BoxedSocialMedia
                icon={AlternateEmail}
                text="Let's e-mail"
                to="mailto:jsponselee97@gmail.com"
            />
        </>
    );
}

export default ContactMePage;