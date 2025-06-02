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
import yorku from "../Images/YorkU.jpg";
import deepdiveai from "../Images/deepdiveai.jpg"
import TechStack from "../Images/TechStack/images.js"
import Gabriel from "../Images/me.jpg";
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
            points:[
                "Developed frontend features in React for memo editing and processing for backend",
                "Built utility features with Lexical for memo editing",
                "Constructed design documentations for project documentation and represenation",
            ],
            img:deepdiveai,
            link:"https://deepdiveai.ca/",
        },
        {
            type:"work",
            started:"May 2022",
            ended:"Sept 2022",
            where:"Moneris",
            title:"Software QA: Summer Intern",
            points:[
                "Developed Jmeter tests for backend preformace testing under all load circumstances", 
                "Tested new front end UI features and tested backend features with Postman",
                "Constructed team meetings for bug reviews and solutions",
            ],
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
            img:yorku,
            link:"https://www.yorku.ca/",
        }
    ])

    //Only do 2, more might look like a whole lot to look at, as in overwhealming
    const [projects,setProjects] = useState([
        {
            name:"Grabbit",
            description:"Ecommerce platform - User Oriented: A platform for selling and buying new and used goods, with built in messaging, Stripe payment, seller dashboard, sales stats, and watchlists.",
            img:Grabbit,
            techs:["React","MongoDB","Stripe","JWT"],
            repo:"https://github.com/hliwudnew/Grabbit",
            demo:"https://www.youtube.com/watch?v=rR0rE0_wH7E"
        },
        {
            name:"Static Ride",
            description:"Ecommerce platform - Car Dealership: Fully online car dealership with online purchases for vehicles, reviews, comparisons, usage stats, sales records, and with Gemini chatbot asssistance.",
            img:StaticRide,
            techs:["React", "MongoDB","AWS","JWT"],
            repo:"https://github.com/dvoicu-cmd/EECS-4413",
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
                                        <img style={{width:"32px", height:"32px", marginRight:"5%"}} src={TechStack[tech]}></img>
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