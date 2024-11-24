import React from "react";
import Subtitle from "../Paragraph";

type ScanCardProps = {
  title: string;
  iconSource: string;
  onPress: () => void;
};

const ScanCard: React.FC<ScanCardProps> = ({ title, iconSource, onPress }) => {
  return (
    <div>
      <div>
        <div>
          <img src={iconSource} alt={title + " card icon"} />
        </div>
        <Subtitle>{title}</Subtitle>
      </div>
    </div>
  );
};

export default ScanCard;
