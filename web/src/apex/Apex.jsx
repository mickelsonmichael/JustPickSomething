import React from "react";
import LegendPortrait from "./LegendPortrait";

import "./Apex.css";
import useLegends from "./useLegends";

const Apex = () => {
    const {
        reset,
        pickRandom,
        toggleBanned,
        hovered,
        banned,
        picked,
        isPicking,
        legends,
    } = useLegends();

    return (
        <div className="apex">
            {picked != null
                ? <button className="apex-button reset" onClick={reset}>Reset</button>
                : <button className="apex-button" onClick={pickRandom} disabled={legends.length === banned.length || isPicking}>Pick</button>
            }
            <div className="legends">
                {picked != null ? (<div>
                    <LegendPortrait legend={legends[picked]} picked />
                </div>) :
                    <>
                        {legends.map((l, i) => (
                            <LegendPortrait
                                key={l}
                                legend={l}
                                banned={banned.includes(l)}
                                picked={picked != null && i === picked}
                                hovered={hovered != null && i === hovered}
                                onClick={() => toggleBanned(l)}
                            />
                        ))}
                    </>}
            </div>
        </div>
    )
};

export default Apex;
