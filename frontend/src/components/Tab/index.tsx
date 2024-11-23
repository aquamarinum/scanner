import React, { ReactNode, useState } from "react";

type TabProps = {
  tabs: ReactNode[];
};

const Tab: React.FC<TabProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const onChaneActiveTab = (id: number) => {
    setActiveTab(id);
  };

  return (
    <div>
      <ul>{}</ul>
    </div>
  );
};

export default Tab;
