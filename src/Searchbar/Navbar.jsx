import React from "react";
import { NavLink } from "react-router-dom";


const Navbar = () =>{
            return <>
               <div className="menu_style">
                 <NavLink exact activeClassName="active_class" to="/" className="large">aboutus</NavLink>
                 <NavLink exact activeClassName="active_class" to="/Contact" className="large">contact</NavLink>
                 <NavLink exact activeClassName="active_class" to="/search" className="large">search</NavLink>
                 <NavLink exact activeClassName="active_class" to="/service" className="large">service</NavLink>
                 <NavLink exact activeClassName="active_class" to="/user/manish/kumar" className="large">users</NavLink>
                 </div>
            </>
}

export default Navbar;