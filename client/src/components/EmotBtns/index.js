import React from "react";
import "./style.css";

export function EmotBtns() {
  return (
    <div className="emotbtns">
      <button type="button" className="btn btn-success btn-lg" id="happy">
        <i class="far fa-smile"></i> Happy
      </button>
      <button type="button" className="btn btn-warning btn-lg" id="meh">
        <i class="far fa-meh"></i> Meh
      </button>
      <button type="button" className="btn btn-danger btn-lg" id="sad">
        <i class="far fa-frown"></i> Unhappy
      </button>
    </div>
  );
}
