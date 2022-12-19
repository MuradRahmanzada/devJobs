import React from "react";
import { Job } from "../../types";
import Button from "../UI/Button";
import JobInfos from "./JobInfos";

interface IProps {
  job: Job | undefined;
}

const JobDescription: React.FC<IProps> = ({ job }) => {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex flex-col gap-1 mx-2 md:mx-0">
            <JobInfos postedAt={job?.postedAt} contract={job?.contract} />
            <h1 className="text-2xl font-bold dark:text-white">
              {job?.position}
            </h1>
            <span className="text-sm font-bold text-violet">
              {job?.location}
            </span>
          </div>
          <div className="w-full md:w-max mt-10 md:mt-0">
            <Button
              type="button"
              href={job?.apply}
              className="w-full h-12 px-4 bg-violet text-white font-semibold rounded-md"
              text="Apply Now"
            />
          </div>
        </div>
        <div className="py-10">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            {job?.description}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-3 ">
        <h1 className="text-lg font-bold dark:text-white">Requirements</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 tracking-wide">
          {job?.requirements.content}
        </p>
        <ol>
          {job?.requirements.items.map((requirement, index) => (
            <li
              key={index}
              className="flex gap-2 text-sm text-gray-500 dark:text-gray-400 leading-8"
            >
              <span className="text-2xl">•</span>
              {requirement}
            </li>
          ))}
        </ol>
      </div>

      <div className="flex flex-col gap-3 mt-5">
        <h1 className="text-lg font-bold dark:text-white">What You Will Do</h1>
        <p className="text-sm text-gray-500 tracking-wide">
          {job?.role.content}
        </p>
        <ol className="flex flex-col gap-5">
          {job?.role.items.map((requirement, index) => (
            <li
              key={index}
              className="flex gap-2 text-sm text-gray-500 list-none"
            >
              <span className="text-violet font-bold">{index + 1}</span>
              {requirement}
            </li>
          ))}
        </ol>
      </div>
    </>
  );
};

export default JobDescription;
