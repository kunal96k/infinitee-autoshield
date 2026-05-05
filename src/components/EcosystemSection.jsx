import React from "react";
import "./Home.css";
import {
  Wrench, Users, CarFront, Package,
  ShieldCheck, Sparkles, BadgeCheck, LifeBuoy, ArrowRight, Stars,
} from "lucide-react";
import useScrollReveal from "./useScrollReveal";

function EcosystemSection() {
  useScrollReveal();

  const services = [
    { icon: <Wrench size={20} />, title: "AutoCare Hub", text: "Routine service, repair planning, and vehicle upkeep in one place.", colorClass: "blue" },
    { icon: <Users size={20} />, title: "Partner Network", text: "Connect with trusted workshops and service professionals near you.", colorClass: "purple" },
    { icon: <CarFront size={20} />, title: "DriveMarket", text: "Explore verified vehicle listings and smooth ownership support.", colorClass: "indigo" },
    { icon: <Package size={20} />, title: "PartsPoint", text: "Order quality components and essentials with easy doorstep delivery.", colorClass: "green" },
    { icon: <ShieldCheck size={20} />, title: "AssureCare", text: "Reliable protection services and verified support for every trip.", colorClass: "gray" },
    { icon: <Sparkles size={20} />, title: "StyleWorks", text: "Enhance your vehicle with detailing, upgrades, and visual care.", colorClass: "gold" },
    { icon: <BadgeCheck size={20} />, title: "Prime Circle", text: "Member benefits, priority support, and curated premium experiences.", colorClass: "red" },
    { icon: <LifeBuoy size={20} />, title: "RoadReady Help", text: "Emergency roadside support whenever and wherever you need it.", colorClass: "pink" },
  ];

  return (
    <section className="eco-section" aria-label="Service ecosystem">
      <div className="eco-header reveal">
        <div className="eco-tag"><Stars size={14} /><span>Connected Solutions</span></div>
        <h2 className="eco-title">Explore Our <span>Service Network</span></h2>
        <p className="eco-subtitle">
          A smart ecosystem built to support vehicle care, convenience, upgrades,
          and on-road confidence — all through one connected experience in Nashik.
        </p>
      </div>

      <div className="eco-grid">
        {services.map((item, i) => (
          <div className={`eco-card reveal delay-${(i % 4) + 1}`} key={i}>
            <div className={`eco-icon ${item.colorClass}`}>{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <button className="eco-link" aria-label={`Explore ${item.title}`}>
              Explore <ArrowRight size={14} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default EcosystemSection;
