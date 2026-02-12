import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import "../styles/church.css";
import { useNavigate } from "react-router-dom";


export default function ChurchOnboarding() {
    const navigate = useNavigate(); 
  return (
    
    <>
      <Navbar />

      {/* HERO */}
      <section className="church-hero">
  <h1>All-in-One Digital Platform for Churches</h1>

  <p>
    POWAHA helps churches securely manage members, staff, approvals, and
    communication — all in one trusted platform.
  </p>

 <button className="primary-btn" onClick={() => navigate("/church-register")}>
  Register Your Church
</button>

</section>

<section className="church-section light">
  <h2>What You Can Do With POWAHA</h2>
  <p className="section-subtext">
    Everything your church needs to operate, manage, and grow digitally.
  </p>

  <div className="church-grid">
    <div className="church-card">📋 Manage members & approvals</div>
    <div className="church-card">👥 Invite & assign church employees</div>
    <div className="church-card">🛡 Control access with roles</div>
    <div className="church-card">📢 Share updates & announcements</div>
    <div className="church-card">📊 Track activity & operations</div>
    <div className="church-card">🔐 Maintain secure church data</div>
  </div>
</section>

<section className="church-highlight">
  <div className="highlight-box">
    <h2>Why POWAHA is Different</h2>
    <p>
      POWAHA is not a social media app. It is a structured, approval-based,
      multi-tenant platform designed specifically for churches and faith communities.
    </p>

    <ul>
      <li>✔ Platform-approved churches only</li>
      <li>✔ Invite-only employee system</li>
      <li>✔ Church-controlled member approvals</li>
      <li>✔ Strong separation between churches</li>
      <li>✔ Built for accountability and trust</li>
    </ul>
  </div>
</section>


      {/* PROBLEMS */}
     <section className="church-section light">
  <h2>Why Churches Choose POWAHA</h2>

  <div className="church-grid">
    <div className="church-card">Secure multi-tenant church system</div>
    <div className="church-card">Admin approval & role-based access</div>
    <div className="church-card">Member & employee management</div>
    <div className="church-card">Built-in privacy and audit tracking</div>
    <div className="church-card">Centralized communication hub</div>
    <div className="church-card">Scalable for small to large churches</div>
  </div>
</section>


      {/* SOLUTIONS */}
     

      {/* HOW IT WORKS */}
    <section className="church-section">
  <h2>How Church Onboarding Works</h2>

  <div className="church-grid">
    <div className="church-card">1️⃣ Register your church</div>
    <div className="church-card">2️⃣ Platform admin verification</div>
    <div className="church-card">3️⃣ Church profile activation</div>
    <div className="church-card">4️⃣ Invite pastors & staff</div>
    <div className="church-card">5️⃣ Members request to join</div>
    <div className="church-card">6️⃣ Manage everything securely</div>
  </div>
</section>
<section className="church-section">
  <h2>Designed for Real Church Operations</h2>

  <div className="church-grid">
    <div className="church-card">🏛 Platform-level verification</div>
    <div className="church-card">📜 Secure audit-friendly system</div>
    <div className="church-card">🧑‍💼 Clear staff role separation</div>
    <div className="church-card">🔒 Data isolation per church</div>
  </div>
</section>


      {/* CTA */}
     <section className="church-cta">
  <h2>Bring Your Church Into the Digital Future</h2>

  <p>
    Start building a secure, connected, and well-managed faith community today.
  </p>

  <button className="primary-btn" onClick={() => navigate("/church-register")}>
  Register Your Church
</button>

</section>


      <Footer />
    </>
  );
}
