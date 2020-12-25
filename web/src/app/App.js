import React from "react";
import { hot } from "react-hot-loader";
import "./App.css";
import Wheel from "../wheel/Wheel";
import Header from "../common/Header";

export default hot(module)(() => {
  const [options, setOptions] = React.useState([]);
  const [isSpinning, setIsSpinning] = React.useState(false);

  const handleOptionAdd = (optionText) => {
    setOptions((opts) => [...opts, optionText]);
  };

  const handleOptionRemove = (optionText) => {
    setOptions((opts) => opts.filter((o) => o != optionText));
  };

  return (
    <div className="app">
      <Header />
      <Wheel
        isSpinning={isSpinning}
        options={options}
        onOptionAdd={handleOptionAdd}
        onSpin={() => setIsSpinning(true)}
      />
    </div>
  );
});
