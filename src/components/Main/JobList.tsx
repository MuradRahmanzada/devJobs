import { useContext } from "react";
import { Link } from "react-router-dom";
import { JobsContext } from "../../store/JobsContext";
import { Job } from "../../types";
import JobCard from "./JobCard";
import Error from "./Error";

const JobList: React.FC = () => {
  const { filteredData } = useContext(JobsContext);

  return (
    <div className="py-16">
      <div className="flex items-center flex-wrap gap-x-10 gap-y-14">
        {filteredData.map((job: Job) => {
          return (
            <Link key={job.id} to={`/job/${job.position}`}>
              <JobCard job={job} />
            </Link>
          );
        })}
      </div>
      {filteredData.length < 1 && <Error />}
    </div>
  );
};

export default JobList;
