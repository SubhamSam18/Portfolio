import React from 'react'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBootstrap,faCss3, faHtml5, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';

import {SiMongodb} from 'react-icons/si';
import Typical from 'react-typical'
const About = () => {
  console.log("Hello About!");
  return (
    <div className='container-about-section'>
      <div className='about-heading'>
        <h1><br />About</h1>
      </div>
        <div className='about-body'>
        <Typical
            loop={Infinity}
            steps={[
               `Hi, I'm a web developer with a focus on the MERN stack, but still 
               exploring other technologies and frameworks that catch my interest!
               If you're looking for a developer to add to your team, 
               I'd love to hear from you!`,
              200,
            ]} />
          {/* <p>
            Hi, I'm a web developer with a focus on the MERN stack, but still <br></br><br></br>exploring other technologies and frameworks that catch my interest!<br></br><br></br> If you're looking for a developer to add to your team, <br></br><br></br>I'd love to hear from you!
          </p> */}
        </div>
        
        <div className='stage-cube'>
          <div className='cube-spinner'>
            <div className='face1'>
              <FontAwesomeIcon icon={faCss3} color="red" />
            </div>
            <div className='face2'>
              <FontAwesomeIcon icon={faHtml5} color="red" />
            </div>
            <div className='face3'>
              <FontAwesomeIcon icon={faReact} color="red" />
            </div>
            <div className='face4'>
              <FontAwesomeIcon icon={faNodeJs} color="red" />
            </div>
            <div className='face5'>
              <FontAwesomeIcon icon={faBootstrap} color="red" />
            </div>
            <div className='face6'>
              <SiMongodb color="red" />
            </div>
          </div>
        </div>
    </div>
  ) ;
}

export default About;


