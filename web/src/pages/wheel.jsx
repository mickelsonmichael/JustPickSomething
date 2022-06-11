import React from "react";

import Wheel from "../wheel";

const WheelPage = () => {
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
        <Wheel
            isSpinning={isSpinning}
            options={options}
            onOptionAdd={handleOptionAdd}
            onSpin={handleSpin}
            onClear={handleClear}
        />
    );
}

export default WheelPage;
