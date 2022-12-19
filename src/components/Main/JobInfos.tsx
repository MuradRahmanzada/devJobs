import React from "react";

interface IProps {
    postedAt: string | undefined;
    contract: string | undefined;
}

const JobInfos: React.FC<IProps> = ({postedAt, contract}) => {
  return (
    <p className="flex items-center gap-3 text-gray-500">
      <span>{postedAt}</span>
      <span>•</span>
      <span>{contract}</span>
    </p>
  );
};

export default JobInfos;
