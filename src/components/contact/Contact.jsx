import React,{useState} from 'react'
import "./Contact.css";
import emailjs from '@emailjs/browser';
import {useRef} from 'react';

export const Contact = () => {

    const form = useRef();
    const [done, setDone] = useState(false);

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_xhnqr2w', 'template_1rx274q', form.current, 'ruxkwPmCSCd0vfHQy')
        .then(result => {
            console.log(result.text);
            setDone(true);
        }).catch(error => {
            console.log(error.text);
        });
        e.target.reset(); //for clearing form after submission
    }
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
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="user_name" className='user' placeholder="Name" required/>
                <input type="email" name="user_email" className='user' placeholder="Email" required/>
                <textarea name="message" className="user" placeholder="Message" required/>
                <input type="submit" value="Send" className='buttonn' />
                <span>{done && "Thanks for contacting me!!"}</span>
              
                <div className='blur c-blur1' style={{background:"skyblue"}}></div>
            </form>
        </div>
    </div>
    </section>
  )
    }
