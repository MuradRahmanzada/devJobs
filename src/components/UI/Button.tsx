import React from "react";

interface IProps {
  type: "button" | "submit" | "reset" | undefined;
  text: string;
  href?: string | undefined;
  className: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button: React.FC<IProps> = (props) => {
  const { type, className, onClick, href, text } = props;

  return (
    <a href={href}>
      <button type={type} className={className} onClick={onClick}>
        {text}
      </button>
    </a>
  );
};

export default Button;
