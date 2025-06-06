import "../Styles/Experience.css";
function Experience({data}){
    return(
        <div className="Experience-container">
            <div className="Experience-chain">
                {/* 0 -0.5 17 32 */}
                <div className="Experience-img-container">
                    <a href={data.link?data.link:""} target="_BLANK">
                        <img className="Experience-img" src={data.img?data.img:"https://upload.wikimedia.org/wikipedia/commons/f/f8/Wikipedia_editor_hat_w_dog.JPG"}></img>
                    </a>
                </div>
            </div>
            <div className="Experience-details">
                <p style={{margin:"0%"}}>{data.started} - {data.ended}</p>
                <h4 style={{margin:"0%"}}>{data.where}</h4>
                <p style={{margin:"0%"}}>{data.title}</p>
                <ul className="Experience-Bullets" style={{margin:"0%", marginTop:"1%"}}>
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