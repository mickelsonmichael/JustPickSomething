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
  const optionsWithColors = options.map((o, i) => ({ text: o, color: getColor(i) }));

  if (options.length < 1) {
    wheel = <div className="wheel__empty">ENTER AT LEAST TWO OPTIONS</div>;
  } else {
    const segments = (
      optionsWithColors.map((s) => (
        <Segment
          key={s.text}
          text={s.text}
          color={s.color}
          onClick={onSegmentRemove}
        />
      )));

    wheel = [
      <span key="wheel-1" className="wheel">{segments}</span>,
      <span key="wheel-2" className="wheel">{segments}</span>
    ]
  }

  return (
    <>
      <div className="container">
        <div className="wheel--arrow" />
        <div
          className={isSpinning ? "wheel--container spin" : "wheel--container"}
        >
          {wheel}
        </div>
      </div>
      <div className="wheel--controls">
        <Add onOptionAdd={onOptionAdd} />

        <div className="wheel--controls__buttons">
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
    </>
  );
};

export default Wheel;
