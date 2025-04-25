import React from 'react'; 
// import { CgCPlusPlus } from "react-icons/cg";
import {FaReact, FaGitAlt, FaGithub, FaNpm, FaFigma, FaBootstrap} from "react-icons/fa";
import {DiNodejs, DiJavascript1} from "react-icons/di";
import {SiExpress, SiMongodb, SiPostman, SiTailwindcss, SiVercel} from "react-icons/si";


const RazorpayIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 512 512"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ verticalAlign: "middle" }}
  >
    <path
      d="M128.36 472.27L320.61 39.74C325.83 28.14 336.79 20.13 349.52 20.13H438.84L246.6 452.66C241.38 464.26 230.41 472.27 217.68 472.27H128.36ZM197.2 355.2H328.26L362.87 277.13H231.81L197.2 355.2Z"
      fill="#fff"
    />
  </svg>
);

const Skills = ({skill}) => {
    const icon = {
        'RazorPay': <RazorpayIcon />,
        Postman: <SiPostman/>,
        React: <FaReact/>,
        Javascript: <DiJavascript1/>,
        Node : <DiNodejs/>,
        Express : <SiExpress/>,
        MongoDb : <SiMongodb/>,
        Git : <FaGitAlt/>,
        Github : <FaGithub/>,
        Npm : <FaNpm/>,
        Figma : <FaFigma/>,
        Bootstrap: <FaBootstrap/>,
        Vercel : <SiVercel/>,
        Tailwindcss:<SiTailwindcss/>
    }
    
  return (
    <div title={skill} className='SkillBox'>
      {icon[skill]}
    </div>
  )
}

export default Skills
