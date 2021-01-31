import education from "../../data/education.json";
import useImage from "../../hooks/useImage";
import ExperienceCard from "../../components/ExperienceCard";

function Education() {
    return (
        <>
            {education.map(study =>
                <Study study={study}/>
            )}
        </>
    );
}

function Study({study}) {
    const studyImage = useImage(`education/${study.imageUrl}`);

    return (
        <ExperienceCard
            title={study.name}
            subtitle={study.course}
            coverUrl={studyImage}
            startDate={study.enrollmentYear}
            endDate={study.graduationYear}
        />
    );
}

export default Education;