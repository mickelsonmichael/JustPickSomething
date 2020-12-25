import React from "react";
import Segment from "./Segment";
import Add from "./Add";
import "./Wheel.css";
import { getColor } from "../common/colorUtil";

const Wheel = ({
  isSpinning,
  onSpin,
  options,
  onSegmentRemove,
  onOptionAdd,
  onClear,
}) => {
  let wheel;

  if (options.length < 1) {
    wheel = <div className="wheel__empty" />;
  } else {
    const segments = (
      <span className="wheel">
        {options.map((s, i) => (
          <Segment
            key={s}
            text={s}
            color={getColor(i)}
            onClick={() => onSegmentRemove(s)}
          />
        ))}
      </span>
    );

    wheel = [segments, segments];
  }

  return (
    <div className="container">
      <div className="wheel--arrow" />
      <div
        className={isSpinning ? "wheel--container spin" : "wheel--container"}
      >
        {wheel}
      </div>
      <div className="wheel--controls">
        <Add onOptionAdd={onOptionAdd} />

        {onClear && (
          <button
            className="butt butt-gray"
            type="reset"
            onClick={onClear}
            disabled={options.length < 2}
          >
            Clear
          </button>
        )}

        <button
          className="butt"
          type="button"
          onClick={onSpin}
          disabled={isSpinning || options.length < 2}
        >
          {isSpinning ? "spinning" : "Spin"}
        </button>
      </div>
    </div>
  );
};

export default Wheel;
