import "../Styles/ProjectTile.css";
import {useNavigate } from "react-router-dom";
function ProjectTile(){
    const navigate = useNavigate();
    return(
        <div className="ProjectTile-container">
            <img alt="Cool Image"></img>
            <h4>Cool Project Name</h4>
            <p>Project Description</p>
            <div className="ProjectTile-frameworks">
                <p>React</p>
                <p>HTML</p>
                <p>CSS</p>
            </div>
            <button>Source</button>
        </div>
    );
}

export default ProjectTile;