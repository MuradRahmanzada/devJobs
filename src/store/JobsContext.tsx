import React, { useState, createContext } from "react";
import { Job } from "../types";
import { SearchTerm, JobsState } from "../types/index";
import data from "../data/data.json";

interface Props {
  children?: React.ReactNode;
}

export const JobsContext = createContext({} as JobsState);

export const JobsProvider: React.FC<Props> = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState<SearchTerm>({
    title: "",
    location: "",
  });
  const [isChecked, setIsChecked] = useState(false);
  const [filteredData, setFilteredData] = useState<Job[]>(data);

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm({
      ...searchTerm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement> | React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const shouldJobBeIncluded = (job: Job, title: string, location: string) => {
      if (title === "" && location === "") {
        return true;
      } else if (title !== "" && location !== "") {
        return (
          job.position.toLowerCase().includes(title.toLowerCase()) &&
          job.location.toLowerCase().includes(location.toLowerCase())
        );
      } else if (title !== "") {
        return job.position.toLowerCase().includes(title.toLowerCase());
      } else {
        return job.location.toLowerCase().includes(location.toLowerCase());
      }
    };

    const filteredJobs = data.filter((job) => {
      if (isChecked) {
        if (job.contract === "Full Time") {
          return shouldJobBeIncluded(
            job,
            searchTerm.title,
            searchTerm.location
          );
        } else return false;
      } else {
        return shouldJobBeIncluded(job, searchTerm.title, searchTerm.location);
      }
    });
    setFilteredData(filteredJobs);
  };

  return (
    <JobsContext.Provider
      value={{
        searchTerm,
        handleSearch,
        handleSubmit,
        handleCheck,
        isChecked,
        filteredData,
      }}
    >
      {children}
    </JobsContext.Provider>
  );
};
