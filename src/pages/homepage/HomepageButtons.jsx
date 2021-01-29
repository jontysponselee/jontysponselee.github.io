import {Box, Button, makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(2),
        "& > *": {
            marginRight: theme.spacing(2),
        }
    },
}));

function HomepageButtons() {
    const {root} = useStyles();

    return (
        <Box className={root}>
            <Button variant="contained" color="primary" href={"/projects"}>
                Projects
            </Button>
            <Button variant="outlined" color="accent" href={"/toolkit"}>
                Toolkit
            </Button>
        </Box>
    )
}

export default HomepageButtons;