import { createContext, useContext, useState } from "react";

const SpinnerContext = createContext({
    options: [],
});

const SpinnerProvider = ({children}) => {
    const [options, setOptions] = useState([]);
    
    const addOption = (option) => setOptions(prev => ({...prev, option}));

    return (
        <SpinnerContext.Provider value={{ options, addOption }}>
            {children}
        </SpinnerContext.Provider>
    )
}

const useSpinnerContext = () => useContext(SpinnerContext);

export { SpinnerProvider, useSpinnerContext };
export default SpinnerContext;
