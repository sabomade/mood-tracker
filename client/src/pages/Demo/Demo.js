import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

// import components
import Chart from "../../components/Chart";

const Demo = () => {
  return (
    <>
      <div className="nav">
        <Link to={"/"}>
          <button type="button" className="btn btn-outline-warning back">
            &larr; Back
          </button>
        </Link>
        <h1>Hello World, Demo page</h1>
      </div>
      <Chart />
    </>
  );
};
export default Demo;
