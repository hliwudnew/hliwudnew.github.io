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
    const [swapData,setSwapData] = useState("work");
    const [experience,setExperience] = useState([
        {
            type:"work",
            started:"May 2023",
            ended:"Sept 2023",
            where:"Deepdiveai",
            title:"Frontend Software Development: Summer Intern",
            points:["Stellar time","Wicked"],
        },
        {
            type:"work",
            started:"May 2022",
            ended:"Sept 2022",
            where:"Moneris",
            title:"Software QA: Summer Intern",
            points:["Was cool"],
        },
        {
            type:"education",
            started:"2021",
            ended:"2025",
            where:"York University",
            title:"Honours B.Sc. Computer Science",
            points:["4 Years - Dean's Honour Roll"],
        }
    ])

    //Only do 2, more might look like a whole lot to look at, as in overwhealming
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
                    <button onClick={() => setSwapData("work")}>Work</button>
                    <button onClick={() => setSwapData("education")}>Education</button>
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