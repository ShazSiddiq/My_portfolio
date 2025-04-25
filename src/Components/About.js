import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
            Hi, I'm <b>Shahbaz Ahmad</b> from New Delhi, India — a <b>MERN stack developer</b> working at <b>Innobles Smart Technology</b> as a <b>Full Stack Developer</b>.<br /><br />

            At Innobles, I’ve delivered <b>5+ full-cycle projects</b> involving <b>payment integration</b> and third-party tools. Some notable ones include:<br />
            <b>Myte</b> (task & employee management), <b>Waste Management Aligarh</b> (QR-based real-time waste tracking), <b>Land Acquisition Portal - HP</b>, and <b>HCBS</b> (public transport system).<br /><br />

            I’ve also <b>represented the company</b> in client meetings, ensuring smooth communication and delivery.<br /><br />

            I love building clean, functional, and impactful products. You can explore my work in the Projects section.<br /><br />

            <b>Open to collaboration</b> and new opportunities—feel free to connect via links in the footer.
          </p>


        </div>

        <div>
          <Tilt>
            <Lottie
              className="illustration"
              animationData={Coder}
              loop={true}
            />
          </Tilt>
        </div>

      </div>

      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>

        <Skills skill='React' />
        <Skills skill='Node' />
        <Skills skill='Express' />
        <Skills skill='MongoDb' />
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Javascript' />
        <Skills skill='RazorPay' />
        <Skills skill='Postman' />
        <Skills skill='Figma' />
        <Skills skill='Vercel' />
        <Skills skill='Npm' />
        <Skills skill='Bootstrap' />
        <Skills skill='Tailwindcss' />

      </div>
    </>
  )
}

export default About