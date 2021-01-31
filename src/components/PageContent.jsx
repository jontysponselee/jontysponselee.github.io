import {Typography} from "@material-ui/core";
import PropTypes from "prop-types";

function PageContent({title, description}) {
    return (
        <>
            <Typography variant={"h3"} component={"h1"} gutterBottom>
                {title}
            </Typography>
            {description && (
                <Typography variant={"body1"} dangerouslySetInnerHTML={{__html: description}}/>
            )}
        </>
    );
}

PageContent.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
};

export default PageContent;