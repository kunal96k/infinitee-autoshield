import React from "react";
import "./Home.css";
import { BadgeCheck, Star } from "lucide-react";
import useScrollReveal from "./useScrollReveal";

function VehicleWellnessSummary() {
  useScrollReveal();
  const score = 8.6;
  const percentage = 86;

  return (
    <section className="wellness-section" aria-label="Vehicle wellness summary">
      <div className="wellness-card reveal-scale">
        <div className="wellness-badge">
          <BadgeCheck size={12} />
          <span>Vehicle Status</span>
        </div>

        <h2 className="wellness-title">Vehicle Wellness Summary</h2>

        <div className="wellness-circle-wrapper">
          <div
            className="wellness-circle"
            style={{
              background: `conic-gradient(#ff8a5b 0% ${percentage / 2}%, #f08a9b ${percentage / 2}% ${percentage}%, rgba(255,255,255,0.06) ${percentage}% 100%)`,
            }}
            aria-label={`Wellness score: ${score} out of 10`}
          >
            <div className="wellness-circle-inner">
              <h3>{score}</h3>
              <p>out of 10</p>
            </div>
          </div>
        </div>

        <div className="wellness-stars" aria-label="4 out of 5 stars">
          {[1,2,3,4].map((i) => (
            <Star key={i} size={20} fill="#ffd54a" color="#ffd54a" />
          ))}
          <Star size={20} color="#ffd54a" />
        </div>

        <div className="wellness-message">
          <h4>Strong Performance</h4>
          <p>
            Your vehicle is currently showing a healthy overall condition.
            Continue timely servicing and periodic checks to keep it operating
            smoothly and efficiently.
          </p>
        </div>
      </div>
    </section>
  );
}

export default VehicleWellnessSummary;
