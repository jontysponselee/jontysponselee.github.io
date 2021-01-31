import {Box, Card, CardContent, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
    experienceCard: {
        display: "flex",
        maxWidth: 500,
        marginBottom: theme.spacing(4),
        marginLeft: "auto",
        marginRight: "auto"
    },
    experienceImgContainer: {
        backgroundColor: theme.palette.secondary.main,
        display: "flex",
        alignItems: "center"
    },
    experienceImg: {
        width: 125,
        height: 125,
        objectFit: "contain",
    },
}));

function ExperienceCard({title, subtitle, startDate, endDate, coverUrl}) {
    const classes = useStyles();

    const duration = `${startDate} - ${endDate}`;

    return (
        <Card className={classes.experienceCard} elevation={3}>
            <Box className={classes.experienceImgContainer}>
                <img src={coverUrl} alt="logo" className={classes.experienceImg}/>
            </Box>
            <CardContent>
                <Typography variant={"h5"}>{title}</Typography>
                <Typography>{subtitle}</Typography>
                <Typography variant={"subtitle2"} color={"textSecondary"}>{duration}</Typography>
            </CardContent>
        </Card>
    );
}

ExperienceCard.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    coverUrl: PropTypes.string.isRequired,
};

export default ExperienceCard;