import React, { useState } from "react";

const LegendPortrait = ({ onClick, banned, legend, picked }) => {
    const src = `images/legends/${legend}.png`

    return (
        <div
            className={`legend-wrapper${banned ? " banned" : " unbanned"}${picked ? " picked" : " notpicked"}`}
            onClick={onClick}
        >
            <img alt={legend} src={src} />
        </div>
    )
};

export default LegendPortrait;
