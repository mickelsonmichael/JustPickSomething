import { useState } from "react";

const useToggle = (defaultValue) => {
    const [isOpen, setIsOpen] = useState(defaultValue ?? false);

    const toggle = (value) => {
        if (value !== undefined) {
            setIsOpen(value);
        } else {
            setIsOpen(prev => !prev);
        }
    }

    const setOpen = () => toggle(true);
    const setClosed = () => toggle(false);

    return { isOpen, toggle, setOpen, setClosed };
};

export { useToggle };
