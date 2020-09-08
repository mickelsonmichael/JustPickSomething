import React from "react";
import "./WheelMenu.css";

const WheelMenu = ({
  onOptionAdd,
  onOptionRemove,
  onGo,
  options,
  canSpin,
  selected,
}) => {
  const [optionInput, setOptionInput] = React.useState("");

  const handleOptionAdd = (e) => {
    e.preventDefault();
    onOptionAdd(optionInput);
    setOptionInput("");
  };

  return (
    <div className="wheel__menu">
      <button
        type="button"
        onClick={onGo}
        disabled={!canSpin}
        className="wheel__menu-go butt"
      >
        Pick for Me!
      </button>

      {canSpin && selected !== null && (
        <p className="wheel__menu-result">
          I have chosen for you
          <hr />
          {options[selected]}
        </p>
      )}

      {options.length < 2 && (
        <p className="wheel__menu-alert">
          You must add some more options to do a proper decision
        </p>
      )}
      <form className="wheel__menu-form" onSubmit={handleOptionAdd}>
        <input
          type="text"
          placeholder="Enter option text"
          value={optionInput}
          onChange={(e) => setOptionInput(e.target.value)}
        />
        <button type="submit" className="butt">
          Add Option
        </button>
      </form>
      <ul className="wheel__menu-options">
        {options.map((o) => (
          <li className="wheel__menu-options__option" key={o}>
            <span className="wheel__menu-options__option-text">{o}</span>
            <button
              type="button"
              className="wheel__menu-options__option-remove"
              onClick={() => onOptionRemove(o)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WheelMenu;
