import React from "react";
import "./CarDetailing.css";
import {
  Sparkles,
  Droplets,
  Shield,
  SprayCan,
  CheckCircle,
} from "lucide-react";

function CarDetailing() {
  return (
    <div className="detailing-page">
      {/* Hero */}
      <section className="detailing-hero">
        <h1>Car Detailing Services</h1>
        <p>
          Premium interior and exterior detailing services to keep your car
          clean, shiny, protected, and looking like new.
        </p>
        <button>Book Detailing Now</button>
      </section>

      {/* Services */}
      <section className="detailing-services">
        <div className="detailing-card">
          <Sparkles className="detailing-icon" />
          <h3>Exterior Finish Polishing</h3>
          <p>
            Precision polishing to restore shine and give your car a flawless,
            showroom-quality finish.
          </p>
        </div>

        <div className="detailing-card">
          <Droplets className="detailing-icon" />
          <h3>Interior Deep Cleaning</h3>
          <p>
            Thorough cleaning of seats, dashboard, carpets, and cabin surfaces
            for a fresh interior feel.
          </p>
        </div>

        <div className="detailing-card">
          <Shield className="detailing-icon" />
          <h3>Paint Protection Treatment</h3>
          <p>
            Shield your vehicle’s paint from dust, minor scratches, and
            environmental damage.
          </p>
        </div>

        <div className="detailing-card">
          <SprayCan className="detailing-icon" />
          <h3>Ceramic Coating Service</h3>
          <p>
            High-performance coating that delivers long-lasting shine and
            superior surface protection.
          </p>
        </div>
      </section>
      {/* Why Choose */}
      <section className="detailing-why">
        <h2>Why Choose Our Detailing?</h2>

        <div className="why-list">
          <div>
            <CheckCircle /> Premium Products
          </div>
          <div>
            <CheckCircle /> Skilled Experts
          </div>
          <div>
            <CheckCircle /> Long-lasting Shine
          </div>
          <div>
            <CheckCircle /> Affordable Packages
          </div>
        </div>
      </section>
    </div>
  );
}

export default CarDetailing;
