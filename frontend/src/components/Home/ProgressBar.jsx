import React from "react";
import "./Home.css";

export default function ProgressBar({ progress }) {
  return (
    <div className="progress-bar-container">
      <div
        className="progress-bar"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}