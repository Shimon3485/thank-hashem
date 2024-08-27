import React from "react";

interface Props {
  children: any;
  onClick: () => void;
}

const Button = ({ children, onClick }: Props) => {
  return (
    <button className="btn btn-outline-secondary" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
