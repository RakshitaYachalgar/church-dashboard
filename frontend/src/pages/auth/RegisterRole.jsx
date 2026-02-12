import { useNavigate } from "react-router-dom"
import church from "../../assets/church.png"
import "../../styles/Register.css";


export default function RegisterRole() {
  const navigate = useNavigate()

  return (
    <div className="auth-container">

      {/* LEFT */}
      <div className="form-section role-box">
        <h2>Register</h2>
        <p>Please choose how you want to register</p>

        <div className="role-card" onClick={() => navigate("/church-register")}>
          🏛 <div>
            <h4>Register as Church</h4>
            <p>Create and manage a church profile</p>
          </div>
        </div>

        <div className="role-card" onClick={() => navigate("/RegisterStep1")}>
          👤 <div>
            <h4>Register as Follower</h4>
            <p>Join a church and access services</p>
          </div>
        </div>
         
        

        <p className="switch">
          Already have an account?{" "}
          <span onClick={() => navigate("/login")}>Login</span>
        </p>
      </div>

      {/* RIGHT */}
      <div className="image-section church-style">
        <img src={church} alt="church" />
      </div>

    </div>
  )
}
