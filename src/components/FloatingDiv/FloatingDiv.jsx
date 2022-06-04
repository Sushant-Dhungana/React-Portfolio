import React from 'react'
import './FloatingDiv.css'
import {themeContext} from '../../Context';
import { useContext } from 'react';

const FloatingDiv = (item,image, txt1, txt2) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
   <div className="floatingdiv" key={item} style={{
     color: darkMode? 'black' : '',
   }}>
       <img src={item.image} alt=""/>
       <span>
           {item.txt1}
           <br/>
           {item.txt2}
           </span>
   </div>
  )
}

export default FloatingDiv