import React from "react";

interface IProps {
  type: string;
  className: string;
  name: string;
  value: boolean;
  handleCheck: React.MouseEventHandler<HTMLInputElement> | undefined;
}

const CheckBox: React.FC<IProps> = (props) => {
  const { type, className, name, handleCheck } = props;

  return (
    <label htmlFor="fullTimeOnly" className="flex  items-center gap-4">
      <input
        type={type}
        className={className}
        name={name}
        onClick={handleCheck}
      />
      <span className="font-semibold dark:text-white text-sm ">
        Full Time Only
      </span>
    </label>
  );
};

export default CheckBox;
