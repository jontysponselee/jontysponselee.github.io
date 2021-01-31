import education from "../../data/education.json";
import {Box, Card, CardContent, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import useImage from "../../hooks/useImage";

const useStyles = makeStyles((theme) => ({
    studyCard: {
        display: "flex",
        maxWidth: 500,
        marginBottom: theme.spacing(4),
        marginLeft: "auto",
        marginRight: "auto"
    },
    studyImgContainer: {
        backgroundColor: theme.palette.secondary.main,
        display: "flex",
        alignItems: "center"
    },
    studyImg: {
        width: "100%",
        maxWidth: 125,
        objectFit: "contain",
        padding: theme.spacing(1)
    },
}));

function Study({study}) {
    const classes = useStyles();
    const studyImage = useImage(`education/${study.imageUrl}`);

    const duration = `${study.enrollmentYear} - ${study.graduationYear}`;
    const logoLabel = `${study.name} logo`;

    return (
        <Card className={classes.studyCard} elevation={3}>
            <Box className={classes.studyImgContainer}>
                <img src={studyImage} alt={logoLabel} className={classes.studyImg}/>
            </Box>
            <CardContent>
                <Typography variant={"h5"}>{study.name}</Typography>
                <Typography>{study.course}</Typography>
                <Typography variant={"subtitle2"} color={"textSecondary"}>{duration}</Typography>
            </CardContent>
        </Card>
    );
}

function Education() {
    return (
        <>
            {education.map(study =>
                <Study study={study}/>
            )}
        </>
    );
}

export default Education;