import React from 'react'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBootstrap,faCss3, faHackerrank, faHtml5, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';

const About = () => {
  console.log("Hello About!");
  return (
    <div className='container-about-section'>
      <div className='about-heading'>
        <h1><br />About</h1>
      </div>
        <div className='about-body'>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        
        <div className='stage-cube'>
          <div className='cube-spinner'>
            <div className='face1'>
              <FontAwesomeIcon icon={faReact} color="red" />
            </div>
            <div className='face2'>
              <FontAwesomeIcon icon={faHtml5} color="red" />
            </div>
            <div className='face3'>
              <FontAwesomeIcon icon={faCss3} color="red" />
            </div>
            <div className='face4'>
              <FontAwesomeIcon icon={faNodeJs} color="red" />
            </div>
            <div className='face5'>
              <FontAwesomeIcon icon={faBootstrap} color="red" />
            </div>
            <div className='face6'>
              <FontAwesomeIcon icon={faHackerrank} color="red" />
            </div>
          </div>
        </div>
    </div>
  ) ;
}

export default About;


