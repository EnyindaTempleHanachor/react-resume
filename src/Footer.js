import { faWhatsapp, faFacebook, faTelegram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link } from "react-router-dom";
// import { BrowserifyObject } from "browserify";

// const WhatsApp = `${process.env.WHATSAPP_ME}`;
// const mail = `${process.env.EMAIL}`;

const Footer = () => {
    return ( 
        <div className="footer">
            <p>@Enyinda Temple Hanachor 2023</p>
            <p><span>Call</span><br/>+2348119607486</p>
            <p><span>Write</span><br/><Link to="temiblinks714@gmail.com">@enyindatemple.com</Link></p>
            <p><span>Contact</span><br/>
                <Link to="htpps://wa.me/2348119607486" className="footer-socials"><FontAwesomeIcon icon={faWhatsapp} size="1.7x"/></Link>
                <Link to="htpps://www.linkedin.com/in/enyinda-temple-hanachor" className="socials"><FontAwesomeIcon icon={faLinkedin} size="1.7x"/></Link>
                <Link to="htpps://facebook.com/temple.enyinda/" className="footer-socials"><FontAwesomeIcon icon={faFacebook} size="1.7x"/></Link>
                <Link to="htpps://t.me/hanachorenyindatemple" className="footer-socials"><FontAwesomeIcon icon={faTelegram} size="1.7x"/></Link></p>
        </div>
     );
}
 
export default Footer;