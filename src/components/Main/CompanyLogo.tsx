import React from "react";

interface IProps {
  logoBgColor: string | undefined;
  logo: string | undefined;
}

const CompanyLogo: React.FC<IProps> = (props) => {
  const { logoBgColor, logo } = props;

  return (
    <div
      style={{ backgroundColor: logoBgColor }}
      className="h-20 w-20 p-4 relative bottom-6 lg:sticky lg:bottom-0 lg:h-full lg:w-36 flex items-center rounded-xl lg:rounded-l-lg lg:rounded-r-none"
    >
      <img src={logo} alt="" className="w-full" />
    </div>
  );
};

export default CompanyLogo;
