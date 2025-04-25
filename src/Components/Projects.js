import React from 'react';
import ProjectBox from './ProjectBox';
import NewsletterImage from '../images/NewsletterImage.png';
import RogfreeImage from '../images/RogfreeImage.png';
import WigglesImage from '../images/WigglesImage.png';
import WasteImage from '../images/WasteImage.png'; // Replace with actual image
import LandImage from '../images/LandImage.png';   // Replace with actual image
import MyteImage from '../images/MyteImage.png';   // Replace with actual image
// import HCBSImage from '../images/HCBSImage.png';   // Replace with actual image

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={WasteImage} projectName="Waste Management System" />
        <ProjectBox projectPhoto={LandImage} projectName="Land" />
        <ProjectBox projectPhoto={MyteImage} projectName="Employee Management System" />
        {/* <ProjectBox projectPhoto={HCBSImage} projectName="Haryana City bus Service" /> */}
      </div>
    </div>
  )
}

export default Projects;
