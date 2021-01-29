import FullWindowBackgroundImage from "../../components/FullWindowBackgroundImage";
import HomepageText from "./HomepageText";
import {Box, Container} from "@material-ui/core";
import HomepageButtons from "./HomepageButtons";

function Homepage() {
    return (
        <FullWindowBackgroundImage>
            <Box height="100%" display="flex" alignItems="center">
                <Container>
                    <HomepageText/>
                    <HomepageButtons/>
                </Container>
            </Box>
        </FullWindowBackgroundImage>
    );
}

export default Homepage;