import React from "react";
import { useHistory, useLocation, useParams } from "react-router";


const User = ({match}) =>{
            const {fname,lname} = useParams();
            const location = useLocation();
            const history = useHistory();
            return <>
            <h1>my name is {fname} {lname}</h1>
            <h1>The current URL is {location.pathname}</h1>
            {location.pathname === `/user/manish/kumar` ?(
            <button onClick={() => history.push("/service")}>service</button>
            ):null}
            </>
            }

export default User;