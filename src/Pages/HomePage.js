import "../Styles/HomePage.css";
import ProjectTile from "../Components/ProjectTile";
import {useNavigate } from "react-router-dom";
import LinkedIn from "../Components/LinkedIn";
import Github from "../Components/Github";
import Email from "../Components/Email";
import Resume from "../Components/Resume";
import Experience from "../Components/Experience";
import { useState } from "react";
import TechStack from "../Images/TechStack/images.js"
import Gabriel from "../Images/me.jpg";
import experiencesData from "../data/experiences.js"
import projectsData from "../data/projects.js";
function HomePage(){
    const navigate = useNavigate();
    const [swapData,setSwapData] = useState("work");
    const [experience,setExperience] = useState(experiencesData);

    //Only do 2, more might look like a whole lot to look at, as in overwhealming
    const [projects,setProjects] = useState(projectsData.slice(0,2));

    return(
        <div className="HomePage-container">
            <div className="HomePage-introduction">
                <div className="HomePage-blurb">
                    <h1>Hi, I am Gabriel 👋</h1>
                    <p>Software Developer | Toronto, Canada 🍁</p>
                    <p>I love to learn and strive for more!</p>
                    <div className="HomePage-contacts">
                        <div className="HomePage-resume">
                            <Resume/>
                            <p>Resume</p>
                        </div>
                        <LinkedIn/>
                        <Github url={"https://github.com/hliwudnew"}/>
                        <Email/>
                    </div>
                </div>
                <div className="HomePage-Picture-container">
                    <img className="HomePage-Picture" alt="Some How I Disappeared" src={Gabriel}></img>
                </div>
            </div>
            <div className="HomePage-techstack">
                <h2>Tech Stack</h2>
                <div className="HomePage-techstack-contents">
                    {
                        TechStack?
                            (Object.keys(TechStack)).map((tech) =>{
                                return(
                                    <div key={tech} className="TechStack-Combo">
                                        <img alt={tech + `_img`} style={{width:"32px", height:"32px", marginRight:"5%"}} src={TechStack[tech]}></img>
                                        <p>{tech}</p>
                                    </div>
                                )
                            })
                        :
                        <></>
                    }
                </div>
            </div>
            <div className="HomePage-experience">
                <h2>Experience</h2>
                <div className="HomePage-experience-toggle">
                    <button className="HomePage-Button" style={{cursor:"pointer",border:"none",color: swapData !== "work"?"#000511ee":"#aabfe0", backgroundColor: swapData !== "work"?"#aabfe0":"#000511ee", borderRadius:"10px", width:"100%"}} onClick={() => setSwapData("work")}><strong>Work</strong></button>
                    <button style={{cursor:"pointer",border:"none",color: swapData !== "education"?"#000511ee":"#aabfe0", backgroundColor: swapData !== "education"?"#aabfe0":"#000511ee", borderRadius:"10px", width:"100%"}} onClick={() => setSwapData("education")}><strong>Education</strong></button>
                </div>
                <div className="HomePage-experience-content">
                    {
                        experience?
                        experience.map((exp,index) =>{
                            if(exp.type !== swapData)return;

                            return(
                                <Experience key={index} data={exp}/>
                            )
                        })
                        :
                        <p>No Experiences Listed</p>
                    }
                    <div className="HomePage-experience-line"></div>
                </div>
            </div>
            <div className="HomePage-featured">
                <div className="HomePage-featured-header">
                    <h2>Featured Projects</h2>
                    {/* <button onClick={() => navigate("/projects")}>More projects</button> */}
                </div>
                <div className="HomePage-projects">
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
        </div>
    );
}

export default HomePage;