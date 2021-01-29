import {Box, Container, makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    textContainer: {
        display: "flex",
        height: "100%",
        alignItems: "center",
    },
    textEmphasis: {
        borderBottomStyle: "solid",
        borderBottomWidth: "2px",
        borderColor: theme.palette.primary.main,
    }
}));

function HomepageText() {
    const {textContainer, textEmphasis} = useStyles();

    return (
        <Box className={textContainer}>
            <Container>
                <Typography variant={"h2"}>
                    Hi stranger,
                </Typography>
                <Typography variant={"h2"}>
                    Welcome to my portfolio.
                </Typography>
                <Typography variant={"subtitle1"}>
                    My name is <span className={textEmphasis}>Jonty Sponselee</span> and I am a <span
                    className={textEmphasis}>developer</span>.
                </Typography>
            </Container>
        </Box>
    );
}

export default HomepageText;