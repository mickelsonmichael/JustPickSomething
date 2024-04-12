import React from "react";

import Wheel from "../wheel";
import useOptions from "../utils/useOptions";

const WheelPage = () => {
  const [options, setOptions] = useOptions();

  const [isSpinning, setIsSpinning] = React.useState(false);

  const handleOptionAdd = (optionText) => {
    setOptions((opts) => [...opts, optionText]);
  };

  const handleOptionRemove = (i) => {
    setOptions((opts) => [...opts.slice(0, i), ...opts.slice(i + 1)]);
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
    <Wheel
      isSpinning={isSpinning}
      options={options}
      onOptionAdd={handleOptionAdd}
      onSegmentRemove={handleOptionRemove}
      onSpin={handleSpin}
      onClear={handleClear}
    />
  );
};

export default WheelPage;
