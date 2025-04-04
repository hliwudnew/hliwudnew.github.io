import "../Styles/HomePage.css";
import me from "../Images/images.png"
import ProjectTile from "../Components/ProjectTile";
import {useNavigate } from "react-router-dom";
function HomePage(){
    const navigate = useNavigate();

    return(
        <div className="HomePage-container">
            <div className="HomePage-introduction">
                <div className="HomePage-blurb">
                    <h1>Hi, I am Gabriel</h1>
                    <p>Software Developer | Frontend | 📌 Canada 🍁</p>
                    <p>I learn and I get it done</p>
                    <div className="HomePage-contacts">
                        <button>Resume</button>
                        <button>LinkedIn</button>
                        <button>Github</button>
                        <button>Email</button>
                    </div>
                </div>
                <div className="HomePage-Picture">
                    <img alt="Some How I Disappeared" src={me}></img>
                </div>
            </div>
            <div className="HomePage-experience">
                <div className="HomePage-experience-toggle">
                    <button>Work</button>
                    <button>Education</button>
                </div>
                <div className="HomePage-experience-content">
                    <p>Experience???</p>
                </div>
            </div>
            <div className="HomePage-featured">
                <div className="HomePage-featured-header">
                    <p>Homeless Projects</p>
                    <button onClick={() => navigate("/projects")}>More projects</button>
                </div>
                <div className="HomePage-projects">
                    <ProjectTile/>
                    <ProjectTile/>
                </div>
            </div>
        </div>
    );
}

export default HomePage;