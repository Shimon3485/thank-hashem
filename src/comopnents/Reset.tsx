import React from "react";

interface Props {
  children: string;
  onReset: any;
}

const Reset = ({ onReset, children }: Props) => {
  return (
    <button className="btn btn-outline-secondary" onClick={onReset}>
      {children}
    </button>
  );
};

export default Reset;
