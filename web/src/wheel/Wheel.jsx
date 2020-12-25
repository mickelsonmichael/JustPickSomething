import React from "react";
import Segment from "./Segment";
import Add from "./Add";
import "./Wheel.css";
import { getColor } from "../common/colorUtil";
import Button from "../common/button";
import Loading from "../common/loading";

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
          <Button color="gray" onClick={onClear} disabled={options.length < 1}>
            CLEAR
          </Button>
        )}

        <Button onClick={onSpin} disabled={isSpinning || options.length < 2}>
          {isSpinning ? <Loading /> : "SPIN"}
        </Button>
      </div>
    </div>
  );
};

export default Wheel;
