import "../Styles/IconStyles.css";
import {useNavigate } from "react-router-dom";
function Projects({page,setPage}){
    const navigate = useNavigate();

    function changeButtons(){
        setPage("projects");
        navigate("/projects");
        window.scrollTo(0, 0);
    }
    return(
        <>
        {
        page === "projects"?
            <svg className="Button" xmlns="http://www.w3.org/2000/svg" viewBox="0 -0.5 54 16" shape-rendering="crispEdges">
            <metadata>Made with Pixels to Svg https://codepen.io/shshaw/pen/XbxvNj</metadata>
            <path stroke="#120e2f" d="M5 1h44M3 2h2M49 2h2M2 3h1M5 3h44M51 3h1M1 4h1M4 4h1M49 4h1M52 4h1M1 5h1M3 5h1M50 5h1M52 5h1M0 6h1M2 6h1M51 6h1M53 6h1M0 7h1M2 7h1M51 7h1M53 7h1M0 8h1M2 8h1M51 8h1M53 8h1M0 9h1M2 9h1M51 9h1M53 9h1M0 10h1M2 10h1M51 10h1M53 10h1M1 11h1M3 11h1M50 11h1M52 11h1M1 12h1M4 12h1M49 12h1M52 12h1M2 13h1M5 13h44M51 13h1M3 14h2M49 14h2M5 15h44" />
            <path stroke="#5670c2" d="M5 2h44M3 3h1M50 3h1M2 4h1M51 4h1M3 10h2M49 10h2M4 11h2M48 11h2M5 12h44" />
            <path stroke="#293377" d="M4 3h1M49 3h1M3 4h1M50 4h1M2 5h1M5 5h2M10 5h2M15 5h3M20 5h3M28 5h1M32 5h2M37 5h1M43 5h2M47 5h2M51 5h1M1 6h1M4 6h3M8 6h2M11 6h1M13 6h2M16 6h1M18 6h2M21 6h4M26 6h3M30 6h3M34 6h6M41 6h3M45 6h5M52 6h1M1 7h1M4 7h3M8 7h2M11 7h1M13 7h2M16 7h1M18 7h2M21 7h4M26 7h3M30 7h3M34 7h6M41 7h3M45 7h5M52 7h1M1 8h1M3 8h4M8 8h2M11 8h1M13 8h2M16 8h1M18 8h2M21 8h4M26 8h3M31 8h2M34 8h6M41 8h4M46 8h5M52 8h1M1 9h1M3 9h4M10 9h2M15 9h2M18 9h2M21 9h4M26 9h3M30 9h3M34 9h6M41 9h5M47 9h4M52 9h1M5 10h2M8 10h4M13 10h2M16 10h1M18 10h2M21 10h1M23 10h2M26 10h3M30 10h3M34 10h6M41 10h5M47 10h2M6 11h1M8 11h4M13 11h2M16 11h2M20 11h3M25 11h4M32 11h2M37 11h3M41 11h3M46 11h2" />
            <path stroke="#1b1b52" d="M5 4h44M4 5h1M49 5h1M3 6h1M50 6h1M3 7h1M50 7h1M1 10h1M52 10h1M2 11h1M51 11h1M2 12h2M50 12h2M3 13h2M49 13h2M5 14h44" />
            <path stroke="#aabfe0" d="M7 5h3M12 5h3M18 5h2M23 5h5M29 5h3M34 5h3M38 5h5M45 5h2M7 6h1M10 6h1M12 6h1M15 6h1M17 6h1M20 6h1M25 6h1M29 6h1M33 6h1M40 6h1M44 6h1M7 7h1M10 7h1M12 7h1M15 7h1M17 7h1M20 7h1M25 7h1M29 7h1M33 7h1M40 7h1M44 7h1M7 8h1M10 8h1M12 8h1M15 8h1M17 8h1M20 8h1M25 8h1M29 8h2M33 8h1M40 8h1M45 8h1M7 9h3M12 9h3M17 9h1M20 9h1M25 9h1M29 9h1M33 9h1M40 9h1M46 9h1M7 10h1M12 10h1M15 10h1M17 10h1M20 10h1M22 10h1M25 10h1M29 10h1M33 10h1M40 10h1M46 10h1M7 11h1M12 11h1M15 11h1M18 11h2M23 11h2M29 11h3M34 11h3M40 11h1M44 11h2" />
            </svg>
        :
            <svg onClick={changeButtons} className="Button" xmlns="http://www.w3.org/2000/svg" viewBox="0 -0.5 54 16" shape-rendering="crispEdges">
            <metadata>Made with Pixels to Svg https://codepen.io/shshaw/pen/XbxvNj</metadata>
            <path stroke="#120e2f" d="M5 1h44M3 2h2M49 2h2M2 3h1M5 3h44M51 3h1M1 4h1M4 4h1M49 4h1M52 4h1M1 5h1M3 5h1M50 5h1M52 5h1M0 6h1M2 6h1M51 6h1M53 6h1M0 7h1M2 7h1M51 7h1M53 7h1M0 8h1M2 8h1M51 8h1M53 8h1M0 9h1M2 9h1M51 9h1M53 9h1M0 10h1M2 10h1M51 10h1M53 10h1M1 11h1M3 11h1M50 11h1M52 11h1M1 12h1M4 12h1M49 12h1M52 12h1M2 13h1M5 13h44M51 13h1M3 14h2M49 14h2M5 15h44" />
            <path stroke="#5670c2" d="M5 2h44M3 3h1M50 3h1M2 4h1M5 4h44M51 4h1M4 5h1M49 5h1M3 6h1M50 6h1M3 7h1M50 7h1" />
            <path stroke="#293377" d="M4 3h1M49 3h1M3 4h1M50 4h1M2 5h1M5 5h2M10 5h2M15 5h3M20 5h3M28 5h1M32 5h2M37 5h1M43 5h2M47 5h2M51 5h1M1 6h1M4 6h3M8 6h2M11 6h1M13 6h2M16 6h1M18 6h2M21 6h4M26 6h3M30 6h3M34 6h6M41 6h3M45 6h5M52 6h1M1 7h1M4 7h3M8 7h2M11 7h1M13 7h2M16 7h1M18 7h2M21 7h4M26 7h3M30 7h3M34 7h6M41 7h3M45 7h5M52 7h1M1 8h1M3 8h4M8 8h2M11 8h1M13 8h2M16 8h1M18 8h2M21 8h4M26 8h3M31 8h2M34 8h6M41 8h4M46 8h5M52 8h1M1 9h1M3 9h4M10 9h2M15 9h2M18 9h2M21 9h4M26 9h3M30 9h3M34 9h6M41 9h5M47 9h4M52 9h1M5 10h2M8 10h4M13 10h2M16 10h1M18 10h2M21 10h1M23 10h2M26 10h3M30 10h3M34 10h6M41 10h5M47 10h2M6 11h1M8 11h4M13 11h2M16 11h2M20 11h3M25 11h4M32 11h2M37 11h3M41 11h3M46 11h2" />
            <path stroke="#cfe8ff" d="M7 5h3M12 5h3M18 5h2M23 5h5M29 5h3M34 5h3M38 5h5M45 5h2M7 6h1M10 6h1M12 6h1M15 6h1M17 6h1M20 6h1M25 6h1M29 6h1M33 6h1M40 6h1M44 6h1M7 7h1M10 7h1M12 7h1M15 7h1M17 7h1M20 7h1M25 7h1M29 7h1M33 7h1M40 7h1M44 7h1M7 8h1M10 8h1M12 8h1M15 8h1M17 8h1M20 8h1M25 8h1M29 8h2M33 8h1M40 8h1M45 8h1M7 9h3M12 9h3M17 9h1M20 9h1M25 9h1M29 9h1M33 9h1M40 9h1M46 9h1M7 10h1M12 10h1M15 10h1M17 10h1M20 10h1M22 10h1M25 10h1M29 10h1M33 10h1M40 10h1M46 10h1M7 11h1M12 11h1M15 11h1M18 11h2M23 11h2M29 11h3M34 11h3M40 11h1M44 11h2" />
            <path stroke="#1b1b52" d="M1 10h1M3 10h2M49 10h2M52 10h1M2 11h1M4 11h2M48 11h2M51 11h1M2 12h2M5 12h44M50 12h2M3 13h2M49 13h2M5 14h44" />
            </svg>
        }
        </>
    );
}

export default Projects;