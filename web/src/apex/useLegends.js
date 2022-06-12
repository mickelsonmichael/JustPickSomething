import { useState } from "react";

import Legends from "./legends.json";

const randomLegend = (legends) => legends[Math.floor(Math.random() * legends.length)];

const useLegends = () => {
    const [state, setState] = useState({
        banned: [],
        picked: null,
        hovered: null,
        isPicking: false,
        legends: Legends,
    })

    const { banned, picked } = state;

    const toggleBanned = (l) => setState(s => s.banned.includes(l)
        ? {
            ...s,
            banned: [
                ...s.banned.slice(0, s.banned.indexOf(l)),
                ...s.banned.slice(s.banned.indexOf(l) + 1)
            ]
        }
        : {
            ...s, banned: [...s.banned, l]
        });

    const pickRandom = () => {
        setState(s => ({ ...s, isPicking: true }));

        const avail = Legends.filter(l => !banned.includes(l));

        if (avail.length === 1) {
            setState(s => ({
                ...s, picked: Legends.indexOf(avail[0])
            }))

            return;
        }

        const indexes = new Array(20).fill(0);

        for (let x = 0; x < indexes.length; x++) {
            const l = Legends.indexOf(randomLegend(avail));

            if (x > 0) {
                while (l === indexes[x - 1]) {
                    l = Legends.indexOf(randomLegend(avail));
                }
            }

            indexes[x] = l;
        };

        let i = 0;
        let go = setInterval(() => {
            if (i < indexes.length - 1) {
                setState(s => ({ ...s, hovered: indexes[i] }));
                i++;
            } else {
                setState(s => ({
                    ...s,
                    picked: indexes[i],
                    hovered: null,
                    isPicking: false
                }));

                clearInterval(go);
            }
        }, [100])
    }

    const reset = () => setState(s => ({ ...s, picked: null }));

    return {
        reset,
        pickRandom,
        toggleBanned,
        ...state,
    }
}

export default useLegends;
