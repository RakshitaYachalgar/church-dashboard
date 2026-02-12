import "../../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT */}
        <div className="footer-left">
          <h3>POWAHA</h3>
          <p>
            Where Faith Meets Community.  
            A secure digital platform helping churches manage communities, 
            events, and engagement beyond Sundays.
          </p>
        </div>

        {/* MIDDLE */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>Contact</li>
            
            <li>Login</li>
            <li>Register</li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="footer-right">
          <h4>Contact</h4>
          <p>Email: support@powaha.com</p>
          <p>Phone: +91 90000 00000</p>
          <p>India</p>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} POWAHA — All rights reserved.
      </div>
    </footer>
  );
}
