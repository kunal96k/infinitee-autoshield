import React from "react";
import "./ServicesPage.css";
import {
  FaTools,
  FaOilCan,
  FaCarCrash,
  FaBolt,
  FaCarBattery,
  FaSnowflake
} from "react-icons/fa";

function ServicesPage() {
  const services = [
    {
      icon: <FaTools />,
      title: "Routine Car Maintenance",
      text: "Comprehensive inspection and periodic servicing to keep your vehicle in optimal condition."
    },
    {
      icon: <FaOilCan />,
      title: "Engine Oil Service",
      text: "High-quality oil and filter replacement to ensure smooth engine performance and longevity."
    },
    {
      icon: <FaCarCrash />,
      title: "Body & Paint Work",
      text: "Professional dent removal, repainting, and accident repair for a flawless exterior finish."
    },
    {
      icon: <FaBolt />,
      title: "Electrical Diagnostics",
      text: "Inspection and repair of wiring, lighting systems, and electronic components for reliable performance."
    },
    {
      icon: <FaCarBattery />,
      title: "Battery Care",
      text: "Complete battery health check, replacement services, and emergency jump-start assistance."
    },
    {
      icon: <FaSnowflake />,
      title: "Air Conditioning Service",
      text: "Cooling system inspection, gas refilling, and AC repair to maintain comfortable cabin temperature."
    }
  ];

  return (
    <div className="services-page">
      <div className="services-header">
        <h1>Our Car Services</h1>
        <p>Choose the best service for your car maintenance and repair needs.</p>
      </div>

      <div className="services-grid">
        {services.map((item, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <button>Book Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicesPage;