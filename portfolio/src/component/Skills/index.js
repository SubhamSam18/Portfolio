import React from 'react'
import './index.scss'
import { SiCodechef, SiLeetcode, SiCodeforces, SiCplusplus } from 'react-icons/si';
import { FaHackerrank } from 'react-icons/fa';
// import {fa-light} from '@fontawesme./react-fontawesome'
const Skills = () => {
  return (
    <div className='skills-container'>

      <div className='skills-heading'>
        <h1>
          <br />
          Coding Platforms
          <br />
        </h1>
      </div>
      <div className='skills-body'>
        {/* <h1> 
          Here are some of my skill sets:
        </h1>
        <ul>
          <li>DSA</li>
          <li>C++</li>
          <li>Oops</li>
          <li>MySql</li>
        </ul> */}

        <div className='project-container'>
          <div className='project-heading'>
            <h1>Projects</h1>
          </div>
          <div className='project-cards'>
            <div className="card">
              {/* <img src="img_avatar.png" alt="Avatar" style="width:100%"> */}
                <div>
                  <h4><b>John Doe</b></h4>
                  <p>Architect & Engineer</p>
                </div>
            </div>
          </div>
        </div>
        <div className='stage-cube'>

          <div className='cube-spinner'>
            <div className='face1'>
              <SiCodechef />
              {/* <FontAwesomeIcon icon={faReact} color="red" /> */}
            </div>
            <div className='face2'>
              {/* <FontAwesomeIcon icon={faHtml5} color="red" /> */}
            </div>
            <div className='face3'>
              <SiLeetcode />
              {/* <FontAwesomeIcon icon={faCss3} color="red" /> */}
            </div>
            <div className='face4'>
              <SiCodeforces />
              {/* <FontAwesomeIcon icon={faNodeJs} color="red" /> */}
            </div>
            <div className='face5'>
              <SiCplusplus />
              {/* <FontAwesomeIcon icon={faBootstrap} color="red" /> */}
            </div>
            <div className='face6'>
              {/* <FontAwesomeIcon icon={faHackerrank} color="red" /> */}
              <FaHackerrank />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills;
