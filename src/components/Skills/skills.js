import React from 'react'
import './skills.css'   
import youtuber from '../../assets/kshitizrajanrides.jpg'
import react from '../../assets/react.png'
import trader from '../../assets/trader.png'
import yt from '../../assets/youtube.png'
import insta from '../../assets/instagram.png'
const Skills = () => {
  return (
        <section id='skills'>
        <span className='skillTitle'>What I Do</span>
        <span className='skillDesc'>I am a MotoVlogger, MERN Stack Developer, Trader. I'm here to help you.</span>
        <div className='skillBars'>
            <div className='skillBarm'>
                <img src={youtuber} alt='' className='motovlogger'/>
                <div className='skillBarText'>
                    <h2>MotoVlogger</h2>
                    <p>You can visit my Youtube channel and Instagram as well.
                    <br/> <i className='channelnames'>Kshitiz Rajan Rides</i></p>
                    <a href='https://www.youtube.com/channel/UCi42rXzU7zNWJxzmlKsPeng' target='_blank' rel='noreferrer'><img src={yt} alt='youtube' className='rides'/></a>
                    <a href='https://www.instagram.com/kshitizrajanrides/?next=%2F' target='_blank' rel='noreferrer'><img src={insta} alt='instagram' className='rides'/></a>
                </div>
            </div>
            <div className='skillBar'>
                <img src={react} alt='' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>MERN Stack developer</h2>
                    <p>I'm a professional web developer. I make informative videos on this topic as well.
                    <br/><i className='channelnames'>Kshitiz Rajan Dev</i></p>
                    <a href='https://www.youtube.com/channel/UCzS4OPW_dNB6TOYhr3aIU6Q' target='_blank' rel='noreferrer'><img src={yt} alt='youtube' className='rides'/></a>
                    <a href='https://www.instagram.com/kshitizrajandev/' target='_blank' rel='noreferrer'><img src={insta} alt='instagram' className='rides'/></a>
                </div>
            </div>
            <div className='skillBar'>
                <img src={trader} alt='' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Trader</h2>
                    <p>I'm doing stock trading. I make informative videos on this topic as well.
                    <br/><i className='channelnames'>Kshitiz Rajan Trade</i></p>
                    <a href='https://www.youtube.com/@KshitizRajanTrade' target='_blank' rel='noreferrer'><img src={yt} alt='youtube' className='rides'/></a>
                    <a href='https://www.instagram.com/kshitizrajantrade/' target='_blank' rel='noreferrer'><img src={insta} alt='instagram' className='rides'/></a>
                </div>
            </div>
        </div>
        </section>
  )
}

export default Skills
