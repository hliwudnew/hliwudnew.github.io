import "../Styles/Navbar.css";
import Home from "./Home";
import Projects from "./Projects";
import { useState } from 'react';
function Navbar(){
    const [pageIndicator,setPageIndicator] = useState("home");
    // Some way like this but has to wait to get the info to render the navbar, google it later :), cause code works but renders to fast?
    //window.location.href.includes("projects"? "projects" : "home")
    return(
        <div className="Navbar-container">
            <Home page={pageIndicator} setPage={setPageIndicator}/>
            <Projects page={pageIndicator} setPage={setPageIndicator}/>
        </div>
    );
}

export default Navbar;