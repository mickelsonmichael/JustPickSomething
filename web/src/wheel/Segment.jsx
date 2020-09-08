import React from "react";

const Segment = ({ text, color, selected }) => (
  <div
    className={"wheel__segment" + (selected ? " selected" : "")}
    style={{ backgroundColor: color, borderColor: color }}
  >
    {text}
  </div>
);

export default Segment;
