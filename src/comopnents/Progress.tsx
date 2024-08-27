import React from "react";

interface props {
  percent: Number;
}

const Progress = ({ percent }: props) => {
  return (
    <div
      className="progress fixed-bottom"
      role="progressbar"
      //   aria-label="Success example"
      aria-label="Example 100px high"
      aria-valuenow={0}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className="progress-bar bg-primary"
        style={{ width: `${percent}%` }}
      ></div>
    </div>
  );
};

export default Progress;
