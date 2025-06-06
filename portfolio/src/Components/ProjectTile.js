import "../Styles/ProjectTile.css";
import {useNavigate } from "react-router-dom";
import Github from "./Github";
import Youtube from "./Youtube";
function ProjectTile({data}){
    const navigate = useNavigate();
    return(
        <div className="ProjectTile-container">
            <div className="ProjectTile-img-container">
                <img className="ProjectTile-img" src={data.img?data.img:""} alt="No Image Found"></img>
            </div>
            <div className="ProjectTile-details">
                <h4 style={{margin:"0%"}}>{data.name?data.name:"Name Not Found"}</h4>
                <p style={{margin:"0%"}}>{data.description?data.description:"Description Not Found"}</p>
            </div>
            <div className="ProjectTile-frameworks">
                {
                    data.techs?
                    data.techs.map((text, index) =>{
                        return(
                            <p key={index} style={{margin:"0%",marginBottom:"2%", marginRight:"2%",padding:"2%", borderRadius:"15%", backgroundColor:"#293377", color:"#cfe8ff"}}>{text}</p>
                        )
                    })
                    :
                    <></>
                }
            </div>
            <div className="ProjectTile-buttons">
                <Github url={data.repo}/>
                {
                    data.demo?
                    <Youtube url={data.demo}/>
                    :
                    <></>
                }
            </div>
        </div>
    );
}

export default ProjectTile;