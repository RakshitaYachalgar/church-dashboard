import { useParams, useNavigate } from "react-router-dom";
import { membersData, pendingRequests } from "../data/churchData";

function MemberDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const member =
    membersData.find((m) => m.id === Number(id)) ||
    pendingRequests.find((r) => r.id === Number(id));

  if (!member) return <p>Member not found</p>;

  return (
    <div className="member-details-page">

      {/* HEADER */}
      <div className="member-header dashboard-card">
        <div className="member-header-left">
          <img
            src={member.photo || "https://i.pravatar.cc/150?img=10"}
            alt="profile"
            className="member-avatar-lg"
          />
          <div>
            <h2>{member.name}</h2>
            <p className="member-email">{member.email}</p>
          </div>
        </div>

        {member.status && (
          <span
            className={`status ${
              member.status === "ACTIVE" ? "active" : "blocked"
            }`}
          >
            {member.status}
          </span>
        )}
      </div>

      {/* GRID */}
      <div className="member-info-grid">

        {/* BASIC INFO */}
        <div className="dashboard-card">
          <h3 className="section-title">BASIC INFORMATION</h3>

          <div className="info-row"><span>Member Code</span><span>{member.code || "-"}</span></div>
          <div className="info-row"><span>Email</span><span>{member.email || "-"}</span></div>
          <div className="info-row"><span>Contact</span><span>{member.phone || "-"}</span></div>
          <div className="info-row"><span>Date of Birth</span><span>{member.dob || "-"}</span></div>
        </div>

        {/* ADDRESS */}
        <div className="dashboard-card">
          <h3 className="section-title">ADDRESS</h3>

          <div className="info-row"><span>Address</span><span>{member.address || "-"}</span></div>
          <div className="info-row"><span>City</span><span>{member.city || "-"}</span></div>
          <div className="info-row"><span>State</span><span>{member.state || "-"}</span></div>
          <div className="info-row"><span>Country</span><span>{member.country || "-"}</span></div>
          <div className="info-row"><span>Pincode</span><span>{member.pincode || "-"}</span></div>
        </div>
      </div>

      <button className="primary-btn" style={{ marginTop: "20px" }} onClick={() => navigate(-1)}>
        ← Back
      </button>
    </div>
  );
}

export default MemberDetails;
