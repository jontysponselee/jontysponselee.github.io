import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Chip,
    Collapse,
    Grid,
    IconButton,
    Typography, TypographyVariant
} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import projects from "../../data/projects";
import useImage from "../../hooks/useImage";
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    tags: {
        "& > *": {
            marginRight: theme.spacing(1),
            marginBottom: theme.spacing(1),
        }
    },
    media: {
        height: 140,
    },
    description: {
        "& a": {
            color: theme.palette.primary[400],
            "&:hover": {
                color: theme.palette.secondary.main
            }
        }
    }
}));

function ProjectTags({tags}) {
    const classes = useStyles();

    return (
        <Box className={classes.tags}>
            {tags.map(tag => (
                <Chip label={tag} variant="outlined" size={"small"}/>
            ))}
        </Box>
    );
}

function ProjectCardText({project}) {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const classes = useStyles();

    return (
        <>
            <Box display={"flex"}>
                <Typography variant="h5" component="h2">
                    {project.title}
                </Typography>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon/>
                </IconButton>
            </Box>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <Typography variant={"body2"} dangerouslySetInnerHTML={{__html: project.description}} className={classes.description} />
            </Collapse>
        </>
    );
}

function ProjectCard({project}) {
    const classes = useStyles();
    const imageUrl = useImage(`projects/${project.imageUrl}`)

    return (
        <Grid item xs={12} md={6} lg={4} className={classes.projectCard}>
            <Card elevation={3}>
                <CardMedia image={imageUrl} className={classes.media}/>
                <CardContent>
                    <ProjectTags tags={project.tags}/>
                    <ProjectCardText project={project}/>
                </CardContent>
            </Card>
        </Grid>
    );
}

function Projects() {
    return (
        <Grid container spacing={4}>
            {projects.map((project, index) => (
                <ProjectCard project={project} key={index}/>
            ))}
        </Grid>
    );
}

export default Projects;