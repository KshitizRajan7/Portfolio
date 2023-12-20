import React, { useState } from 'react'
import './navBar.css'
import {Link} from 'react-scroll';
import logo from '../../assets/logo.png'
// import download from '../../assets/download.png'
const NavBar = () => {

  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className='navbar'>
    <img src={logo} alt='logo' className='logo'/>
    <div className='menu'>
    <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='menuListItem'>Home</Link>
    <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-80} duration={500} className='menuListItem'>About</Link>
    <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-80} duration={500} className='menuListItem'>Contact Me</Link>
    </div>
      <img src='' alt='Menu' className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
    <div className='navMenu' style={{display: showMenu? 'flex' : 'none'}}>
    <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='ListItem' onClick={()=>setShowMenu(false)}>Home</Link>
    <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-80} duration={500} className='ListItem' onClick={()=>setShowMenu(false)}>About</Link>
    <Link activeClass='active' to='works' spy={true} smooth={true} offset={-80} duration={500} className='ListItem' onClick={()=>setShowMenu(false)}>Portfolio</Link>
    <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-80} duration={500} className='ListItem' onClick={()=>setShowMenu(false)}>Contact Me</Link>
    </div>
    </nav>
  )
}
// NAVBAR KO LEFT PATI KO BUTTON 
// <button className='menubtn' offset={-90} duration={500} onClick={()=>{
    //   document.getElementById('contact').scrollIntoView({behavior:'smooth'});
    // }}>     
    //   <img src={download} alt='' className='menuimg'/> Download my CV </button> 


export default NavBar
