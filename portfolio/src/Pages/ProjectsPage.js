import "../Styles/ProjectsPage.css";
import { useState } from "react";
import ProjectTile from "../Components/ProjectTile";
import projectsData from "../data/projects";
function ProjectsPage(){
    const [projects,setProjects] = useState(projectsData);
    
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