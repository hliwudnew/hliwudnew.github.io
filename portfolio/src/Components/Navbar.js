import "../Styles/Navbar.css";
import {useNavigate } from "react-router-dom";
function Navbar(){
    const navigate = useNavigate();
    return(
        <div className="Navbar-container">
            <button onClick={() => navigate("/")}>Home</button>
            <button onClick={() => navigate("/projects")}>Projects</button>
        </div>
    );
}

export default Navbar;