import React from "react";
import ListItem from "./ListItem";

type ListProps = {
  data: Array<Record<string, string | number | boolean>>;
};

const List: React.FC<ListProps> = ({ data }) => {
  return (
    <div>
      <ul>
        {data.map((item) => (
          <ListItem>{""}</ListItem>
        ))}
      </ul>
    </div>
  );
};

export default List;
