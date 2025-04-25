import React from 'react';
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const titles = {
    Waste: "Waste Management System – Aligarh",
    Land: "Land Acquisition Management System – Himachal Pradesh",
    Myte: "Myte (Monitor Your Task & Employees)",
    HCBS: "HCBS (Haryana City Bus Service)",
  };
  const desc = {
    WasteDesc: "A district-level waste tracking portal with a clear role-based hierarchy. From DM/CDO/DPRO to SafaiKarmi, every level can manage and monitor operations. Integrated with a mobile app and QR-based waste collection for real-time reporting across Aligarh.",
    WasteWebsite: "https://aligarh.swachchbharat.com/",

    LandDesc: "A government portal for managing and distributing land acquisition awards for areas covered under the Gaggal Airport project. Ensures transparent, efficient, and digitized handling of compensation and beneficiary records.",
    LandWebsite: "https://lamsgaggal.com/login",

    MyteDesc: "A task and employee management system that helps admins and managers assign tasks, track work time, monitor progress, and boost team productivity with real-time insights.",
    MyteWebsite: "https://myte.innobles.com/",

    HCBSDesc: "A transit project aimed at improving public bus transport services with role-based management and real-time data tracking.",
    HCBSWebsite: "",
  };

  return (
    <div className='projectBox'>
      <img className='projectPhoto' src={projectPhoto} alt="Project display" />
      <div>
        <br />
        <h3>{titles[projectName]}</h3>
        <br />
        {desc[projectName + 'Desc']}
        <br />
        {desc[projectName + 'Website'] && (
          <a href={desc[projectName + 'Website']} target='_blank' rel="noreferrer">
            <button className='projectbtn'><CgFileDocument /> Demo</button>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectBox;
