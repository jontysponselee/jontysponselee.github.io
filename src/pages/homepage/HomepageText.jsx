import {makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    textEmphasis: {
        borderBottomStyle: "solid",
        borderBottomWidth: "2px",
        borderColor: theme.palette.primary.main,
    }
}));

function HomepageText() {
    const {textEmphasis} = useStyles();

    return (
        <>
            <Typography variant={"h2"}>
                Hi stranger,
            </Typography>
            <Typography variant={"h2"}>
                Welcome to my portfolio.
            </Typography>
            <Typography variant={"subtitle1"} gutterBottom>
                My name is <span className={textEmphasis}>Jonty Sponselee</span> and I am a <span
                className={textEmphasis}>developer</span>.
            </Typography>
        </>
    );
}

export default HomepageText;