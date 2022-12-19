import React from "react";
import Button from "../UI/Button";
import CompanyLogo from "./CompanyLogo";

interface IProps {
  logoBgColor: string | undefined;
  logo: string | undefined;
  company: string | undefined;
  website: string | undefined;
}

const CompanyHeader: React.FC<IProps> = (props) => {
  const { logoBgColor, logo, company, website } = props;

  return (
    <div className="flex flex-col lg:flex-row relative bottom-5 lg:flex items-center w-full h-64 lg:h-36 shadow-lg rounded-lg bg-white dark:bg-veryDarkBlue">
      <div className="flex items-center justify-center lg:h-full">
        <CompanyLogo logoBgColor={logoBgColor} logo={logo} />
      </div>
      <div className="w-full flex-col lg:flex-row md:mb-5 lg:mb-0 text-center lg:text-left lg:flex items-center justify-between lg:px-8">
        <div className="flex flex-col gap-y-2">
          <h1 className="text-xl font-bold dark:text-white">{company}</h1>
          <p className="text-gray-400">{website}</p>
        </div>
        <div className="mt-5 ">
          <Button
            type="button"
            href={website}
            className="h-12 px-4 bg-bgBtn dark:bg-bgBtn2 text-violet dark:text-white font-semibold rounded-md"
            text="Company Site"
          />
        </div>
      </div>
    </div>
  );
};

export default CompanyHeader;
