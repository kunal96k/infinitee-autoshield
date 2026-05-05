import React from "react";
import "./Inspection.css";
import {
  Search,
  ClipboardCheck,
  Car,
  ShieldCheck,
  CheckCircle,
} from "lucide-react";

function Inspection() {
  return (
    <div className="inspection-page">
      {/* Hero */}
      <section className="inspection-hero">
        <h1>Car Inspection Services</h1>
        <p>
          Complete vehicle inspection to check engine health, brakes, tyres,
          suspension, battery, lights, and overall safety condition.
        </p>
        <button>Book Inspection Now</button>
      </section>

      {/* Services */}
      <section className="inspection-services">
        <div className="inspection-card">
          <Search className="inspection-icon" />
          <h3>Comprehensive Vehicle Inspection</h3>
          <p>
            Thorough evaluation of all major components and systems to assess
            overall vehicle condition.
          </p>
        </div>

        <div className="inspection-card">
          <ClipboardCheck className="inspection-icon" />
          <h3>Engine Health Diagnostics</h3>
          <p>
            Detailed engine analysis including fluid levels, leak detection, and
            performance assessment.
          </p>
        </div>

        <div className="inspection-card">
          <Car className="inspection-icon" />
          <h3>Tyre & Brake Assessment</h3>
          <p>
            Inspection of tyre condition, brake pads, and discs to ensure
            optimal safety and control.
          </p>
        </div>

        <div className="inspection-card">
          <ShieldCheck className="inspection-icon" />
          <h3>Complete Safety Check</h3>
          <p>
            End-to-end safety inspection covering lights, battery, suspension,
            and steering systems.
          </p>
        </div>
      </section>

      {/* Why Choose */}
      <section className="inspection-why">
        <h2>Why Choose Our Inspection?</h2>

        <div className="inspection-list">
          <div>
            <CheckCircle /> Expert Technicians
          </div>
          <div>
            <CheckCircle /> Accurate Report
          </div>
          <div>
            <CheckCircle /> Quick Service
          </div>
          <div>
            <CheckCircle /> Affordable Price
          </div>
        </div>
      </section>
    </div>
  );
}

export default Inspection;
