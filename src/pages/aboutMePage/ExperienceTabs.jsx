import {Box, Paper, Tab, Tabs, Typography, useMediaQuery, useTheme} from "@material-ui/core";
import {useState} from "react";
import SwipeableViews from "react-swipeable-views";
import {makeStyles} from "@material-ui/core/styles";
import Education from "./Education";
import WorkExperience from "./WorkExperience";

// @todo retrieve experience and education data from LinkedIn API

const useStyles = makeStyles((theme) => ({
    tabs: {
        backgroundColor: theme.palette.primary["400"],
    },
    experienceTabs: {
        marginLeft: theme.spacing(-4),
        marginRight: theme.spacing(-4),
    },
    [theme.breakpoints.up('sm')]: {
        experienceTabs: {
            marginLeft: "unset",
            marginRight: "unset",
        }
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

function WithTabs() {
    const classes = useStyles();

    return (
        <>
            <Tabs
                className={classes.tabs}
                variant="fullWidth"
                aria-label="Experience tabs"
            >
                <Tab label="Education"/>
                <Tab label="Work experience"/>
            </Tabs>
            <Box display="flex">
                <Box flex={"100%"} p={4} pr={2}>
                    <Education/>
                </Box>
                <Box flex={"100%"} p={4} pl={2}>
                    <WorkExperience/>
                </Box>
            </Box>
        </>
    );
}

function WithSwipeableTabs() {
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
        <>
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
        </>
    );
}

function ExperienceTabs() {
    const classes = useStyles();
    const theme = useTheme();
    const mediumScreen = useMediaQuery(theme.breakpoints.up("md"));

    return (
        <Paper variant={"outlined"} className={classes.experienceTabs}>
            {mediumScreen
                ? <WithTabs/>
                : <WithSwipeableTabs/>
            }
        </Paper>
    );
}

export default ExperienceTabs;