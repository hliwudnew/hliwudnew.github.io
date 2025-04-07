import "../Styles/ProjectsPage.css";
import Grabbit from "../Images/grabbit.png";
import StaticRide from "../Images/staticride.png";
import yorkLibrary from "../Images/yorkLibrary.png";
import { useState } from "react";
import ProjectTile from "../Components/ProjectTile";
function ProjectsPage(){

    const [projects,setProjects] = useState([
        {
            name:"Grabbit",
            description:"Ecommerce platform: User Oriented",
            img:Grabbit,
            techs:["React","MongoDB","Stripe","JWT"],
            repo:"https://github.com/hliwudnew/Grabbit",
            demo:"https://www.youtube.com/watch?v=rR0rE0_wH7E"
        },
        {
            name:"Static Ride",
            description:"Ecommerce platform: Car Dealership",
            img:StaticRide,
            repo:"https://github.com/dvoicu-cmd/EECS-4413",
            techs:["React", "MongoDB","AWS","JWT"],
            demo:""
        },
        {
            name:"York Library",
            description:"Student Library Platform",
            img:yorkLibrary,
            techs:["Java","CSV","Swing"],
            repo:"https://github.com/hliwudnew/YorkLibrary",
            demo:"https://drive.google.com/file/d/1rw3onmjnVfivlMKHnCWSzeJm5M7-gRA-/view?usp=sharing"
        },
    ])
    
    return(
        <div className="ProjectsPage-container">
            <h1>My Projects</h1>
            <div className="ProjectPage-projects">
                {
                    projects?
                    projects.map((project)=>{
                        return(
                            <ProjectTile key={project.name} data={project}/>
                        );
                    })
                    :
                    <p>No Projects Featured Currently</p>
                }
            </div>
        </div>
    );
}

export default ProjectsPage;