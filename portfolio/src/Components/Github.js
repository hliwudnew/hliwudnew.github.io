import "../Styles/IconStyles.css"
function Github({url}){
    return(
        <a href={url} target="_BLANK">
        <svg className="Icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 -0.5 16 16" shape-rendering="crispEdges">
            <metadata>Made with Pixels to Svg https://codepen.io/shshaw/pen/XbxvNj</metadata>
            <path stroke="#000000" d="M6 1h5M5 2h7M4 3h1M6 3h5M12 3h1M3 4h2M6 4h1M10 4h1M12 4h2M2 5h3M12 5h3M1 6h3M13 6h3M1 7h3M13 7h3M1 8h3M13 8h3M1 9h4M12 9h4M1 10h6M10 10h6M2 11h1M4 11h3M10 11h5M3 12h1M10 12h4M4 13h3M10 13h3M5 14h2M10 14h2M6 15h5" />
            <path stroke="#272727" d="M4 2h1M12 2h1M3 3h1M13 3h1M2 4h1M14 4h1M2 12h1M14 12h1M3 13h1M13 13h1M4 14h1M12 14h1" />
            <path stroke="#ffffff" d="M5 3h1M11 3h1M5 4h1M7 4h3M11 4h1M5 5h7M4 6h9M4 7h9M4 8h9M5 9h7M7 10h3M3 11h1M7 11h3M4 12h6M7 13h3M7 14h3" />
        </svg>
        </a>
    );
}

export default Github;