import React from 'react'
import ReactPlayer from 'react-player'
import './latestVideo.css'

const LatestVideo = () => {
  return (
    <section className='latestVideo'>
        <h2 className='latestTitle'>Latest Video</h2>

            <ReactPlayer controls={true} url='https://www.youtube.com/watch?v=CsJlrfy-21o&t=21s' />
    </section>
  )
}

export default LatestVideo
