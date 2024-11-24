import React, { ReactNode } from "react";
import "./styles.scss";

type ScreenViewProps = {
  children: ReactNode;
};

const ScreenView: React.FC<ScreenViewProps> = ({ children }) => {
  return <div className="screen">{children}</div>;
};

export default ScreenView;
