import React, { useEffect, useRef } from "react";
import "./Home.css";
import { Sparkles, Shield, Gauge, Wrench, Zap, FileCheck } from "lucide-react";
import useScrollReveal from "./useScrollReveal";

function VehicleCareOverview() {
  useScrollReveal();
  const barsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const fill = entry.target.querySelector(".care-fill");
            if (fill) {
              const target = fill.getAttribute("data-width");
              fill.style.width = target + "%";
            }
          }
        });
      },
      { threshold: 0.3 }
    );
    barsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const metrics = [
    { icon: <Sparkles size={20} />, title: "Body Finish", desc: "Surface shine, dust level, visual appeal", value: 76, colorClass: "blue" },
    { icon: <Shield size={20} />, title: "Cabin Freshness", desc: "Interior hygiene, odor control, comfort feel", value: 82, colorClass: "purple" },
    { icon: <Gauge size={20} />, title: "Wheel Balance", desc: "Tyre wear, grip response, smooth movement", value: 71, colorClass: "indigo" },
    { icon: <Wrench size={20} />, title: "Engine Response", desc: "Startup behavior, engine sound, stability", value: 79, colorClass: "green" },
    { icon: <Zap size={20} />, title: "Lighting Status", desc: "Headlamps, indicators, brake light output", value: 74, colorClass: "gold" },
    { icon: <FileCheck size={20} />, title: "Paper Readiness", desc: "Insurance, fitness, service record check", value: 69, colorClass: "gray" },
  ];

  return (
    <section className="care-section" aria-label="Vehicle care overview">
      <div className="care-header reveal">
        <h2 className="care-title">Vehicle Care <span>Overview</span></h2>
        <p className="care-subtitle">
          A quick snapshot of your vehicle across key care indicators,
          helping you understand its present condition at a glance.
        </p>
      </div>

      <div className="care-grid">
        {metrics.map((item, i) => (
          <div
            className={`care-card reveal delay-${(i % 3) + 1}`}
            key={i}
            ref={(el) => (barsRef.current[i] = el)}
          >
            <div className={`care-icon ${item.colorClass}`}>{item.icon}</div>
            <h3>{item.title}</h3>
            <p className="care-desc">{item.desc}</p>
            <div className="care-scale">
              <div className="care-labels">
                <span>Low</span>
                <span>{item.value}%</span>
                <span>Strong</span>
              </div>
              <div className="care-bar">
                <div
                  className={`care-fill ${item.colorClass}`}
                  data-width={item.value}
                  style={{ width: "0%" }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default VehicleCareOverview;
