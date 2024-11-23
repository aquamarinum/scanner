import React from "react";

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
        <p>{title}</p>
      </div>
    </div>
  );
};

export default ScanCard;
