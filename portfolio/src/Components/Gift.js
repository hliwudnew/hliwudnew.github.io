import { useState } from "react";
import HeartCat from "../Images/Gif/HeartCat2.gif";
function Gift(){
    const [swap,setSwap] = useState("gift");
    return(
        <>
            {            
            swap == "cat"?
            <img style={{cursor:"pointer"}} onClick={() => setSwap("gift")} src={HeartCat}></img>
            :
            <svg onClick={() => setSwap("cat")} className="Icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 -0.5 16 16" shape-rendering="crispEdges">
                <metadata>Made with Pixels to Svg https://codepen.io/shshaw/pen/XbxvNj</metadata>
                <path stroke="#120e2f" d="M2 3h5M8 3h5M2 4h1M6 4h3M12 4h1M2 5h1M12 5h1M3 6h2M10 6h2M2 7h11M2 8h1M5 8h1M9 8h1M12 8h1M2 9h11M2 10h1M5 10h1M9 10h1M12 10h1M2 11h1M5 11h1M9 11h1M12 11h1M2 12h1M5 12h1M9 12h1M12 12h1M2 13h1M5 13h1M9 13h1M12 13h1M2 14h1M5 14h1M9 14h1M12 14h1M2 15h11" />
                <path stroke="#c7fba1" d="M3 4h3M9 4h3M3 5h9M5 6h5M6 8h3M6 10h3M6 11h3M6 12h3M6 13h3M6 14h3" />
                <path stroke="#ad4557" d="M3 8h2M10 8h2M3 10h2M10 10h2M3 11h2M10 11h2M3 12h2M10 12h2M3 13h2M10 13h2M3 14h2M10 14h2" />
            </svg>
            }
        </>
    )
}

export default Gift;