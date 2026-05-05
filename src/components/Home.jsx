import React from "react";
import "./Home.css";
import { PhoneCall, MessageCircle, Sparkles } from "lucide-react";

function Home() {
  const handleBookService = () => {
    const btn = document.querySelector(".book-btn");
    if (btn) btn.click();
  };

  return (
    <section id="home" className="home" aria-label="Hero section">
      <div className="home-content">
        <div className="top-tag">
          <Sparkles size={14} />
          <span>Trusted Vehicle Care in Nashik</span>
        </div>

        <h1 className="home-title">
          Drive Better With <br />
          <span>Infinitee AutoShield</span>
        </h1>
        <p className="home-desc">
          Get trusted service, repair, detailing and vehicle support in Nashik —
          one place with a simple, fast and customer-friendly experience.
        </p>

        <div className="home-buttons">
          <button
            className="primary-btn"
            onClick={handleBookService}
            aria-label="Book a car service"
          >
            <MessageCircle size={20} />
            Book Service Now
          </button>

          <a href="tel:+917020489435" style={{ textDecoration: "none" }}>
            <button className="secondary-btn" aria-label="Call Infinitee AutoShield">
              <PhoneCall size={20} />
              Call Now
            </button>
          </a>
        </div>
      </div>

      <div className="scroll-hint" aria-hidden="true">
        <div className="scroll-line"></div>
        <span>Scroll</span>
      </div>
    </section>
  );
}

export default Home;
