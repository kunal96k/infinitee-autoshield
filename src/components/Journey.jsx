import "./styles.css";

const data = [
  {
    year: "2026",
    title: "Nashik Market Launch",
    desc: "Launched operations in Nashik as part of our expansion strategy, bringing our trusted services closer to customers. This step strengthens our footprint across Maharashtra while ensuring greater accessibility, quality service, and customer satisfaction.",
  },
];

function Journey() {
  return (
    <section className="journey">
      <h2>
        Our <span>Journey</span>
      </h2>

      <p className="subtitle">Key milestones in our growth story</p>

      <div className="timeline">
        {data.map((item, index) => (
          <div
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            key={index}
          >
            <div className="content">
              <div className="year-badge">
                <h1>{item.year}</h1>
              </div>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>
            </div>

            <div className="dot"></div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Journey;
