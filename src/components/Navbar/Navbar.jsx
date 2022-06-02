import React from 'react'
import './Navbar.css';

export default function Navbar() {
  return (
    <div className="n-wrapper">
        <div className="n-left">
            <div className="n-name">
                <span>toggle</span>
            </div>
        </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style={{listStyleType:"none"}}>
                        <li >Home</li>
                        <li>About</li>
                        <li>Skills</li>
                    </ul>
                </div>
                <button className='button n-button'>Lets Talk</button>
            </div>
        
    </div>
  )
}
