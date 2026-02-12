import { useState } from "react";
import { membersData } from "../data/churchData";
import { useNavigate } from "react-router-dom";

function Members() {
  const [members, setMembers] = useState(membersData);
  const navigate = useNavigate();

  const toggleStatus = (id) => {
    setMembers(
      members.map((m) =>
        m.id === id
          ? { ...m, status: m.status === "ACTIVE" ? "BLOCKED" : "ACTIVE" }
          : m
      )
    );
  };

  return (
    <div>
      <h1 className="page-title">Members</h1>

      <div className="dashboard-card table-card">
        <table className="admin-table modern-table">
          <thead>
            <tr>
              <th>Member</th>
              <th>City</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {members.map((m) => (
              <tr key={m.id}>
                <td>
                  <div className="user-cell">
                    <img src={m.photo} alt="profile" className="avatar" />
                    <div>
                      <p className="user-name">{m.name}</p>
                      <p className="user-email">{m.email}</p>
                    </div>
                  </div>
                </td>

                <td>{m.city}</td>

                <td>
                  <span
                    className={`status ${
                      m.status === "ACTIVE" ? "active" : "blocked"
                    }`}
                  >
                    {m.status}
                  </span>
                </td>

                <td className="action-col">
                  <button
                    className="view-btn"
                    onClick={() => navigate(`/church/members/${m.id}`)}
                  >
                    👁
                  </button>

                  <button
                    className={
                      m.status === "ACTIVE" ? "block-btn" : "approve-btn"
                    }
                    onClick={() => toggleStatus(m.id)}
                  >
                    {m.status === "ACTIVE" ? "Block" : "Unblock"}
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

export default Members;

