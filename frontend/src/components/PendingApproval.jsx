import { useNavigate } from "react-router-dom";

function PendingApproval() {
  const navigate = useNavigate();

  return (
    <div className="pending-box">
      <h2>Your church request is under review ⏳</h2>

      <button 
        className="primary-btn"
        onClick={() => navigate("/church/dashboard")}
      >
        Go to Church Dashboard
      </button>
    </div>
  );
}

export default PendingApproval;
