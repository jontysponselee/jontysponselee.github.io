import {Box, makeStyles} from "@material-ui/core";
import {homepageImageUrl} from "../App";

const useStyles = makeStyles(() => ({
    backgroundImage: {
        backgroundImage: `url(${homepageImageUrl})`,
        filter: "opacity(15%) grayscale(100%)",
        backgroundSize: "cover",
        zIndex: "-1",
        position: "absolute",
        top: "0px",
        right: "0px",
        bottom: "0px",
        left: "0px"
    }
}));

function FullWindowBackgroundImage({children}) {
    const {backgroundImage} = useStyles();

    return (
        <Box height="100vh" position="relative">
            <Box className={backgroundImage} height="100%"/>
            {children}
        </Box>
    );
}

export default FullWindowBackgroundImage