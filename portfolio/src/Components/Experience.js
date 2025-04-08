import "../Styles/Experience.css";
function Experience({data}){
    return(
        <div className="Experience-container">
            <div className="Experience-chain">
                {/* 0 -0.5 17 32 */}
                <svg style={{width:"100%", height:"100%"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 -0.5 17 31" shape-rendering="crispEdges">
                    <a href={data.link?data.link:""} target="_BLANK">
                        <image x="2.5" y="4" width="1500" height="1000" className="Experience-img" href={data.img?data.img:"https://upload.wikimedia.org/wikipedia/commons/f/f8/Wikipedia_editor_hat_w_dog.JPG"}></image>
                    </a>
                    <metadata>Made with Pixels to Svg https://codepen.io/shshaw/pen/XbxvNj</metadata>
                    <path stroke="#cfe8ff" d="M7 0h3M8 1h1M7 2h3M7 3h1M9 3h1M7 4h3M8 5h1M7 6h3M7 7h1M9 7h1M6 8h5M4 9h2M11 9h2M3 10h1M13 10h1M2 11h1M14 11h1M2 12h1M14 12h1M1 13h1M15 13h1M1 14h1M15 14h1M1 15h1M15 15h1M1 16h1M15 16h1M1 17h1M15 17h1M2 18h1M14 18h1M2 19h1M14 19h1M3 20h1M13 20h1M4 21h2M11 21h2M6 22h5M7 23h1M9 23h1M7 24h3M8 25h1M7 26h3M7 27h1M9 27h1M7 28h3M8 29h1M7 30h3M7 31h1M9 31h1" />
                    <path stroke="#293377" d="M5 6h1M11 6h1M4 7h1M12 7h1M0 11h1M16 11h1M0 19h1M16 19h1M4 23h1M12 23h1M5 24h1M11 24h1" />
                    <path stroke="#5670c2" d="M6 6h1M10 6h1M5 7h1M11 7h1M3 8h1M13 8h1M2 9h1M14 9h1M1 10h1M15 10h1M0 12h1M16 12h1M0 18h1M16 18h1M1 20h1M15 20h1M2 21h1M14 21h1M3 22h1M13 22h1M5 23h1M11 23h1M6 24h1M10 24h1" />
                    <path stroke="#aabfe0" d="M6 7h1M10 7h1M4 8h2M11 8h2M3 9h1M13 9h1M2 10h1M14 10h1M1 11h1M15 11h1M1 12h1M15 12h1M0 13h1M16 13h1M0 14h1M16 14h1M0 15h1M16 15h1M0 16h1M16 16h1M0 17h1M16 17h1M1 18h1M15 18h1M1 19h1M15 19h1M2 20h1M14 20h1M3 21h1M13 21h1M4 22h2M11 22h2M6 23h1M10 23h1" /> 
                </svg>
            </div>
            <div className="Experience-details">
                <p style={{margin:"0%"}}>{data.started} - {data.ended}</p>
                <h4 style={{margin:"0%"}}>{data.where}</h4>
                <p style={{margin:"0%"}}>{data.title}</p>
                <ul style={{margin:"0%", marginTop:"1%"}}>
                {
                    data?
                    data.points.map((point,index) =>{
                        return(
                            <li key={index}>{point}</li>
                        );
                    })
                    :
                    <p>No Points</p>
                }
                </ul>
            </div>
        </div>
    );
}

export default Experience;