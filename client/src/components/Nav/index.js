import React from "react";
import "./style.css";

export function Nav() {
  return (
    <ul className="nav justify-content-end">
      <li className="nav-item">
        <a className="nav-link" href="#">
          Login
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Sign Up
        </a>
      </li>
    </ul>
  );
}
