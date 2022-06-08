// all components are rendered here for home page display
import React from "react";
import './App.css';
import  Contact  from './components/contact/Contact.jsx';
import Intro from './components/Intro/Intro.jsx';
import Nav from './components/Navbar/Nav.jsx';
import Experience from './components/experience/Experience.jsx';
import Footer from './components/Footer/Footer.jsx';
import {themeContext} from "./Context";
import {useContext} from 'react';


function App() {
  const theme = useContext (themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App"
    style={{
      background: darkMode? 'black': '',
      color: darkMode? 'white': ''
    }}>
    <Nav/>
    <Intro/>
    <Experience/>
    <Contact/>
    <Footer/>
 

    
   </div>
  );
}

export default App;
