import React from "react";
import "./CarRepair.css";
import { Wrench, Cog, ShieldCheck, Clock3, CheckCircle } from "lucide-react";

function CarRepair() {
  return (
    <div className="repair-page">
      {/* Hero */}
      <section className="repair-hero">
        <h1>Car Repair Services</h1>
        <p>
          Professional repair solutions for engine, brakes, suspension,
          electrical systems and complete vehicle maintenance.
        </p>
        <button>Book Repair Now</button>
      </section>

      {/* Services */}
      <section className="repair-services">
        <div className="repair-card">
          <Wrench className="repair-icon" />
          <h3>Engine Diagnostics & Repair</h3>
          <p>
            Advanced engine inspection and precision repairs to restore
            performance and efficiency.
          </p>
        </div>

        <div className="repair-card">
          <Cog className="repair-icon" />
          <h3>Brake System Service</h3>
          <p>
            Complete brake inspection including pads, discs, and fluid for
            maximum safety.
          </p>
        </div>

        <div className="repair-card">
          <ShieldCheck className="repair-icon" />
          <h3>Suspension & Ride Care</h3>
          <p>
            Shock absorber and suspension tuning for a smoother and more stable
            drive.
          </p>
        </div>

        <div className="repair-card">
          <Clock3 className="repair-icon" />
          <h3>Express Repair Service</h3>
          <p>
            Quick turnaround solutions for common issues to get you back on the
            road faster.
          </p>
        </div>
      </section>

      {/* Why Choose */}
      <section className="repair-why">
        <h2>Why Choose Us?</h2>

        <div className="why-list">
          <div>
            <CheckCircle /> Certified Mechanics
          </div>
          <div>
            <CheckCircle /> Genuine Spare Parts
          </div>
          <div>
            <CheckCircle /> Affordable Pricing
          </div>
          <div>
            <CheckCircle /> Fast Delivery
          </div>
        </div>
      </section>
    </div>
  );
}

export default CarRepair;
