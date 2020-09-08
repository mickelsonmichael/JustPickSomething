import React from "react";
import Segment from "./Segment";
import "./Wheel.css";
import WheelMenu from "./WheelMenu";

const colors = [
  "#f44336",
  "#e91e63",
  "#9c27b0",
  "#673ab7",
  "#3f51b5",
  "#2196f3",
  "#03a9f4",
  "#00bcd4",
  "#009688",
  "#4caf50",
  "#8bc34a",
  "#cddc39",
  "#ffeb3b",
  "#ffc107",
  "#ff9800",
  "#ff5722",
];

const getColor = (index) => {
  if (index < colors.length) {
    return colors[index];
  }

  while (index >= colors.length) {
    index = index - colors.length;
  }

  return colors[index];
};

const Wheel = () => {
  const [segments, setSegments] = React.useState([]);
  const [current, setCurrent] = React.useState(null);
  const [isSpinning, setIsSpinning] = React.useState(false);

  const handleAddSegment = (newOption) => {
    if (newOption && !segments.includes(newOption)) {
      setSegments([...segments, newOption]);
    }
  };

  const handleRemoveSegment = (segment) => {
    if (segment) {
      setSegments(segments.filter((s) => s !== segment));
    }
  };

  const spin = () => {
    if (segments.length === 0) return;

    if (segments.length === 1) setCurrent(0);

    setIsSpinning(true);

    let slow = 100;
    let step = 20;
    let segmentsPassed = 0;
    const minimumPasses = segments.length * 2;

    const spinLoop = setInterval(() => {
      if (slow <= 0) {
        clearInterval(spinLoop);
        setIsSpinning(false);
      }

      setCurrent((c) => (c < segments.length - 1 ? c + 1 : 0));

      segmentsPassed++;

      // require the wheel to go two whole revolutions before slowing
      if (segmentsPassed > minimumPasses) {
        slow = slow - (Math.random() > 0.5 ? step : 0);
      }
    }, 75);
  };

  return (
    <div className="wheel--container">
      <div className="wheel">
        {segments.map((s, i) => (
          <Segment
            key={s}
            text={s}
            color={getColor(i)}
            selected={current === i}
          />
        ))}
      </div>

      <WheelMenu
        onOptionAdd={handleAddSegment}
        onOptionRemove={handleRemoveSegment}
        onGo={spin}
        options={segments}
        canSpin={!isSpinning && segments.length > 1}
        selected={current}
      />
    </div>
  );
};

export default Wheel;
