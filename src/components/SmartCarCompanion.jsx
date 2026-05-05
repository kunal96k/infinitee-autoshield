import React from "react";
import "./Home.css";
import { Download, CheckCircle2, Smartphone, Play } from "lucide-react";
import phoneImage from "../assets/Phone-mockup.png";
import useScrollReveal from "./useScrollReveal";

function SmartCarCompanion() {
  useScrollReveal();

  return (
    <section className="companion-section" aria-label="Mobile app section">
      <div className="companion-left reveal-left">
        <div className="companion-tag">
          <Download size={12} />
          <span>Get the Mobile Experience</span>
        </div>

        <h2 className="companion-title">
          Smarter Car Care, <br />
          <span>Right In Your Hands</span>
        </h2>

        <p className="companion-desc">
          Manage bookings, track services, get quick updates, and stay ready
          for every drive with one simple mobile experience designed for
          convenience and confidence.
        </p>

        <div className="companion-points">
          <div className="point-item">
            <CheckCircle2 size={16} />
            <span>Quick booking with real-time service updates</span>
          </div>
          <div className="point-item">
            <CheckCircle2 size={16} />
            <span>Easy access to vehicle history and care reminders</span>
          </div>
          <div className="point-item">
            <CheckCircle2 size={16} />
            <span>Fast support whenever you need roadside help in Nashik</span>
          </div>
        </div>

        <div className="companion-buttons">
          <button className="store-btn" aria-label="Download on App Store">
            <Smartphone size={22} />
            <div>
              <small>Available on</small>
              <strong>App Store</strong>
            </div>
          </button>
          <button className="store-btn" aria-label="Get it on Google Play">
            <Play size={22} />
            <div>
              <small>Get it on</small>
              <strong>Google Play</strong>
            </div>
          </button>
        </div>
      </div>

      <div className="companion-right reveal-right">
        <div className="phone-frame">
          <img src={phoneImage} alt="Infinitee AutoShield mobile app preview" />
        </div>
      </div>
    </section>
  );
}

export default SmartCarCompanion;
