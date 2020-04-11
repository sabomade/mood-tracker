import React from "react";
import "./style.css";

// import components
import Chart from "../../components/Chart";

const Demo = () => {
  return (
    <>
      <div className="nav">
        <div className="item1">
          <button type="button" className="btn btn-outline-warning">
            &larr; Back
          </button>
        </div>
        <div className="item2">
          <h1>Hello World, Demo page</h1>
        </div>
      </div>
      <Chart />
    </>
  );
};
export default Demo;
