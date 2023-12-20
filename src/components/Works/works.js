import React from 'react'
import './works.css'
import bg from "../../assets/pp.jpg"
const Works = () => {
  return (
    <section id='works'>
        <h2 className='worksTitle'>My portfolio</h2>
        <span className='worksDesc'> Here are some of my works in which I can help you in.</span>
        <div className='worksImgs'>
            <img src={bg} alt='' className='worksImg'/>
            <img src={bg} alt='' className='worksImg'/>
            <img src={bg} alt='' className='worksImg'/>
            <img src={bg} alt='' className='worksImg'/>
            <img src={bg} alt='' className='worksImg'/>
            <img src={bg} alt='' className='worksImg'/>
        </div>
        <button className='worksBtn'>See More</button>
    </section>
  )
}

export default Works
