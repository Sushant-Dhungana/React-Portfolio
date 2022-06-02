import React from 'react';
import DoneIcon from '@mui/icons-material/Done';

export default function Services() {
  return (
   <section id='services'>
       <h5>My Skills</h5>
       <div className="container services__container">
           <article className='service'>
               <div className="service__head">
                   <h3>Web Design</h3>
               </div>
               <ul className='service__list'>
                   <li>
                       <DoneIcon className='service__list-icon'/>
                       <p>HTML</p>
                   </li>
                   </ul>
           </article>
       </div>
   </section>
  )
}
