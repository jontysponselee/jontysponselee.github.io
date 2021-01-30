import {Box, Button, makeStyles} from "@material-ui/core";
import {Link} from "react-router-dom";

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
            <Button variant="contained" color="primary" component={Link} to="/projects">
                Projects
            </Button>
            <Button variant="outlined" color="accent" component={Link} to={"/toolkit"}>
                Toolkit
            </Button>
        </Box>
    )
}

export default HomepageButtons;