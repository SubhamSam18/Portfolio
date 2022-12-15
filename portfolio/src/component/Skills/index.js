import React from 'react'
import './index.scss'
import { SiCodechef, SiLeetcode, SiCodeforces, SiCplusplus ,SiVisualstudiocode} from 'react-icons/si';
import { FaHackerrank } from 'react-icons/fa';
import project from '../../assets/images/project.jpg';
import Carousel from 'react-elastic-carousel';
// import Slider from 'react-slick';

//carousal
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
            <Carousel>
              <div className="card">
                  <img src={project} alt="Avatar" />

                  <div className='card-footer'>
                    <a href='https://github.com/SubhamSam18/MERN'>
                      <h2>Exercise Tracker<br /><h3>ReactJs, Nodejs, Express, MongoDB</h3></h2>
                    </a>
                  </div>
              </div>

              <div className="card">
                <img src={project} alt="Avatar" />
                <div className='design'>
                  <div className='card-footer'>
                    <a href='https://github.com/SubhamSam18/Blog-App-using-ReactJs'>
                      <h2>Blog Webpage<br /><h3>React Hooks</h3></h2></a>
                  </div>
                </div>

              </div>
              <div className="card">
                <img src={project} alt="Avatar" />
                <div className='design'>
                  <div className='card-footer'>
                   {/* eslint-disable-next-line */}
                    <a href=''>
                      <h2>Library Management<br /><h3>C#, ADO.net</h3></h2></a>
                  </div>
                </div>
              </div>
              <div className="card">
                <img src={project} alt="Avatar" />
                <div className='design'>
                  <div className='card-footer'>
                    <a href='https://github.com/SubhamSam18/Blog-Application'>
                      <h2>Blog Webpage<br /><h3>Springboot, MySql</h3></h2></a>
                  </div>
                </div>
              </div>
              <div className="card">
                <img src={project} alt="Avatar" />
                <div className='design'>
                  <div className='card-footer'>
                    <a href='https://github.com/SubhamSam18/Portfolio'>
                      <h2>Portfolio<br /><h3>ReactJS, Scss</h3></h2></a>
                  </div>
                </div>
              </div>
              <div className="card">
                <img src={project} alt="Avatar" />
                <div className='design'>
                  <div className='card-footer'>
                    <a href='https://github.com/SubhamSam18/TODO-list'>
                      <h2>To-Do List<br /><h3>ReactJS</h3></h2></a>
                  </div>
                </div>
              </div>
            </Carousel>

          </div>
        </div>
        <div className='stage-cube'>
          <div className='cube-spinner'>
            <div className='face1'>
              <SiCodechef />
            </div>
            <div className='face2'>
              <SiVisualstudiocode/>
            </div>
            <div className='face3'>
              <SiLeetcode />
            </div>
            <div className='face4'>
              <SiCodeforces />
            </div>
            <div className='face5'>
              <SiCplusplus />
            </div>
            <div className='face6'>
              <FaHackerrank />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills;
