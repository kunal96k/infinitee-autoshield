import { useState } from "react";
import "./Home.css";

function BookService({ close }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Service booked successfully!");
    close();
  };

  return (
    <div className="modal-overlay" onClick={close}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        
        <button className="close-btn" onClick={close}>✕</button>

        <h2 style={{textAlign:"center"}}>Book a Service</h2>

        <form onSubmit={handleSubmit} className="modal-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
            required
          />

          <select name="service" onChange={handleChange} required>
            <option value="">Select Service</option>
            <option>General Service</option>
            <option>Engine Repair</option>
            <option>Oil Change</option>
            <option>AC Service</option>
            <option>Battery Service</option>
          </select>

          <input type="date" name="date" onChange={handleChange} required />

          <textarea
            name="message"
            placeholder="Additional Details"
            onChange={handleChange}
          />

          <button type="submit">Submit</button>
        </form>

      </div>
    </div>
  );
}

export default BookService;