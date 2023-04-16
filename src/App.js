
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import NavBar from './NavBar';
import SideNav from './SideNav'
import Home from './Home'
import About from "./About";
import Cv from "./Cv";
import './style.css'
import Portfolio from "./Portfolio";


function App() {  
  return (
 
    <div className='App'>
           
      <Router>
        <header>
          <p>SimonFrändén</p>
          <a href="#navbar" className="burger fa-solid fa-bars"></a>
          <NavBar/>  
        </header>
        <SideNav/>
        
        <div class="content-ctn" >
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Portfoliosite" element={<Home/>} />
            <Route path="/About" element={<About/>} />
            <Route path="/Cv" element={<Cv/>} />
            <Route path="Portfolio" element={<Portfolio/>} />
          </Routes>
        </div>
        </Router>      
    </div>
    
  );
}

export default App;

