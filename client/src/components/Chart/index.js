import React from "react";
import "./style.css";
import moment from "moment";
import "moment-timezone";
import CanvasJSReact from "../../lib/canvasjs.react";

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

CanvasJS.addColorSet("greenShades", [
  //colorSet Array

  "#FFA734",
  "#3EC094",
]);

// demo point counters
var happyPt = 2;
var neutralPt = 3;
var sadPt = 1;

const Chart = () => {
  const options = {
    animationEnabled: true,
    title: {
      text: "Mood Tracker",
      fontFamily: "Comfortaa",
      fontSize: 24,
      horizontalAlign: "center",
    },
    axisY: {
      title: "# of Students",
      titleFontFamily: "Comfortaa",
      titleFontSize: 18,
      interval: 1,
      includeZero: true,
    },
    axisX: {
      titleFontFamily: "Comfortaa",
      titleFontSize: 18,
    },
    data: [
      {
        type: "bar",
        indexLabelFontFamily: "Comfortaa",
        indexLabelFontSize: 10,
        dataPoints: [
          { label: "Happy", y: happyPt },
          { label: "Neutral", y: neutralPt },
          { label: "Unhappy", y: sadPt },
        ],
      },
    ],
  };
  return (
    <div>
      <CanvasJSChart options={options} />
    </div>
  );
};

export default Chart;
