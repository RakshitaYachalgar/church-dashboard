import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { churchProfileData } from "../data/churchProfile";
// import { useAuth } from "../../context/AuthContext";
import "../styles/church.css";

function ChurchLayout() {
  const navigate = useNavigate();

  const [church, setChurch] = useState(
    JSON.parse(localStorage.getItem("churchProfile")) || churchProfileData
  );

  // Keep branding updated if profile changes
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("churchProfile"));
    if (stored) setChurch(stored);
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="church-container">
      
      {/* SIDEBAR */}
      <aside className="church-sidebar">

        <div className="sidebar-brand">
          {church.logo ? (
            <img src={church.logo} alt="Church Logo" />
          ) : (
            <div className="brand-circle">⛪</div>
          )}
          <h3>{church.name}</h3>
        </div>

        <nav>
          <NavLink to="/church/dashboard">Dashboard</NavLink>
          <NavLink to="/church/members">Members</NavLink>
          <NavLink to="/church/requests">Requests</NavLink>
          <NavLink to="/church/events">Events</NavLink>
          <NavLink to="/church/givings">Givings</NavLink>
          <NavLink to="/church/employees">Employees</NavLink>
          <NavLink to="/church/profile">Profile</NavLink>
        </nav>
        <div className="sidebar-logout">
  <button className="logout-btn" onClick={handleLogout}>
    Logout
  </button>
</div>

      </aside>

      {/* MAIN */}
      <div className="church-main">

        <div className="church-topbar">
          <h3>Welcome, {church.name} </h3>
          
        </div>

        <div className="church-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default ChurchLayout;
