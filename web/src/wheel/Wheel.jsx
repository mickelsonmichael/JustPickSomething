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
}) => {
  return (
    <div className="wheel--container">
      <div className="wheel">
        {options.length > 0 ? (
          options.map((s, i) => (
            <Segment
              key={s}
              text={s}
              color={getColor(i)}
              onClick={() => onSegmentRemove(s)}
            />
          ))
        ) : (
          <div className="wheel__empty" />
        )}
      </div>
      <Add onOptionAdd={onOptionAdd} />

      {options.length > 1 && (
        <button
          class="butt butt-fancy"
          type="button"
          onClick={onSpin}
          disabled={isSpinning}
        >
          {isSpinning ? "spinning" : "Spin"}
        </button>
      )}
    </div>
  );
};

export default Wheel;
