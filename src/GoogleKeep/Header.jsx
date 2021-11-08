import React from "react";
import logo from "./notess.png";


const Header = () =>{
    return <>
    <div className="main_div">
        {/* <div className=""><FontAwesomeIcon icon={faStickyNote} /></div> */}
        <img src={logo} alt="logo" width="70" height="50"/>
        <h1>Google keep</h1>
    </div>
 </>

}

export default Header;