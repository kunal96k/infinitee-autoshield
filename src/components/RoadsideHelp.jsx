import React from "react";
import "./RoadsideHelp.css";
import { LifeBuoy, Truck, Battery, Wrench, CheckCircle } from "lucide-react";

function RoadsideHelp() {
  return (
    <div className="roadside-page">
      {/* Hero */}
      <section className="roadside-hero">
        <h1>Roadside Help Services</h1>
        <p>
          Fast roadside assistance for breakdowns, towing, battery issues,
          punctures, and emergency vehicle support anytime you need help.
        </p>
        <button>Get Emergency Help</button>
      </section>

      {/* Services */}
      <section className="roadside-services">
        <div className="roadside-card">
          <Truck className="roadside-icon" />
          <h3>Emergency Towing Service</h3>
          <p>
            Reliable towing assistance to safely move your vehicle during
            breakdowns.
          </p>
        </div>

        <div className="roadside-card">
          <Battery className="roadside-icon" />
          <h3>Battery Jump-Start Support</h3>
          <p>
            Quick on-site battery assistance to get your vehicle running again.
          </p>
        </div>

        <div className="roadside-card">
          <Wrench className="roadside-icon" />
          <h3>On-Site Minor Repairs</h3>
          <p>
            Immediate fixes for common issues to help you continue your journey.
          </p>
        </div>

        <div className="roadside-card">
          <LifeBuoy className="roadside-icon" />
          <h3>24/7 Roadside Assistance</h3>
          <p>
            Round-the-clock support to handle emergencies anytime, anywhere.
          </p>
        </div>
      </section>

      {/* Why Choose */}
      <section className="roadside-why">
        <h2>Why Choose Our Roadside Help?</h2>

        <div className="roadside-list">
          <div>
            <CheckCircle /> Quick Response
          </div>
          <div>
            <CheckCircle /> 24/7 Support
          </div>
          <div>
            <CheckCircle /> Trained Team
          </div>
          <div>
            <CheckCircle /> Reliable Assistance
          </div>
        </div>
      </section>
    </div>
  );
}

export default RoadsideHelp;
