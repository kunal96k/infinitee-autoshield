import "./styles.css";
import { FaUsers, FaMedal, FaChartLine, FaGlobe } from "react-icons/fa";

function AboutHero() {
  return (
    <div className="hero-container">
      {/* TOP HERO */}
      <div className="hero">
        <button className="about-btn">♡ About Infinitee AutoShield</button>

        <h1>
          Redefining <span>Service Experiences Across India</span> <br />
        </h1>

        <p>
          A modern platform designed to connect you with reliable services —
          fast bookings, verified professionals, and seamless service
          management, all under one roof.
        </p>
      </div>

      {/* STATS */}
      <div className="stats">
        <div className="card">
          <FaUsers className="icon" />
          <h2>3000+</h2>
          <p>Customer Interactions</p>
        </div>

        <div className="card">
          <FaMedal className="icon" />
          <h2>2</h2>
          <p>Cities</p>
        </div>

        <div className="card">
          <FaChartLine className="icon" />
          <h2>95%</h2>
          <p>Satisfaction Rate</p>
        </div>

        <div className="card">
          <FaGlobe className="icon" />
          <h2>2</h2>
          <p>Years Journey</p>
        </div>
      </div>
    </div>
  );
}

export default AboutHero;
