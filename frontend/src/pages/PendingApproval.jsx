import { useNavigate } from "react-router-dom";

function PendingApproval() {
  const navigate = useNavigate();

  return (
    <div className="pending-container">
      <h2>Your church registration is under review ⏳</h2>
      <p>Once approved, you can access your dashboard.</p>

      {/* TEMP / DEMO BUTTON */}
      <button
        onClick={() => navigate("/church/dashboard")}
        style={{
          marginTop: "20px",
          padding: "12px 24px",
          backgroundColor: "#0b1c2d",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "16px"
        }}
      >
        Go to Church Dashboard
      </button>
    </div>
  );
}

export default PendingApproval;
