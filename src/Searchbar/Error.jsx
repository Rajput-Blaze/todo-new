import React from "react";
import { useHistory } from "react-router";


const Error = () =>{
            const previous = useHistory();
            return <>
            <h1>404 error page</h1>
            <h1>this page does not exist</h1>
            <button onClick={previous.goBack}>go back</button>
            </>
}

export default Error;