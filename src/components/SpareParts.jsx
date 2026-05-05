import React from "react";
import "./SpareParts.css";
import { Package, Cog, Battery, Disc, CheckCircle } from "lucide-react";

function SpareParts() {
  return (
    <div className="spare-page">
      {/* Hero */}
      <section className="spare-hero">
        <h1>Spare Parts Services</h1>
        <p>
          Genuine and high-quality spare parts for engine, brakes, battery,
          suspension, filters, and all major car components.
        </p>
        <button>Order Spare Parts</button>
      </section>

      {/* Services */}
      <section className="spare-services">
        <div className="spare-card">
          <Cog className="spare-icon" />
          <h3>Engine Components</h3>
          <p>
            Reliable engine parts and replacements designed to maintain
            performance and durability.
          </p>
        </div>

        <div className="spare-card">
          <Disc className="spare-icon" />
          <h3>Brake System Parts</h3>
          <p>
            High-quality brake pads, discs, and components to ensure safe and
            responsive braking.
          </p>
        </div>

        <div className="spare-card">
          <Battery className="spare-icon" />
          <h3>Electrical & Battery Parts</h3>
          <p>
            Wide range of batteries, wiring, fuses, and electrical components
            for dependable operation.
          </p>
        </div>

        <div className="spare-card">
          <Package className="spare-icon" />
          <h3>Body Parts & Accessories</h3>
          <p>
            Exterior components and accessories including bumpers, mirrors,
            lights, and filters.
          </p>
        </div>
      </section>

      {/* Why Choose */}
      <section className="spare-why">
        <h2>Why Choose Our Spare Parts?</h2>

        <div className="spare-list">
          <div>
            <CheckCircle /> Genuine Quality Parts
          </div>
          <div>
            <CheckCircle /> Affordable Prices
          </div>
          <div>
            <CheckCircle /> Multiple Car Brands
          </div>
          <div>
            <CheckCircle /> Fast Availability
          </div>
        </div>
      </section>
    </div>
  );
}

export default SpareParts;
