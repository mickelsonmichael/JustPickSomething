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

  const handleSpin = () => {
    setIsSpinning(true);

    const time = (Math.random() * 3 + 1) * 1000;

    setTimeout(() => setIsSpinning(false), time);
  };

  const handleClear = () => {
    setOptions([]);
  };

  return (
    <div className="app">
      <Header />
      <Wheel
        isSpinning={isSpinning}
        options={options}
        onOptionAdd={handleOptionAdd}
        onSpin={handleSpin}
        onClear={handleClear}
      />

      <p className="info">
        Enter in at least two options, then click "SPIN" to spin the wheel and
        have all your decisions made for you
      </p>
    </div>
  );
});
