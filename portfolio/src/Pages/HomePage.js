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
import moneris from "../Images/moneris-logo-small.png";
import yorku from "../Images/YorkU.svg";
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
            img:"https://media.licdn.com/dms/image/v2/C560BAQGfC_b_UVrmuw/company-logo_200_200/company-logo_200_200/0/1680022474549?e=1749686400&v=beta&t=wZT8u5aD-dHUTcCSFWUWSB41tcn0S5yQOY4s5euBZsc",
            link:"https://deepdiveai.ca/",
        },
        {
            type:"work",
            started:"May 2022",
            ended:"Sept 2022",
            where:"Moneris",
            title:"Software QA: Summer Intern",
            points:["Was cool"],
            img:moneris,
            link:"https://www.moneris.com/",
        },
        {
            type:"education",
            started:"2021",
            ended:"2025",
            where:"York University",
            title:"Honours B.Sc. Computer Science",
            points:["4 Years - Dean's Honour Roll"],
            img:"https://media.licdn.com/dms/image/v2/D560BAQFI_4JbiEOmPQ/company-logo_200_200/company-logo_200_200/0/1688670035445?e=1749686400&v=beta&t=_L31awIslxG-ocNtiN53p-02vjCzOaMjG0ij1wnDCfo",
            link:"https://www.yorku.ca/",
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
                    <h1>Hi, I am Gabriel 👋</h1>
                    <p>Software Developer | Frontend | Canada 🍁</p>
                    <p>I love to learn and I get it done!</p>
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
                    <img className="HomePage-Picture" alt="Some How I Disappeared" src={me}></img>
                </div>
            </div>
            <div className="HomePage-experience">
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