import JobCard from "./jobCards.js"

export default function JobsTable({jobs, descriptionLength = 150}) {
    return (
      <div className="grid grid-cols-3 gap-4 place-items-center">
        {jobs.map((job) => <JobCard key={job.id} job={job} descriptionLength = {descriptionLength}></JobCard>
        )}
      </div>
    )
}