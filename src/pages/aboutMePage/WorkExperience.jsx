import jobs from "../../data/jobs.json";
import useImage from "../../hooks/useImage";
import ExperienceCard from "../../components/ExperienceCard";

function WorkExperience() {
    return (
        <>
            {jobs.map(job =>
                <Job job={job}/>
            )}
        </>
    );
}

function Job({job}) {
    const companyImage = useImage(`jobs/${job.imageUrl}`);

    return (
        <ExperienceCard
            title={job.description}
            subtitle={job.companyName}
            coverUrl={companyImage}
            startDate={job.startDate}
            endDate={job.endDate}
        />
    );
}

export default WorkExperience;