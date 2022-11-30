import React from 'react'
import './index.scss'
import LogoS from '../../assets/images/portfolio-removebg-preview.png'
import { Link, NavLink } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope , faHome , faUser} from '@fortawesome/free-solid-svg-icons'
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
const Sidebar = () => {
  return (
    <div className='nav-bar'>
      <Link className='logo' to='/'>
        <img src={LogoS} alt="logo"></img>
        {/* <img className='sub-logo' src={LogoSubtitle} alt="HI"></img> */}
      </Link>
      <nav>
        <NavLink exact = "true" activeClassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
        </NavLink>
        <NavLink exact = "true" activeClassname="active" className="about-link" to="/about">
            <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
        </NavLink>
        <NavLink exact = "true" activeClassname="active" className="contact-link" to="/contact">
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
        </NavLink>
      </nav>

      <ul>
        <li>
            <a href='https://www.linkedin.com/in/subhamsamanta'>
                <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
            </a>
        </li>
        <li>
            <a href='https://github.com/SubhamSam18'>
                <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
            </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar;
