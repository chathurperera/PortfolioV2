import cryptoMockup from "../public/projectMockups/cryptoMockup.png";
import appleMockup from "../public/projectMockups/appleMockup.png";
import edieMockup from "../public/projectMockups/edieMockup.png";
import netflixMockup from "../public/projectMockups/netflixMockup.png";
import onCord from "../public/projectMockups/onCord.png";
import airbnb from "../public/projectMockups/airbnb.png";
import portfolioV1 from "../public/projectMockups/portfolioV1.png";

export const projectData = [
    {
        name: "Netflix Clone App",
        techStack: [
            "HTML",
            "SCSS",
            "React.js",
            "Firebase",
        ],
        previewUrl:'https://netflix-bd7af.web.app/',
        codeUrl:'https://github.com/chathurperera/Netflix-Clone__NextJS',
        imageUrl:netflixMockup,
        description: "This is a clone of Netflix website built using React.JS as a Front-end & Firebase as Back-end.This site has the functionality to authenticate user logins.And also its integrated with stripe payment gateway."
    },
    {
        name: "Concord Agency landing page",
        techStack: [
            "HTML",
            "SCSS",
            "Tailwind CSS",
            "React.js",
        ],
        previewUrl:'https://concord-studio.vercel.app/',
        codeUrl:'https://github.com/chathurperera/Concord-Studio-ReactJs',
        imageUrl:onCord,
        description: "Concord Studio is a Digital Agency that offers a variety of services for a fixed fee. My goal was to recreate their landing page using react.js and tailwind CSS. "
    },
    {
        name: "Portfolio V.1",
        techStack: [
            "HTML",
            "SCSS",
            "JavaScript",
        ],
        previewUrl:'https://portfolio-v1-pi.vercel.app/',
        codeUrl:'https://github.com/chathurperera/Portfolio-V1',
        imageUrl:portfolioV1,
        description: "My first portfolio website i designed and built in 2020.I learned quite a bit about HTML SASS and javascript.Since then, i think my web development and design skills have improved immensely. "
    },
    {
        name: "Edie Web Design Agency",
        techStack: [
            "HTML",
            "SCSS",
            "JavaScript"
        ],
        previewUrl:'https://edie-webdesignagency.vercel.app/',
        codeUrl:'https://github.com/chathurperera/Edie-WebDesignAgency',
        imageUrl:edieMockup,
        description: "This site was created as a submission to a DevChallenges challenge.The challenge was to build a Landing page for a small team providing web services."
    },
    {
        name: "Airbnb Clone",
        techStack: [
            "HTML",
            "SCSS",
            "Next.js"
        ],
        previewUrl:'https://airbnb-clone-fc0d4.web.app/',
        codeUrl:'https://github.com/chathurperera/Airbnb-Clone',
        imageUrl:airbnb,
        description: "This is a clone of Airbnb website built using React.JS as a Front-end & Firebase as Back-end. It's not a replica, and it doesn't have all the features of Airbnb website.Tt's a similar version of Airbnb with my own design touch."
    },
    {
        name: "Crypto Price Tracker",
        techStack: [
            "HTML",
            "SCSS",
            "React.js"
        ],
        previewUrl:'https://crypto-price-tracker-three.vercel.app/',
        codeUrl:'https://github.com/chathurperera/Crypto-Price-Tracker',
        imageUrl:cryptoMockup,
        description: "A Cryptocurrency Finance Price Tracker built using react hooks and Axios which fetches data from an API and displays realtime data. Users can enter the name of crypto and get the current price, market cap, price change percentage, etc.And also the prices will update live whenever you refresh the page."
    },
    {
        name: "Apple website clone",
        techStack: [
            "HTML",
            "SCSS",
            "JavaScript"
        ],
        previewUrl:'https://applecloned.netlify.app/',
        codeUrl:'https://github.com/chathurperera/Apple-Hompage-Clone',
        imageUrl:appleMockup,
        description: "This is a clone of Netflix website built using React.JS as a Front-end & Firebase as Back-end.This site has the functionality to authenticate user logins.And also its integrated with stripe payment gateway."
    }
]