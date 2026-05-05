import React from "react";
import "./ContactCards.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF
} from "react-icons/fa";

function ContactCards() {
  return (
    <div className="contact-page">

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-badge">
          <FaEnvelope className="badge-icon" />
          <span>Get in Touch</span>
        </div>

        <h1>
          Contact <span>Us</span>
        </h1>

        <p>
          Have a question or need assistance? We&apos;re here to help you 24/7
        </p>
      </section>

      {/* Info Cards */}
      <section className="info-cards">
        <div className="info-card">
          <div className="icon-circle purple">
            <FaPhoneAlt />
          </div>
          <h3>Phone</h3>
          <p> 07020489435</p>
        </div>

        <div className="info-card">
          <div className="icon-circle violet">
            <FaEnvelope />
          </div>
          <h3>Email</h3>
          <p>contact@infiniteservices.com</p>
        </div>

        <div className="info-card">
          <div className="icon-circle indigo">
            <FaMapMarkerAlt />
          </div>
          <h3>Office</h3>
          <p>Sai Automobiles &amp; Tyres, Nashik</p>
        </div>

        <div className="info-card">
          <div className="icon-circle green">
            <FaClock />
          </div>
          <h3>Working Hours</h3>
          <p>24/7 Support Available</p>
        </div>
      </section>

      {/* Main Contact Area */}
      <section className="contact-main">

        {/* Left Form */}
        <div className="contact-box">
          <h2>Send us a Message</h2>
          <p>Fill out the form and we&apos;ll get back to you shortly</p>

          <form
            className="contact-form"
            onSubmit={(e) => e.preventDefault()}
          >
            <label>Full Name</label>
            <input type="text" placeholder="Your name" />

            <div className="row">
              <div className="field">
                <label>Email</label>
                <input type="email" placeholder="your@email.com" />
              </div>

              <div className="field">
                <label>Phone</label>
                <input type="text" placeholder="+91 12345 67890" />
              </div>
            </div>

            <label>Service Interest</label>
            <select defaultValue="">
              <option value="" disabled>
                Select a service
              </option>
              <option>Car Health Rating</option>
              <option>Bodyshop Services</option>
              <option>Mechanical Services</option>
              <option>Electrical Services</option>
            </select>

            <label>Message</label>
            <textarea
              rows="6"
              placeholder="Tell us how we can help..."
            ></textarea>

            <button type="submit" className="send-btn">
              Send Message <FaPaperPlane />
            </button>
          </form>
        </div>

        {/* Right Office Box */}
        <div className="contact-box office-box">
          <h2>Visit Our Office</h2>
          <p>Come see us in person or schedule a virtual meeting</p>

          <div className="map-box">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d445.6116097013571!2d73.74032463490826!3d19.947036733264266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd9313bf64cd33%3A0x4584fbd946a54a54!2sSai%20Automobiles%20%26%20Tyres!5e1!3m2!1sen!2sin!4v1776498505686!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>

          <div className="office-details">
            <div className="office-item">
              <FaMapMarkerAlt className="office-icon" />
              <div>
                <h4>Main Office</h4>
                <p>Sai Automobiles &amp; Tyres, Nashik</p>
              </div>
            </div>

            <div className="office-item">
              <FaClock className="office-icon" />
              <div>
                <h4>Business Hours</h4>
                <p>24/7 Support Available</p>
              </div>
            </div>
          </div>

          <button
            className="direction-btn"
            onClick={() =>
              window.open(
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d445.6116097013571!2d73.74032463490826!3d19.947036733264266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd9313bf64cd33%3A0x4584fbd946a54a54!2sSai%20Automobiles%20%26%20Tyres!5e1!3m2!1sen!2sin!4v1776498505686!5m2!1sen!2sin",
                "_blank"
              )
            }
          >
            Get Directions
          </button>
        </div>
      </section>


    </div>
  );
}

export default ContactCards;