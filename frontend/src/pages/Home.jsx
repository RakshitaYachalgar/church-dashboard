import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import "../styles/home.css";
import { useNavigate } from "react-router-dom"


export default function Home() {
   const navigate = useNavigate()
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            Where Faith <span>Meets</span> Community
          </h1>

          <p>
            POWAHA is a secure digital platform that helps churches manage communities,
            connect with members, and build meaningful engagement beyond physical walls.
          </p>

         {/*  <div className="hero-buttons">
            <a href="./church-register" className="primary-btn">
              Register Your Church
            </a>
            <a href="/RegisterStep1" className="secondary-btn">
              Join as a Follower
            </a>
          </div> */}
        </div>
      </section>

            {/* WHAT POWAHA DOES */}
      <section className="features">
        <h2 className="section-title">What POWAHA Does</h2>
        <p className="section-subtitle">
          Everything your church and community need, in one secure digital platform.
        </p>

        <div className="feature-grid">
          <div className="feature-card">
            <h3>⛪ Church Management</h3>
            <p>
              Manage churches, employees, members, and approvals from a centralized and secure system.
            </p>
          </div>

          <div className="feature-card">
            <h3>👥 Community Engagement</h3>
            <p>
              Connect believers, share updates, organize events, and build a stronger faith community.
            </p>
          </div>

          <div className="feature-card">
            <h3>🔐 Secure Platform</h3>
            <p>
              Role-based access, invite-only employees, admin approvals, and strong authentication.
            </p>
          </div>

          <div className="feature-card">
            <h3>📊 Transparent Operations</h3>
            <p>
              Clear records, accountability, and structured systems that churches can trust.
            </p>
          </div>
        </div>
      </section>

            {/* HOW POWAHA WORKS */}
      <section className="how-it-works">
        <h2 className="section-title1">How POWAHA Works</h2>
        <p className="section-subtitle1">
          A simple, secure flow designed to protect churches and build trusted communities.
        </p>

        <div className="steps-container">
  <div className="step-card">
    <span>1</span>
    <h3>Church Registers</h3>
    <p>
      A church signs up on POWAHA and submits details for verification.
    </p>
  </div>

  <div className="step-card">
    <span>2</span>
    <h3>Platform Approval</h3>
    <p>
      Platform administrators review and approve the church.
    </p>
  </div>

  <div className="step-card">
    <span>3</span>
    <h3>Employees Invited</h3>
    <p>
      Approved churches invite pastors and staff with assigned roles.
    </p>
  </div>

  <div className="step-card">
    <span>4</span>
    <h3>Community Grows</h3>
    <p>
      Members join, events are managed, and engagement grows securely.
    </p>
  </div>
</div>

      </section>


            {/* FOR CHURCHES VS MEMBERS */}
      <section className="audience-section">
      <div className="audience-container">
        <h2 className="section-title2">Built for Churches and Communities</h2>
        <p className="section-subtitle2">
          POWAHA empowers church leaders while creating a safe space for believers to connect.
        </p>

        <div className="audience-grid">

          <div className="audience-card">
            <h3>⛪ For Churches</h3>
            <ul>
              <li>✔ Platform-verified church profiles</li>
              <li>✔ Invite and manage pastors & staff</li>
              <li>✔ Approve and manage members</li>
              <li>✔ Role-based access control</li>
              <li>✔ Secure data and accountability</li>
            </ul>
            <button onClick={() => navigate('/church-register')} className="secondary-btn small-btn">
              Register Your Church
            </button>
          </div>

          <div className="audience-card highlighted">
            <h3>👥 For Followers</h3>
            <ul>
              <li>✔ Join trusted, verified churches</li>
              <li>✔ Stay updated with church activities</li>
              <li>✔ Participate in events & communities</li>
              <li>✔ Safe, moderated environment</li>
              <li>✔ Belong to a digital faith family</li>
            </ul>
            <a href="/RegisterStep1" className="secondary-btn small-btn">
              Join as a Follower
            </a>
          </div>

          <div className="audience-card highlighted">
            <h3>🤝 For Community Partners</h3>
            <ul>
              <li>✓ Manage outreach leads</li>
              <li>✓ Monitor performance & goals</li>
              <li>✓ Earn impact-based rewards </li>
              <li>✓ Work within assigned regions</li>
              <li>✓ Secure church collaboration</li>
            </ul>
            <a href="/community-partner-register" className="secondary-btn small-btn">
              Join as a Community Partner
            </a>
          </div>

        </div>
        </div>
      </section>

            {/* SECURITY & TRUST */}
      <section className="security-section">
        <h2 className="section-title3">Built on Security, Trust & Accountability</h2>
        <p className="section-subtitle3">
          POWAHA is designed with strict approval flows and role-based systems to protect every community.
        </p>
          
      <div className="security-container">
        <div className="security-grid">
          <div className="security-card">
            <h3>✅ Platform-Approved Churches</h3>
            <p>
              Every church on POWAHA is reviewed and approved before becoming active on the platform.
            </p>
          </div>

         

          <div className="security-card">
            <h3>📩 Invite-Only Employees</h3>
            <p>
              Church employees can only join using pre-approved email invitations.
            </p>
          </div>

          <div className="security-card">
            <h3>🛡 Member Approval System</h3>
            <p>
              Churches decide who joins their community, ensuring safe digital spaces.
            </p>
          </div>

          <div className="security-card">
            <h3>🔐 Secure Authentication</h3>
            <p>
              Token-based authentication with strong verification processes.
            </p>
          </div>

          <div className="security-card">
            <h3>🏛 Accountability & Logs</h3>
            <p>
              Structured systems that support transparency and future auditing.
            </p>
          </div>
          <div className="security-card">
        
        <h3>📜 Audit Trails & Activity History</h3>
      <p>
            All critical actions are recorded with timestamps, ensuring traceability,
            accountability, and responsible platform usage.
        </p>
      </div>
      </div>

        </div>
      </section>
            {/* FINAL CTA */}
      <section className="final-cta">
        <h2>Ready to Build a Trusted Digital Faith Community?</h2>
        <p>
          Whether you are a church leader or a believer, POWAHA helps you connect,
          manage, and grow in a secure digital environment.
        </p>

        {/* <div className="cta-buttons">
          <a href="./church-register" className="primary-btn">
            Register Your Church
          </a>
          <a href="/RegisterStep1" className="secondary-btn">
            Join as a Member
          </a>
        </div> */}
      </section>

      <Footer />
    </>
  );
}
