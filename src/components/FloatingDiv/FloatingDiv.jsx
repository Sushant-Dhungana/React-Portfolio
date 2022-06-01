import React from 'react'
import './FloatingDiv.css'

const FloatingDiv = (item,image, txt1, txt2) => {
  return (
   <div className="floatingdiv" key={item}>
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