import { createContext, useEffect, useState } from "react";
import Get100Coins from "../Functions/get100_coins";

const AllCoinsContext = createContext()

const AllCoinsContextProvider = ({ children }) => {

    const [allCoins, setAllCoins] = useState([]);

    useEffect(() => {
        try {
            let data = Get100Coins()
            setAllCoins(data);
            console.log(data);
        }
        catch (e) {
            console.log(e.message);
        }
    }, [])

    return (
        <AllCoinsContext.Provider value={{ allCoins }}>
            {children}
        </AllCoinsContext.Provider>
    );
}

export default AllCoinsContextProvider;
export { AllCoinsContext };