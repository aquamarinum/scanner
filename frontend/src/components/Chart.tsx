import React, { useEffect, useRef } from "react";
import { CancelIcon } from "./Icons";
import Subtitle from "./Subtitle";

type ChartProps = {
  value: number;
  state: "pending" | "error" | "success";
};

const Chart: React.FC<ChartProps> = ({ value, state }) => {
  const chartRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let startValue = 0;
    const endValue = value;
    const duration = 1000;
    const steps = 100;
    const interval = duration / steps;
    const stepAmount = (endValue - startValue) / steps;
    let currentValue = startValue;
    let gradientColor = "#db0000";

    if (value > 35) gradientColor = "#dbc900";
    if (value > 65) gradientColor = "#00db84";

    const animationInterval = setInterval(() => {
      if (chartRef.current) {
        currentValue += stepAmount;
        if (currentValue > endValue) {
          currentValue = endValue;
          clearInterval(animationInterval);
        }
        chartRef.current.style.background = `conic-gradient(${gradientColor} ${
          currentValue * 3.6
        }deg, #eaeaea 0deg)`;
      }
    }, interval);

    return () => clearInterval(animationInterval);
  }, [state]);

  if (state === "pending")
    return (
      <div className="chart-container">
        <div className="loader"></div>
      </div>
    );

  if (state === "error")
    return (
      <div className="error-container">
        <CancelIcon />
      </div>
    );

  return (
    <div className="chart-container">
      <div className="chart-status" ref={chartRef}>
        <div className="chart-value">
          <span>{value + "%"}</span>
        </div>
      </div>
    </div>
  );
};

export default Chart;
