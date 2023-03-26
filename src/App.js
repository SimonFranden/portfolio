
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import NavBar from './NavBar';
import SideNav from './SideNav'
import Home from './Home'
import About from "./About";
import Cv from "./Cv";
import './style.css'
import Portfolio from "./Portfolio";
import GithubFeed from "./GithubFeed";
import PopupEasteregg from "./PopupEasteregg";

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
            <Route path="/About" element={<About/>} />
            <Route path="/Cv" element={<Cv/>} />
            <Route path="Portfolio" element={<GithubFeed/>} />
          </Routes>
        </div>
        </Router>      
        <PopupEasteregg></PopupEasteregg>
    </div>
    
  );
}

export default App;

