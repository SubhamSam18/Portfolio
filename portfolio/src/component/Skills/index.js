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

        <div className='project-container'>
          <div className='project-heading'>
            <h1>Projects</h1>
          </div>
          <div className='project-cards'>

            <div className="card">
              {/* <img src="img_avatar.png" alt="Avatar" style="width:100%"> */}
              <div className='design'>
                <div className='card-footer'>
                  <a href='https://github.com/SubhamSam18/MERN'>
                    <h2>Exercise Tracker<br /><h3>ReactJs, Nodejs, Express, MongoDB</h3></h2>
                  </a>
                </div>
              </div>
            </div>

            <div className="card">
              {/* <img src="img_avatar.png" alt="Avatar" style="width:100%"> */}
              <div className='design'>
                
              </div>
              <div className='card-footer'>
                  <a href='https://github.com/SubhamSam18/Blog-App-using-ReactJs'>
                    <h2>Blog Webpage<br /><h3>React Hooks</h3></h2></a>
                </div>
            </div>
            <div className="card">
              {/* <img src="img_avatar.png" alt="Avatar" style="width:100%"> */}
              <div className='design'>
                <div className='card-footer'>
                  <a href=''>
                    <h2>Library Management<br /><h3>C#, ADO.net</h3></h2></a>
                </div>
              </div>
            </div>
            <div className="card">
              {/* <img src="img_avatar.png" alt="Avatar" style="width:100%"> */}
              <div className='design'>
                <div className='card-footer'>
                  <a href='https://github.com/SubhamSam18/Blog-Application'>
                    <h2>Blog Webpage<br /><h3>Springboot, MySql</h3></h2></a>
                </div>
              </div>
            </div>
            <div className="card">
              {/* <img src="img_avatar.png" alt="Avatar" style="width:100%"> */}
              <div className='design'>
                <div className='card-footer'>
                  <a href='https://github.com/SubhamSam18/Portfolio'>
                    <h2>Portfolio<br /><h3>ReactJS, Scss</h3></h2></a>
                </div>
              </div>
            </div>
            <div className="card">
              {/* <img src="img_avatar.png" alt="Avatar" style="width:100%"> */}
              <div className='design'>
                <div className='card-footer'>
                  <a href='https://github.com/SubhamSam18/TODO-list'>
                    <h2>To-Do List<br /><h3>ReactJS</h3></h2></a>
                </div>
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
