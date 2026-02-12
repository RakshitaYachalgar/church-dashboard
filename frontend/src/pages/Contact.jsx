import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import "../styles/contact.css";

export default function Contact() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>
          Have questions, need support, or want to bring your church to POWAHA?
          We’re here to help.
        </p>
      </section>

      {/* INFO CARDS */}
      <section className="contact-info">
        <div className="contact-card">
          <h3>📧 Email</h3>
          <p>powaha.platform@gmail.com</p>
        </div>

        <div className="contact-card">
          <h3>📞 Phone</h3>
          <p>+91 90000 00000</p>
        </div>

        <div className="contact-card">
          <h3>📍 Location</h3>
          <p>India • Serving globally</p>
        </div>

        <div className="contact-card">
          <h3>🕒 Support Hours</h3>
          <p>Mon – Sat, 9AM – 6PM</p>
        </div>
      </section>

      {/* FORM */}
      <section className="contact-form-section">
        <div className="contact-form-box">
          <h2>Send us a message</h2>
          <p>We usually respond within 24 hours.</p>

          <form className="contact-form">
            <input type="text" placeholder="Your full name" />
            <input type="email" placeholder="Your email address" />
            <input type="text" placeholder="Subject" />
            <textarea rows="5" placeholder="Your message"></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>

      {/* TRUST */}
      {/* <section className="contact-faith">
        <h2>Building trusted digital faith communities</h2>
        <p>
          POWAHA is designed to protect churches, leaders, and members while
          empowering meaningful connection beyond physical walls.
        </p>
      </section> */}

      <Footer />
    </>
  );
}
