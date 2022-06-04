
import './App.css';
import { Contact } from './components/contact/Contact';
import Intro from './components/Intro/Intro';
import Nav from './components/Navbar/Nav';
import Experience from './experience/Experience';
import Footer from './components/Footer/Footer';
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
