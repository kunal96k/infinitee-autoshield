import "./styles.css";

function Founders() {
  return (
    <section className="founders">
      <h2>
        Our <span>Founders</span>
      </h2>
      <p className="subtitle">
        9+ passionate individuals revolutionizing car care
      </p>

      {/* CARD 1 */}
      <div className="founder-card">
        <h3>
          Founded by <span>Adivit Bhosale</span> and{" "}
          <span>Samir Patil</span>
        </h3>

        <p>
          <b>Adivit</b> - Petrolhead with 10+ years of solving problems with
          tech
        </p>

        <a href="#" className="link">
          myeye.rest →
        </a>

        <p>
          <b>Samir</b> - Operations expert ensuring seamless service delivery
        </p>

        <div className="divider"></div>

        <p className="bottom-text">
          Has grown to a team of 9+ young folks solving car maintenance from the
          root.
        </p>
      </div>

      {/* CARD 2 */}
      <div className="cta-card">
        <h3>Passionate About Better Services?</h3>

        <p>
          We’d love to connect with individuals who are excited to improve
          everyday service experiences and be part of building something
          impactful with Infinitee AutoShield.
        </p>

        <button>Get in Touch</button>
      </div>
    </section>
  );
}

export default Founders;
