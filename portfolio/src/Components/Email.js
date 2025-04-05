import "../Styles/IconStyles.css"
function Email(){
    return(
        <svg onClick={() => window.open("mailto:ghenderson8181@gmail.com")} className="Icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 -0.5 16 16" shape-rendering="crispEdges">
            <metadata>Made with Pixels to Svg https://codepen.io/shshaw/pen/XbxvNj</metadata>
            <path stroke="#ad4557" d="M1 2h14M0 3h1M15 3h1M0 4h2M14 4h2M0 5h1M2 5h1M13 5h1M15 5h1M0 6h1M3 6h1M12 6h1M15 6h1M0 7h1M4 7h1M11 7h1M15 7h1M0 8h1M4 8h2M10 8h2M15 8h1M0 9h1M3 9h1M6 9h1M9 9h1M12 9h1M15 9h1M0 10h1M2 10h1M7 10h2M13 10h1M15 10h1M0 11h2M14 11h2M0 12h1M15 12h1M1 13h14" />
            <path stroke="#cbcbcb" d="M1 3h1M14 3h1M2 4h1M13 4h1M3 5h1M12 5h1M4 6h1M11 6h1M5 7h1M10 7h1M6 8h1M9 8h1M4 9h1M7 9h2M11 9h1M3 10h1M12 10h1M2 11h1M13 11h1M1 12h1M14 12h1" />
            <path stroke="#ffffff" d="M2 3h12M3 4h10M1 5h1M4 5h8M14 5h1M1 6h2M5 6h6M13 6h2M1 7h3M6 7h4M12 7h3M1 8h3M7 8h2M12 8h3M1 9h2M5 9h1M10 9h1M13 9h2M1 10h1M4 10h3M9 10h3M14 10h1M3 11h10M2 12h12" />
        </svg>
    );
}

export default Email;