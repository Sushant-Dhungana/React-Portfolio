import React from 'react'
import "./Contact.css";

export const Contact = () => {
  return (
    <section id="contact">
    <div className="contact-form">
        <div className="w-left">
            <div className="awesome">
                <span>Contact Me</span>
                <span>Send me an Email</span>
                <div className="blur s-blur1" style={{background:"#ABF1FF94"}}></div>
            </div>
        </div>
        <div className="c-right">
            <form>
                <input type="text" name="Full_name" className='user' placeholder="Name"/>
                <input type="email" name="User_email" className='user' placeholder="Email"/>
                <textarea name="message" className="user" placeholder="Message"/>
                <input type="submit" name="Send" className='buttonn'/>
                <div className='blur c-blur1' style={{background:"skyblue"}}></div>
            </form>
        </div>
    </div>
    </section>
  )
}
