import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

// import components
import Chart from "../../components/Chart";
import { EmotBtns } from "../../components/EmotBtns";

const Demo = () => {
  return (
    <>
      <div className="nav">
        <Link to={"/"}>
          <button type="button" className="btn btn-outline-warning white back">
            &larr; Back
          </button>
        </Link>
        <h1>Hello World, Demo page</h1>
      </div>
      <Chart />
      <EmotBtns />
    </>
  );
};
export default Demo;
