import React from 'react';
import VerifiedIcon from '@mui/icons-material/Verified';
import './Experience.css';
function Experience() {
  return (
    <section id='experience'>
        <h5 style={{color:"orange", fontWeight:"bold",fontSize:"40px"}}>My Skills..</h5>
        <div className="container experience__container">
            <div className="experience__webdesign">
                <h3>Web Design</h3>
                <div className="experience__content">
                    <article className='experience__details'>
                        <VerifiedIcon/>
                        <h4>HTML</h4>
                        <small className='text-light'>Experienced</small>
                    </article>
                    <article className='experience__details'>
                        <VerifiedIcon/>
                        <h4>CSS</h4>
                        <small className='text-light'>Experienced</small>
                    </article>
                    <article className='experience__details'>
                        <VerifiedIcon/>
                        <h4>Bootstrap</h4>
                        <small className='text-light'>Experienced</small>
                    </article>
                </div>
            </div>
            <div className="experience__webdevelopment">
           
                <h3>Web Development</h3>
                <div className="experience__content">
                    <article className='experience__details'>
                        <VerifiedIcon/>
                        <h4>ReactJs</h4>
                        <small className='text-light'>Experienced</small>
                    </article>
                    <article className='experience__details'>
                        <VerifiedIcon/>
                        <h4>MongoDB</h4>
                        <small className='text-light'>Experienced</small>
                    </article>
                    <article className='experience__details'>
                        <VerifiedIcon/>
                        <h4>JavaScript</h4>
                        <small className='text-light'>Experienced</small>
                    </article>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Experience