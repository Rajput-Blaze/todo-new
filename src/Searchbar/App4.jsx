import React from "react";
import About from "./About";
import Contact from "./Contact";
import { Switch, Route, Redirect } from "react-router";
import Error from "./Error";
import Navbar from "./Navbar";
import Service from "./Service";
import User from "./User";
import Search from "./Search";


const App4 = () =>{
            return <>
            <Navbar />
            <Switch>
            <Route exact path="/" component={About} />
            <Route exact path="/Contact" component={Contact} />
            <Route exact path="/search" component={Search} />
            <Route path="/service" component={Service} />
            <Route path="/user/:fname/:lname" component={User} />
            <Route component={Error} />
            {/* <Redirect to="/search" /> */}
            </Switch>
            </>
}

export default App4;