import React, { useState } from "react";

const LegendPortrait = ({ onClick, banned, legend, picked, hovered }) => {
    const src = `images/legends/${legend}_cropped.png`

    return (
        <div
            className={`legend-wrapper${banned ? " banned" : " unbanned"}${picked ? " picked" : " notpicked"}${hovered ? " hovered" : " nothovered"}`}
            onClick={onClick}
        >
            <img alt={legend} src={src} draggable="false" />
        </div>
    )
};

export default LegendPortrait;
