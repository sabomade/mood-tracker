import React from "react";
import "./index.css";

import { Link } from "react-router-dom";

export function Jumbotron() {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">Mood Tracker</h1>
        <p className="lead">Track participant attendance & attitutde</p>
        <Link to={"/demo"}>
          <button
            className="btn btn-outline-warning btn-lg white"
            type="button"
          >
            Demo
          </button>
        </Link>
      </div>
    </div>
  );
}
