import {Link} from "react-router-dom"

export default function NavBar()
{
    return(
        <nav id="navbar">
        <a href="#" className="dropdown-exit fa-solid fa-x"></a>
        <Link to="/" href="#">Hem</Link>
        <Link to="About">Om_mig</Link>
        <Link to="Cv">CV</Link>
        <Link to="Portfolio">Portfolio</Link>
        </nav>
    )
}