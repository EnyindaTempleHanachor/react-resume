import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faFacebook, faTelegram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const AboutMe = () => {
    return ( 
        <div className="landing-home">
            <div className="home-grid">
                <div className="first-grid"></div>
                <div className="second-grid"></div>
            </div>
            <div className="floating">
                <div className="personal">
                    <div className="personal-name">
                        <div className="image"></div>
                        <div className="personal-info">
                            <p>Enyinda Temple<br/> Hanachor</p>
                            <hr />
                            <p>Web Developer</p>
                        </div>
                    </div>
                    <div className="floating-footer">
                        <Link to="htpps://wa.me/2348119607486" className="socials"><FontAwesomeIcon icon={faWhatsapp} size="3x"/></Link>
                        <Link to="htpps://www.linkedin.com/in/enyinda-temple-hanachor" className="socials"><FontAwesomeIcon icon={faLinkedin} size="3x"/></Link>
                        <Link to="htpps://facebook.com/temple.enyinda/" className="socials"><FontAwesomeIcon icon={faFacebook} size="3x"/></Link>
                        <Link to="htpps://t.me/hanachorenyindatemple" className="socials"><FontAwesomeIcon icon={faTelegram} size="3x"/></Link>
                    </div>
                </div>
                <div className="me">
                    <div className="second-grid1">
                        <h2>Hello</h2>
                        <div className="hi">
                            <h4>My name is</h4>
                            <h3>Enyinda<br/><span>Temple Hanachor</span></h3>
                            <p>I'm a newbie full stack developer who possesses knowledge and skils in both frontend and backend web development.</p>
                        </div>
                        <div className="button">
                            <Link to="/Resume"><button>RESUME</button></Link>
                            <Link to="/Projects"><button>PROJECTS</button></Link>
                        </div>
                    </div>
                    <div className="second-grid2">
                        <p>On the frontend side, I'm familiar with <span>HTML, CSS and JavaScript</span> which allows me to structure web pages, style them and add interactivity using <span>React.js</span> library.</p>

                        <p>On the backend side, I have knowledge of server-side programming language such as <span>Node.js</span> and framework such as <span>Express.js</span>. I can handle server-side logic, interact with databases and build API's that enable communication between frontend and backend of my applications.</p>

                        <p>As a newbie full stack developer, I'm eager to tackle new challenges, collaborate with team members and contribute to the development of robust and efficient web applications.</p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default AboutMe;