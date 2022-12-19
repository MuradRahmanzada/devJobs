import React from "react";
import { JobProps } from "../../types";
import JobInfos from "./JobInfos";

const JobCard: React.FC<JobProps> = ({ job }) => {
  const { logo, logoBgColor } = job;

  return (
    <div className="w-[372px] md:w-[690px] lg:w-[450px] h-60 px-10 bg-white dark:bg-veryDarkBlue shadow-lg rounded-lg cursor-pointer">
      <div>
        <div
          className="w-10 h-10 relative bottom-5 flex items-center justify-center rounded-xl"
          style={{ backgroundColor: logoBgColor }}
        >
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 text-sm mt-3 text-gray-500 dark:text-gray-400">
          <JobInfos postedAt={job.postedAt} contract={job.contract} />
        </div>
        <h1 className="text-lg font-bold dark:text-white">{job.position}</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {job.company}
        </p>
        <span className="text-sm text-violet font-bold mt-8">
          {job.location}
        </span>
      </div>
    </div>
  );
};

export default JobCard;
