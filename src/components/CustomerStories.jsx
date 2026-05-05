import React from "react";
import "./Home.css";
import { Zap, Wallet, ShieldCheck, Headphones } from "lucide-react";
import useScrollReveal from "./useScrollReveal";

function CustomerStories() {
  useScrollReveal();

  const stories = [
    { icon: <Zap size={22} />, title: "Fast Booking", text: "Book any car service in Nashik quickly with instant confirmation." },
    { icon: <Wallet size={22} />, title: "Affordable Rates", text: "Transparent pricing with no hidden charges — always fair." },
    { icon: <ShieldCheck size={22} />, title: "Trusted Experts", text: "Skilled professionals for reliable vehicle service every time." },
    { icon: <Headphones size={22} />, title: "24/7 Support", text: "Always ready to help whenever and wherever you need us." },
  ];

  return (
    <section className="stories-section" aria-label="Why choose Infinitee AutoShield">
      <div className="stories-header reveal">
        <h2 className="stories-title">
          Why People <span>Choose Us</span>
        </h2>
        <p className="stories-subtitle">
          Trusted vehicle service experience for every customer in Nashik
        </p>
      </div>

      <div className="stories-grid">
        {stories.map((story, i) => (
          <div className={`story-card reveal delay-${i + 1}`} key={i}>
            <div className="story-icon">{story.icon}</div>
            <h3>{story.title}</h3>
            <p>{story.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CustomerStories;
