import "../Styles/IconStyles.css"
function Youtube({url}){
    //onClick={() => window.open(url, "_blank")} 
    return(
        <a href={url} target="_BLANK">
        <svg className="Icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 -0.5 16 16" shape-rendering="crispEdges">
        <metadata>Made with Pixels to Svg https://codepen.io/shshaw/pen/XbxvNj</metadata>
        <path stroke="#ff5c5c" d="M1 2h3M0 3h2M0 4h1" />
        <path stroke="#ff0000" d="M4 2h11M2 3h14M1 4h15M0 5h5M7 5h9M0 6h5M9 6h7M0 7h5M11 7h5M0 8h5M12 8h4M0 9h5M11 9h5M0 10h5M9 10h7M0 11h5M7 11h9M0 12h16M1 13h14" />
        <path stroke="#ffffff" d="M5 5h2M5 6h4M5 7h6M5 8h7M5 9h6M5 10h4M5 11h2" />
        </svg>
        </a>
    )
}
export default Youtube;