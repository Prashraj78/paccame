
import './App.css';
import About from './components/About';
import Home from './components/Home';
import NavBar from './components/NavBar';
// import Portfolio from './components/Portfolio';
import SocialLinks from './components/SocialLinks';
import Experience from './components/Experience';
import Contact from './components/Contact';
// import Work from './components/Work';

function App() { 
  return ( 
    <>
    {/* <Work/> */}
      <NavBar/>
      <Home/>
      <SocialLinks/>
      <About/>
      {/* <Portfolio/> */}
      
      <Experience/>
      <Contact/>
    </>
  );
}

export default App;
