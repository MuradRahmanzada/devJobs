import React from "react";

interface IProps {
  type: string;
  name: string;
  placeholder: string;
  className: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  img?: string;
}

const Input: React.FC<IProps> = (props) => {
  const { type, name, placeholder, className, value, onChange, img } = props;

  return (
    <label htmlFor={name} className="flex items-center gap-4 h-full">
      {img && (
        <i>
          <img src={img} alt="" className="w-4" />
        </i>
      )}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={className}
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

export default Input;
