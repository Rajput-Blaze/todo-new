import React, { createContext } from "react";
import ComA from "./ComA";
import ComB from "./ComB";
import ComC from "./ComC";

const firstName = createContext();
const lastName = createContext();

const App1 = () =>{
           return <>
               <firstName.Provider value={"Manees kumar"}>
               <lastName.Provider value={"paswan"}>
                <ComA />
                </lastName.Provider>
                </firstName.Provider>
           </>
}

export default App1;
export { firstName,lastName };