import { faSquareFull } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Resume = () => {
    return ( 
        <div className="resume">
            <div className="first-word">
                <FontAwesomeIcon icon={faSquareFull} className ="square" size="2x"/>
                <h2>Resume</h2>
            </div>
            <div className="resume-experience">
                <h3>Experience</h3>
                <button>Download CV</button>
            </div>
            <div className="resume-box">
                <div className="resume-box-name">
                    <h2>2021 - 2023</h2>
                    <h3>Internship</h3>
                    <p className="smart">@ SmartTech Global</p>
                    <p>University Of Port Harcourt <br /> Abuja Campus, Opp. Abuja Park</p>
                </div>
                <div className="resume-box-description">
                    <p>Started my internship from 2021 to January 2023. During my stay at SmartTech Global, on the frontend, I was able to master the implementation of <span>HTML</span> and <span>CSS</span> from design mockups. I was also able to troubleshoot and improve existing client designs and accessibility issues. Also, I was able to perform HTML rendering using <span>JavaScript</span></p>

                    <p>In terms of communication, with my effective communication skill, I was able to communicate effectively, respomding to customer emails, attending consultation meetings and regular interactions to solve work related problems and concerns</p>

                    <p>On the backend, I worked with experts in building secure API's using <span>Node.js</span> and <span>Express.js</span>. I was able to perform <span>CRUD</span>  (Creating of API's, Rendering of API's, Updating of API's and Deletion of API's)</p>
                </div>
            </div>
            <div className="resume-experiences">
                <h3>Education</h3>
            </div>
            <div className="resume-box">
                <div className="resume-box-name">
                    <h2>2019 - Present</h2>
                    <h3>Student</h3>
                    <p className="smart">Rivers State University</p>
                    <p>Oroworokwo, Nkpolu <br /> Port Harcourt Campus, Rivers State</p>
                </div>
                <div className="resume-box-description">
                    <p>I'm currently a final year student at Rivers State University studying computer science</p>
                    <p>As a student, I'm committed to my studies while combining it with web development which shows my level of multi task commitment</p>
                </div>
            </div>
            <div className="last-resume-box">
                <h2>Additional Skills</h2>
                <div className="resume-box-skills">
                    <div>
                        <p><FontAwesomeIcon icon={faSquareFull} className="square" size="1x"/>  Enterpreneurial Mindset</p>
                        <p><FontAwesomeIcon icon={faSquareFull} className="square" size="1x"/>  Teamwork && Collaboration</p>
                    </div>
                    <div>
                        <p><FontAwesomeIcon icon={faSquareFull} className="square" size="1x"/>  Digital Analyst</p>
                        <p><FontAwesomeIcon icon={faSquareFull} className="square" size="1x"/>  Efficient Communication</p>
                    </div>
                </div>
                <h2>Language</h2>
                <div className="resume-box-skills">
                    <p><FontAwesomeIcon icon={faSquareFull} className="square" size="1x"/>  English(Native)</p>
                </div>
            </div>
        </div>
     );
}
 
export default Resume;