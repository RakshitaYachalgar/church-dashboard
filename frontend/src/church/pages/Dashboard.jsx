import { membersData, pendingRequests, eventsData } from "../data/churchData";
import { givingsData } from "../data/churchData";
import { churchProfileData } from "../data/churchProfile";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const activeMembers = membersData.filter(m => m.status === "ACTIVE");
  const blockedMembers = membersData.filter(m => m.status === "BLOCKED");

  return (
    <div className="dashboard-page">

      {/* HERO */}
      <div className="dashboard-hero">
        <div>
          <h2>Welcome back </h2>
          <h1>{churchProfileData.name}</h1>
          <p>Here’s what’s happening in your church today.</p>

          <div className="hero-actions">
            <button onClick={() => navigate("/church/requests")}>View Requests</button>
            <button onClick={() => navigate("/church/events")}>Add Event</button>
            <button onClick={() => navigate("/church/givings")}>Create Giving</button>
          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="pro-stats">

  <div className="pro-card blue">
    <div className="pro-icon">👥</div>
    <div>
      <p className="pro-label">Active Members</p>
      <h2 className="pro-value">{activeMembers.length}</h2>
    </div>
  </div>

  <div className="pro-card red">
    <div className="pro-icon">🚫</div>
    <div>
      <p className="pro-label">Blocked Members</p>
      <h2 className="pro-value">{blockedMembers.length}</h2>
    </div>
  </div>

  <div className="pro-card amber">
    <div className="pro-icon">⏳</div>
    <div>
      <p className="pro-label">Pending Requests</p>
      <h2 className="pro-value">{pendingRequests.length}</h2>
    </div>
  </div>

  <div className="pro-card purple">
    <div className="pro-icon">📅</div>
    <div>
      <p className="pro-label">Events</p>
      <h2 className="pro-value">{eventsData.length}</h2>
    </div>
  </div>

  <div className="pro-card green">
    <div className="pro-icon">🎁</div>
    <div>
      <p className="pro-label">Giving Causes</p>
      <h2 className="pro-value">{givingsData.length}</h2>
    </div>
  </div>

</div>


      

      {/* INSIGHTS */}
      <div className="dashboard-insights">

        {/* Recent Members */}
       {/* Recent Members */}
{/* Upcoming Events */}
{/* Recent Members */}
<div className="dashboard-card insight-card">
  <h3>Recent Members</h3>

  {membersData.slice(-5).map(m => (
    <div key={m.id} className="dash-user-row">
      <img src={m.photo} alt="" />
      <div>
        <p className="dash-name">{m.name}</p>
        <span>{m.email} • {m.city}</span>
      </div>
    </div>
  ))}
</div>




        {/* Upcoming Events */}
      {/* Upcoming Events */}
{/* Upcoming Events */}
{/* Upcoming Events */}
<div className="dashboard-card insight-card">
  <h3>Upcoming Events</h3>

  <div className="dashboard-event-list">
    {eventsData.slice(0,4).map((e) => (
      <div key={e.id} className="dashboard-event-row">
        
        <img src={e.image} alt={e.title} />

        <div className="dashboard-event-info">
          <p className="dash-event-title">{e.title}</p>
          <span className="dash-event-meta">{e.date} • {e.location}</span>
          <p className="dash-event-desc">{e.description}</p>
        </div>

      </div>
    ))}
  </div>
</div>





      </div>
    </div>
  );
}

export default Dashboard;
