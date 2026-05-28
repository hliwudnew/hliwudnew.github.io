import moneris from "../Images/moneris-logo-small.png";
import yorku from "../Images/YorkU.jpg";
import deepdiveai from "../Images/deepdiveai.jpg";
import tata from "../Images/tata.jpg";
const experience = [
    {
        type:"work",
        started:"June 2025",
        ended:"Present",
        where:"TCS at Air Canada",
        title:"Backend AWS Software Development: Full Time Developer",
        points:[
            "Development in JavaScript and TypeScript within AWS",
            "Building and maintaining backend infrastructure for direct consumer facing services",
            "Unit + End to End Testing of developed code",
            "AI configuration and planning, with prompt enhancement crafting",
        ],
        img:tata,
        link:"https://www.tcs.com/",
    },
    {
        type:"work",
        started:"May 2023",
        ended:"Sept 2023",
        where:"Deepdiveai",
        title:"Frontend Software Development: Summer Intern",
        points:[
            "Development in MERN: MongoDB, Express, React, Node.js",
            "Developed frontend features in React for memo editing and processing for backend",
            "Built utility features with Lexical for memo editing",
            "Constructed design documentations for project documentation and represenation",
        ],
        img:deepdiveai,
        link:"https://deepdiveai.ca/",
    },
    {
        type:"work",
        started:"May 2022",
        ended:"Sept 2022",
        where:"Moneris",
        title:"Software QA: Summer Intern",
        points:[
            "Developed Jmeter tests for backend preformace testing under all load circumstances", 
            "Tested new front end UI features and tested backend features with Postman",
            "Facilitated meetings to address website defects and coordinated solutions with the development team. ",
        ],
        img:moneris,
        link:"https://www.moneris.com/",
    },
    {
        type:"education",
        started:"2021",
        ended:"2025",
        where:"York University",
        title:"Lassonde School of Engineering, B.Sc., Hons. Computer Science",
        points:["Graduated First Class Standing","4 Years - Dean's Honour Roll"],
        img:yorku,
        link:"https://www.yorku.ca/",
    }
]

export default experience;