import React, { useState } from "react";
import Progress from "./Progress";
import "./DashBoard.css";
interface Props {
  total: any;
  message: string;
}

const Message = ({ total, message }: Props) => {
  return (
    <div className="sticky-top mt-5">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card text-center bg-info">
            <div className="card-body">
              <h1 className="card-title text-white" style={{ fontSize: "4em" }}>
                {total}
              </h1>

              <h3 className="card-title text-white">{message}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DashBoard = ({ total }: Props) => {
  if (total === 0) {
    return (
      <Message
        total={total}
        message="Start to make brochos, and thank Hashem!"
      ></Message>
    );
  }

  if (total >= 100) {
    return (
      <div className="container fixed-mid sticky-top">
        <div className="row justify-content-center mt-5">
          <div className="col-md-15">
            <div className="card text-center bg-success">
              <div className="card-body">
                <h1
                  className="card-title text-white"
                  style={{ fontSize: "4em" }}
                >
                  {total}
                </h1>
                <h3 className="card-title text-white">
                  WOW!!! YOU HAVE REACHED 100!!! <br></br>The total amount of
                  brochos for today is {total}!!
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container fixed-mid sticky-top">
        <div className="row justify-content-center mt-5">
          <div className="col-md-6">
            <div className="card text-center bg-info">
              <div className="card-body">
                <h1
                  className="card-title text-white"
                  style={{ fontSize: "4em" }}
                >
                  {total}
                </h1>
                <h3 className="card-title text-white">
                  Your total amount of brochos for today is {total}!! continue
                  to add {100 - total} brochos and you will reach 100
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default DashBoard;
