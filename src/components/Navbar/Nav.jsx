import React from 'react';
import './nav.css';
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUserDelete} from 'react-icons/ai';
import {AiOutlineContacts} from 'react-icons/ai';
import {useState} from 'react';

function Nav() {
  const [activeNav, setActiveNav] = useState('#home');
  return (
    <nav>
      <a href="#" onClick={()=> setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUserDelete/></a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiOutlineContacts/></a>
    </nav>
  )
}

export default Nav;