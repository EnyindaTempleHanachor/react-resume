import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFull } from '@fortawesome/free-regular-svg-icons';
import { Link, NavLink } from 'react-router-dom';


const Navbar = () => {
    return ( 
        <div className="navbar">
            <div className="name">
                <FontAwesomeIcon icon={faSquareFull} className ="square" size='2x'/>
                <Link to= "/"><h1>ENYINDA Temple</h1></Link>
                <p>/</p>
                <Link to= "/"><h2>Web Developer</h2></Link>
            </div>
            <div className="links">
                <NavLink to="/" activeClassName = "active">ABOUT ME</NavLink>
                <NavLink to="/Resume" activeClassName = "active">RESUME</NavLink>
                <NavLink to="/Projects" activeClassName = "active">PROJECTS</NavLink>
                <NavLink to="/Contact" activeClassName = "active">CONTACT</NavLink>
            </div>
        </div>
     );
}
 
export default Navbar;