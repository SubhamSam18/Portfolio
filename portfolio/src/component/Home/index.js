import React from 'react'
import LogoTitle from '../../assets/images/logo-s.png'
// import LogoTitle from '../../assets/images/Slogo.png'
import { Link } from 'react-router-dom'
import './index.scss'
import Typical from 'react-typical'

const Home = () => {
  return (
    <div className='container home-page'>
      <div className='text-zone'>
        <h1>
          Hi,<br />I'm
          <img src={LogoTitle} alt="developer" />
          ubham
          <br />
          Web Developer
        </h1>
        {/* <h2>Frontend Developer / Backend Developer</h2> */}
        <h2>
          <Typical
            loop={Infinity}
            steps={[
              "F R O N T E N D  D E V E L O P E R",
              1000,
              "B A C K E N D  D E V E L O P E R",
              1000,
              "C O D E R",
              1000,
            ]} />
        </h2>
        <Link to='/contact' className='flat-button'>CONTACT ME</Link>
      </div>
    </div>
  )
}

export default Home
