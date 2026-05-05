import "./styles.css";
import { FaBullseye, FaHeart, FaMedal } from "react-icons/fa";

function Drives() {
  return (
    <section className="drives">
      <h2>
        What <span>Drives Us</span>
      </h2>

      <p className="subtitle">
        Our guiding principles that shape every service we deliver
      </p>

      <div className="drives-grid">
        <div className="drive-card">
          <div className="icon-box">
            <FaBullseye />
          </div>
          <h3>Our Mission</h3>
          <p>
            To create a seamless platform where users can discover, book, and
            manage a wide range of everyday services — quickly, reliably, and
            without hassle.
          </p>
        </div>

        <div className="drive-card">
          <div className="icon-box">
            <FaHeart />
          </div>
          <h3>Our Values</h3>
          <p>
            We believe in trust, transparency, customer-first thinking, and
            continuous improvement to deliver meaningful and dependable service
            experiences.
          </p>
        </div>

        <div className="drive-card">
          <div className="icon-box">
            <FaMedal />
          </div>
          <h3>Our Commitment to Excellence</h3>
          <p>
            We focus on quality, skilled professionals, and consistent
            performance to ensure every service meets the highest standards.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Drives;
