import "../Styles/HomePage.css";
import me from "../Images/images.png"
import ProjectTile from "../Components/ProjectTile";
import {useNavigate } from "react-router-dom";
import LinkedIn from "../Components/LinkedIn";
import Github from "../Components/Github";
import Email from "../Components/Email";
import Resume from "../Components/Resume";
import Experience from "../Components/Experience";
import Grabbit from "../Images/grabbit.png";
import StaticRide from "../Images/staticride.png"
import { useState } from "react";
function HomePage(){
    const navigate = useNavigate();
    // const [experiences,setExperiences] = useState([
    //     {
            
    //     }
    // ])

    //Limit of 2, need to change scaling adn allow warp for more
    const [projects,setProjects] = useState([
        {
            name:"Grabbit",
            description:"Ecommerce platform: User Oriented",
            img:Grabbit,
            techs:["React","Stripe","JWT"],
            demo:"https://www.youtube.com/watch?v=rR0rE0_wH7E"
        },
        {
            name:"Static Ride",
            description:"Ecommerce platform: Car Dealership",
            img:StaticRide,
            techs:["React","AWS","JWT"],
            demo:""
        },
    ])

    return(
        <div className="HomePage-container">
            <div className="HomePage-introduction">
                <div className="HomePage-blurb">
                    <h1>Hi, I am Gabriel</h1>
                    <p>Software Developer | Frontend | 📌 Canada 🍁</p>
                    <p>I learn and I get it done</p>
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
                    <Experience/>
                    <Experience/>
                </div>
            </div>
            <div className="HomePage-featured">
                <div className="HomePage-featured-header">
                    <h2>Featured Projects</h2>
                    <button onClick={() => navigate("/projects")}>More projects</button>
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