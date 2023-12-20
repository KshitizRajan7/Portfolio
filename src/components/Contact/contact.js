import React, { useRef } from 'react'
import './contact.css'
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'
// import tiktok from '../../assets/tiktok.png'
import youtube from '../../assets/youtube.png'
import emailjs from '@emailjs/browser'
const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_gn2xsbl', 'template_zz0bmyn', form.current, '4JHG2okNFWM0XsbJq')
          .then((result) => {
              console.log(result.text);
              alert('Email Sent.')
              e.target.reset();
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <section id='contactPage'>
        <div id='contact'>
           <h2 className='contactPageTitle'>Contact Me</h2>
           <span className='contactDesc'>Please fill out the form to discuss any work opportunities.</span> 
           <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input className='name' type='text' placeholder='Your Name' name='from_name'/>
                <input className='email' type='text' placeholder='Your Email' name='from_email'/>
                <textarea className='msg' name='message' rows='5' placeholder='Your Message' />
                <button type='submit' value='send' className='submitBtn'>Submit</button>
                <div className='links'>
                    <a href='https://www.facebook.com/profile.php?id=61550560747070' target='_blank' rel="noreferrer"> <img src={facebook} alt='Facebook' className='link'/></a>
                    <a href='https://www.instagram.com/kshitizrajanrides/?next=%2F' target='_blank' rel='noreferrer'> <img src={instagram} alt='Youtube' className='link'/></a>
                    <a href='https://www.youtube.com/channel/UCi42rXzU7zNWJxzmlKsPeng' target='_blank' rel="noreferrer"><img src={youtube} alt='Tiktok' className='link'/></a>
                </div>
           </form>
        </div>
    </section>
  )
}

export default Contact
