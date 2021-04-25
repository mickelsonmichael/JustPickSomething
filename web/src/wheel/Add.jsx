import React from "react";
import Button from "../common/button";

const Add = ({ onOptionAdd }) => {
  const [optionInput, setOptionInput] = React.useState("");

  const handleOptionAdd = (e) => {
    e.preventDefault();
    onOptionAdd(optionInput);
    setOptionInput("");
  };

  return (
    <form className="wheel__menu-form" onSubmit={handleOptionAdd}>
      <input
        type="text"
        placeholder="Enter choice"
        value={optionInput}
        onChange={(e) => setOptionInput(e.target.value)}
      />
      <Button type="submit">+</Button>
    </form>
  );
};

export default Add;
