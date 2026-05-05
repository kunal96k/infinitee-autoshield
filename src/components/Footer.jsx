import "./Home.css";
import {
  FaPhone, FaEnvelope, FaMapMarkerAlt,
  FaTwitter, FaLinkedin, FaInstagram, FaFacebook,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer" aria-label="Site footer">
      <div className="footer-top">
        {/* Brand */}
        <div className="footer-col">
          <h2 className="logo">Infinitee AutoShield</h2>
          <p>
            Discover and manage trusted car services in Nashik effortlessly —
            all in one convenient platform.
          </p>
          <address className="contact" style={{ fontStyle: "normal" }}>
            <p><FaPhone aria-hidden="true" /> <a href="tel:+917020489435" style={{ color: "inherit", textDecoration: "none" }}>+91 7020489435</a></p>
            <p><FaEnvelope aria-hidden="true" /> <a href="mailto:contact@infiniteeservices.com" style={{ color: "inherit", textDecoration: "none" }}>contact@infiniteeservices.com</a></p>
            <p><FaMapMarkerAlt aria-hidden="true" /> MIDC Ambad, Nashik, Maharashtra 422010</p>
          </address>
        </div>

        {/* Company */}
        <div className="footer-col">
          <h3>Company</h3>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contacts">Contact</Link>
        </div>

        {/* Services */}
        <div className="footer-col">
          <h3>Services</h3>
          <Link to="/services">Car Service</Link>
          <Link to="/services/car-repair">Car Repair</Link>
          <Link to="/services/car-detailing">Car Detailing</Link>
          <Link to="/services/spare-parts">Spare Parts</Link>
          <Link to="/services/inspection">Inspection</Link>
          <Link to="/services/roadside-help">Roadside Help</Link>
        </div>

        {/* Legal */}
        <div className="footer-col">
          <h3>Legal</h3>
          <a href="#privacy-policy">Privacy Policy</a>
          <a href="#terms-service">Terms of Service</a>
        </div>

        {/* Service Network */}
        <div className="footer-col">
          <h3>Service Network</h3>
          <a href="#autocare-hub">AutoCare Hub</a>
          <a href="#partner-network">Partner Network</a>
          <a href="#drivemarket">DriveMarket</a>
          <a href="#partspoint">PartsPoint</a>
          <a href="#assurecare">AssureCare</a>
          <a href="#styleworks">StyleWorks</a>
          <a href="#prime-circle">Prime Circle</a>
          <a href="#roadready-help">RoadReady Help</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Infinitee AutoShield, Nashik. All rights reserved.</p>
        <div className="socials" aria-label="Social media links">
          <a href="#twitter" target="_blank" rel="noreferrer" aria-label="Twitter"><FaTwitter /></a>
          <a href="#linkedin" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href="#instagram" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a>
          <a href="#facebook" target="_blank" rel="noreferrer" aria-label="Facebook"><FaFacebook /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
