import React from 'react';
import "./Footer.css";
import Insta from '@iconscout/react-unicons/icons/uil-instagram';
import Facebook from '@iconscout/react-unicons/icons/uil-facebook';
import Github from '@iconscout/react-unicons/icons/uil-github';
import Wave from '../../img/wave.png';


export default function Footer() {
  return (
    <div className="footer">
        <img  src={Wave}alt ="" style={{width:"100%"}}/>
        <div className="f-content">
            <span>sushantdhungana29@gmail.com</span>
            <div className='f-icons'>
              <a href="https://instagram.com/sushant_dhungana29?igshid=YmMyMTA2M2Y=" target="_blank" rel="noreferrer" >
                <Insta color='black' size='3rem'/>
                </a>
                <a href="https://www.facebook.com/Dhunganasushant1029" target="_blank" rel="noreferrer">
                <Facebook color='black' size='3rem'/>
                </a>
                <a href="https://github.com/Sushant-Dhungana" target="_blank" rel="noreferrer">
                <Github color='black' size='3rem'/>
                </a>
            </div>

        </div>
    </div>
  )
}
