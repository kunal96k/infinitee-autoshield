import "./styles.css";
import useScrollReveal from "./useScrollReveal";

function Join() {
  useScrollReveal();

  const handleBookService = () => {
    const btn = document.querySelector(".book-btn");
    if (btn) btn.click();
  };

  return (
    <section className="cta reveal" aria-label="Call to action">
      <h2>Be a Part of Our Journey</h2>
      <p>
        Discover why people in Nashik trust Infinitee AutoShield for their
        everyday vehicle needs — simple, reliable, and designed for convenience.
      </p>
      <div className="cta-buttons">
        <button className="primary" onClick={handleBookService}>
          Get Started
        </button>
        <a href="/contacts" style={{ textDecoration: "none" }}>
          <button className="secondary">Contact Us</button>
        </a>
      </div>
    </section>
  );
}

export default Join;
