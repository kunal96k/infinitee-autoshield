import React from "react";
import "./Home.css";
import { Car, Users, Handshake, Clock3, Infinity } from "lucide-react";
import useScrollReveal from "./useScrollReveal";

function StatsSection() {
  useScrollReveal();

  return (
    <section className="stats-section" aria-label="Our statistics">
      <div className="stats-top">
        <div className="top-stat reveal delay-1">
          <h2>25%</h2>
          <p>Average Savings</p>
        </div>
        <div className="top-stat reveal delay-2">
          <h2>10x</h2>
          <p>Time Saving</p>
        </div>
        <div className="top-stat reveal delay-3">
          <h2><Infinity size={48} strokeWidth={3} /></h2>
          <p>Happiness Guaranteed</p>
        </div>
      </div>

      <div className="stats-cards">
        <div className="stat-card reveal delay-1">
          <div className="icon-box blue"><Car size={28} /></div>
          <h3>1000+</h3>
          <p>Cars Managed</p>
        </div>
        <div className="stat-card reveal delay-2">
          <div className="icon-box purple"><Users size={28} /></div>
          <h3>4000+</h3>
          <p>Customer Interactions</p>
        </div>
        <div className="stat-card reveal delay-3">
          <div className="icon-box indigo"><Handshake size={28} /></div>
          <h3>100+</h3>
          <p>Vendor Tieups</p>
        </div>
        <div className="stat-card reveal delay-4">
          <div className="icon-box green"><Clock3 size={28} /></div>
          <h3>24/7</h3>
          <p>Support Available</p>
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
