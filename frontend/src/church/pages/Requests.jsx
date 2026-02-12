import { useState } from "react";
import { pendingRequests, membersData } from "../data/churchData";
import { useNavigate } from "react-router-dom";

function Requests() {
  const [requests, setRequests] = useState(pendingRequests);
  const navigate = useNavigate();

  const approveRequest = (person) => {
    membersData.push({ ...person, status: "ACTIVE" });
    setRequests(requests.filter((r) => r.id !== person.id));
  };

  const denyRequest = (id) => {
    setRequests(requests.filter((r) => r.id !== id));
  };

  return (
    <div>
      <h1 className="page-title">Member Requests</h1>

      <div className="dashboard-card table-card">
        <table className="admin-table modern-table">
          <thead>
            <tr>
              <th>Member</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {requests.map((r) => (
              <tr key={r.id}>
                <td>
                  <div className="user-cell">
                    <img src={r.photo} alt="profile" className="avatar" />
                    <div>
                      <p className="user-name">{r.name}</p>
                      <p className="user-email">{r.email}</p>
                    </div>
                  </div>
                </td>

                <td>
                  <span className="status pending">PENDING</span>
                </td>

                <td className="action-col">
                  <button
                    className="view-btn"
                    onClick={() => navigate(`/church/members/${r.id}`)}
                  >
                    👁
                  </button>

                  <button className="approve-btn" onClick={() => approveRequest(r)}>
                    Approve
                  </button>

                  <button className="reject-btn" onClick={() => denyRequest(r.id)}>
                    Deny
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Requests;
