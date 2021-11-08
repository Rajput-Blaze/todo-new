import React,{useContext} from "react";
// import App1 from "./App1";
import { firstName,lastName } from "./App1";

const ComC = () =>{
                const fname = useContext(firstName);
                const lname = useContext(lastName);
            return <h1>{fname} {lname} is to be hard labour</h1>
            {/* <firstName.Consumer>{(fname) =>{
                return <lastName.Consumer>{(lname) =>{
                    return <h1>{fname} {lname} is to be hard labour</h1>
                }}</lastName.Consumer>  
            }}
            </firstName.Consumer> */}
            
} 

export default ComC;