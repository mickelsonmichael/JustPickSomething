import React from "react";

const Segment = ({ text, color, selected, onClick }) => (
  <div
    onClick={onClick}
    className={"wheel__segment" + (selected ? " selected" : "")}
    style={{ backgroundColor: color, borderColor: color }}
  >
    {text}
  </div>
);

export default Segment;
