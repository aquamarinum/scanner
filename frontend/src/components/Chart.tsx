import React from "react";
import Paragraph from "./Paragraph";

const Chart = () => {
  return (
    <div className="chart-container">
      <div className="chart-status">
        <div className="chart-overlay">
          <Paragraph>78%</Paragraph>
        </div>
      </div>
    </div>
  );
};

export default Chart;
