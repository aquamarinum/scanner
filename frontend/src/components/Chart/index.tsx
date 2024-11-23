import React, { ReactNode } from "react";

type ChartProps = {
  children: string | ReactNode;
};

const Chart: React.FC<ChartProps> = ({ children }) => {
  return (
    <div>
      <div>
        {/* <h4></h4>
          <p></p> */}
        {children}
      </div>
    </div>
  );
};

export default Chart;
