import React, { useState } from "react";
import LegendPortrait from "./LegendPortrait";

import Legends from "./legends.json";
import "./Apex.css";

const randomLegend = (legends) => legends[Math.floor(Math.random() * legends.length)];

const Apex = () => {
    const [banned, setBanned] = useState([]);
    const [picked, setPicked] = useState(null);

    const toggle = (l) => banned.includes(l)
        ? setBanned(b => [...b.slice(0, b.indexOf(l)), ...b.slice(b.indexOf(l) + 1)])
        : setBanned(b => [...b, l]);

    const pickRandom = () => {
        const avail = Legends.filter(l => !banned.includes(l));

        if (avail.length === 1) {
            setPicked(Legends.indexOf(avail[0]));
        }

        const toPick = randomLegend(avail);

        setPicked(Legends.indexOf(toPick));
    }

    const reset = () => setPicked(null);

    return (
        <div className="apex">
            {picked
                ? <button className="reset" onClick={reset}>Reset</button>
                : <button onClick={pickRandom} disabled={Legends.length === banned.length}>Pick</button>
            }

            <div className="legends">
                {picked ? (<div>
                    <LegendPortrait legend={Legends[picked]} picked />
                </div>) :
                    <>
                        {Legends.map((l, i) => (
                            <LegendPortrait
                                key={l}
                                legend={l}
                                banned={banned.includes(l)}
                                picked={picked && i === picked}
                                onClick={() => toggle(l)}
                            />
                        ))}
                    </>}
            </div>
        </div>
    )
};

export default Apex;
