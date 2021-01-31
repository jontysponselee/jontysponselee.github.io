import {Box, Paper, Tab, Tabs, Typography, useTheme} from "@material-ui/core";
import {useState} from "react";
import SwipeableViews from "react-swipeable-views";
import {makeStyles} from "@material-ui/core/styles";
import Education from "./Education";
import WorkExperience from "./WorkExperience";

// @todo retrieve experience and education data from LinkedIn API

const useStyles = makeStyles((theme) => ({
    tabs: {
        backgroundColor: theme.palette.primary["400"],
    }
}));

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <Box
            p={3}
            role="tabpanel"
            hidden={value !== index}
            id={`experience-tabpanel-${index}`}
            aria-labelledby={`experience-tab-${index}`}
            {...other}
        >
            <Typography>{children}</Typography>
        </Box>
    );
}

function ExperienceTabs() {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleSwipeChange = (index) => {
        setValue(index);
    };

    const tabProps = (index) => ({
        id: `experience-tab-${index}`,
        'aria-controls': `experience-tabpanel-${index}`,
    });

    return (
        <Paper variant={"outlined"}>
            <Tabs
                className={classes.tabs}
                value={value}
                onChange={handleChange}
                variant="fullWidth"
                aria-label="Experience tabs"
            >
                <Tab label="Education" {...tabProps(0)} />
                <Tab label="Work experience" {...tabProps(1)} />
            </Tabs>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleSwipeChange}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>
                    <Education/>
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    <WorkExperience/>
                </TabPanel>
            </SwipeableViews>
        </Paper>
    );
}

export default ExperienceTabs;