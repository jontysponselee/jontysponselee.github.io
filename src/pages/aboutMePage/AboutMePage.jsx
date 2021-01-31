import {Box, Grid, Paper, Tab, Tabs, Typography, useTheme} from "@material-ui/core";
import useImage from "../../hooks/useImage";
import {makeStyles} from "@material-ui/core/styles";
import {useState} from "react";
import SwipeableViews from 'react-swipeable-views';
import ExperienceTabs from "./ExperienceTabs";

const useStyles = makeStyles((theme) => ({
    img: {
        maxWidth: "100%",
        maxHeight: '100%',
    }
}));

// @todo jaartal tijdgebaseerd maken

function AboutMeContent() {
    const classes = useStyles();
    const aboutMeImage = useImage("aboutMeImage.jpeg");

    return (
        <Grid container spacing={4}>
            <Grid item xs={12} sm={7}>
                <Typography variant={"h3"} component={"h1"} gutterBottom>
                    About me
                </Typography>
                <Typography variant={"body1"}>
                    Hi, my name is Jonty Sponselee and I am a developer.
                    I am 23 years old and based in Utrecht.
                    I’m currently a student at the HU University of Applied Sciences Utrecht,
                    where I am enrolled in Open-ICT, a project-based course. I specialise in back-end and web development.
                    I am also interested in AI and data science. I am an analytical, hard-working problem-solver,
                    who is always looking for cutting-edge technologies to continue improving my skills.
                </Typography>
            </Grid>
            <Grid item xs>
                <Box maxWidth={256} ml={"auto"}>
                    <img className={classes.img} src={aboutMeImage} alt={"Picture of me"}/>
                </Box>
            </Grid>
        </Grid>
    );
}


function AboutMePage() {
    return (
        <>
            <Box mb={6}>
                <AboutMeContent/>
            </Box>
            <ExperienceTabs/>
        </>
    );
}

export default AboutMePage;