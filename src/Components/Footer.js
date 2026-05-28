import "../Styles/Footer.css";
import Email from "./Email";
import Github from "./Github";
import LinkedIn from "./LinkedIn";
import Cat from "../Images/Gif/Cat2.gif";
function Footer(){
    
    return(
        <div className="Footer-container">
            <div className="Footer-copyright">
                <p>© 2025 Gabriel Henderson</p>
            </div>
            <img src={Cat}></img>
            <div className="Footer-contacts">
                <LinkedIn/>
                <Github url={"https://github.com/hliwudnew"}/>
                <Email/>
            </div>
        </div>
    );
}

export default Footer;