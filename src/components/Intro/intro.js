import React from 'react'
import './intro.css';
// import { Link } from 'react-scroll';
import profile from '../../assets/profile.png'
// import hire from '../../assets/hire.png'
const Intro = () => {
  return (
    <section id="intro">
      <div className='introContent'>
      <span className='hello'> Hello, </span>
      <span className="introText">I'm<span className="introName"> Kshitiz Rajan</span><br/> MERN Stack Developer</span>
      <p className='introPara'>I'm a motovlogger and trader as well. <br/>I'm here to help you.</p>
      </div>
      
      <img src={profile}alt="profile" className='pp'/>
    </section>
  )
}

export default Intro;
// <Link><button className='btn'><img src={hire} alt='' className='btnImg'/> Hire Me</button></Link>