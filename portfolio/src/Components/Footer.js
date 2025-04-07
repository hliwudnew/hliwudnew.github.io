import "../Styles/Footer.css";
import Email from "./Email";
import Github from "./Github";
import LinkedIn from "./LinkedIn";
function Footer(){
    
    return(
        <div className="Footer-container">
            <div className="Footer-copyright">
                <p>© 2025 Gabriel Henderson</p>
            </div>
            <div className="Footer-contacts">
                <LinkedIn/>
                <Github/>
                <Email/>
            </div>
        </div>
    );
}

export default Footer;