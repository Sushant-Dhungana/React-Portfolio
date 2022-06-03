
import './App.css';
import { Contact } from './components/contact/Contact';
import Intro from './components/Intro/Intro';
import Nav from './components/Navbar/Nav';
import Experience from './experience/Experience';


function App() {
  return (
    <div className="App">
    <Nav/>
    <Intro/>
    <Experience/>
    <Contact/>
 

    
   </div>
  );
}

export default App;
