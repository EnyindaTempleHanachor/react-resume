import { faSquareFull } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Projects = () => {
    return ( 
        <div className="projects">
            <div className="first-word">
                <FontAwesomeIcon icon={faSquareFull} className ="square" size="2x"/>
                <h2>Projects</h2>
            </div>
            <p>What drives my work ethic is building products that are user centered. I always hope to see real impact from the works that i take on. Below are the decriptions and samples of some of the projects executed by me...!</p>
            <div className="projects-box">
                <div className="projects-box-description">
                    <div className="the-project">
                        <h2>A Blogging Site Project</h2>
                        <p>A Full Stack Project</p>
                    </div>
                    <p>This is a full stack project that I executed to boost my full stack skill. This is a blogging site where authors can write their blogs and post for everyone to see. The site can also update and deletes blogs that are posted too</p>
                </div>
                <div className="projects-box-image1"></div>
            </div>
            <div className="projects-box">
                <div className="projects-box-description">
                    <div className="the-project">
                        <h2>A Social Media Site</h2>
                        <p>Project Built With HTML and CSS</p>
                    </div>
                    <p>This is a social media web page built with just HTML and CSS. There was an extra addition of JavaScript to handle clicking</p>
                </div>
                <div className="projects-box-image2"></div>
            </div>
            <div className="projects-box">
                <div className="projects-box-description">
                    <div className="the-project">
                        <h2>An iPhone Calculator Clone Project</h2>
                        <p>A HTML, CSS and JavaScript Project</p>
                    </div>
                    <p>The execution of a clone iPhone calculator that works perfectly like the real calculator. A project that was used to boost my ability of DOM manipulations in JavaScript.</p>
                </div>
                <div className="projects-box-image3"></div>
            </div>
            <div className="last-projects-box">
                <div className="last-projects-box-description">
                    <div className="the-project">
                        <h2>Backend Projects Executed</h2>
                        <p>List of some Backend projects</p>
                    </div>
                    <div className="resume-box-skills">
                        <div>
                            <p><FontAwesomeIcon icon={faSquareFull} className="square" size="1x"/>  Hospital Management System</p>
                            <p><FontAwesomeIcon icon={faSquareFull} className="square" size="1x"/>  School Management System</p>
                        </div>
                        <div>
                            <p><FontAwesomeIcon icon={faSquareFull} className="square" size="1x"/>  LogIn and Authentication</p>
                            <p><FontAwesomeIcon icon={faSquareFull} className="square" size="1x"/>  A Tourist Booking Site Management System</p>
                        </div>
                    </div>
                </div>
                <div className="projects-box-image4"></div>
            </div>
        </div>
     );
}
 
export default Projects;