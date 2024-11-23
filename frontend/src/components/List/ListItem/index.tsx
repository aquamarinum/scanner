import React, { ReactNode } from "react";

type ListItemProps = {
  children: ReactNode | string;
};

const ListItem: React.FC<ListItemProps> = ({ children }) => {
  return <li>{children}</li>;
};

export default ListItem;
