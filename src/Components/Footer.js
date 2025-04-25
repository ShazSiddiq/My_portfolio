import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Shahbaz Ahmad</h4>
      <h4>Copyright &copy; 2023 SZ</h4>
      <div className='footerLinks'>
        <a href="https://github.com/ShazSiddiq" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/shahbaz-ahmad-siddique-5a8357293/" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:sasiddique99@gmail.com' target='_blank'><GrMail/></a>
        {/* <a href="https://leetcode.com/sahni1403/" target="_blank"><SiLeetcode/></a> */}
      </div>
    </footer>
  )
}

export default Footer