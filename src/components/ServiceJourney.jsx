import React from "react";
import "./Home.css";
import {
  PhoneCall,
  UserRound,
  ClipboardCheck,
  CarFront,
  Wrench,
  Wallet,
  ShieldCheck,
  Settings,
  BadgeCheck,
  Sparkles,
  MessageCircle,
} from "lucide-react";

function ServiceJourney() {
  const steps = [
    {
      no: "01",
      icon: <PhoneCall size={22} />,
      title: "Request Service",
      text: "Share your issue through call or website.",
    },
    {
      no: "02",
      icon: <UserRound size={22} />,
      title: "Support Connect",
      text: "Our advisor connects with you quickly.",
    },
    {
      no: "03",
      icon: <ClipboardCheck size={22} />,
      title: "Vehicle Review",
      text: "Basic condition and needs are noted.",
    },
    {
      no: "04",
      icon: <CarFront size={22} />,
      title: "Easy Pickup",
      text: "Pickup arranged from your location.",
    },
    {
      no: "05",
      icon: <Wrench size={22} />,
      title: "Technical Scan",
      text: "Detailed inspection by our team.",
    },
    {
      no: "06",
      icon: <Wallet size={22} />,
      title: "Quote Shared",
      text: "Clear estimate sent for approval.",
    },
    {
      no: "07",
      icon: <ShieldCheck size={22} />,
      title: "Work Approval",
      text: "Service starts after confirmation.",
    },
    {
      no: "08",
      icon: <Settings size={22} />,
      title: "Repair Process",
      text: "Skilled technicians complete work.",
    },
    {
      no: "09",
      icon: <BadgeCheck size={22} />,
      title: "Final Testing",
      text: "Quality checks before delivery.",
    },
    {
      no: "10",
      icon: <Sparkles size={22} />,
      title: "Safe Return",
      text: "Vehicle returned clean and ready.",
    },
  ];

  return (
    <section className="journey-section">
      <div className="journey-header">
        <h2 className="journey-title">
          Simple Service <span>Flow</span>
        </h2>

        <p className="journey-subtitle">
          Fast, transparent and customer-friendly process
        </p>
      </div>

      <div className="journey-grid">
        {steps.map((step, index) => (
          <div className="journey-card" key={index}>
            <div className="journey-card-top">
              <div className="journey-icon">{step.icon}</div>
              <div className="journey-no">{step.no}</div>
            </div>

            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </div>
        ))}
      </div>

      <div className="journey-cta">
        <p>Need help with your next vehicle service?</p>

        <div className="journey-buttons">
          <button className="journey-btn primary">
            <MessageCircle size={18} />
            WhatsApp Now
          </button>

          <button className="journey-btn secondary">
            <PhoneCall size={18} />
            Call Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default ServiceJourney;