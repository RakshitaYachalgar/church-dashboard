import { useState } from "react"
import { useNavigate } from "react-router-dom"
import church from "../../assets/church.png"

export default function Login() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    username: "",
    password: ""
  })

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleLogin() {
    console.log("Login data:", form)
    alert("Login clicked! (check console)")
  }

  return (
    <div className="auth-container">

      {/* LEFT - FORM */}
      <div className="form-section">
        <h2>Login</h2>

        <input
          name="username"
          placeholder="Username"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />

        <p className="link">Forgot Password!</p>

        <button onClick={handleLogin}>Login</button>

        <p className="switch">
          Don’t have an account?{" "}
          <span onClick={() => navigate("/RegisterRole")}>Register</span>
        </p>

        <div className="divider">or</div>

        <button className="google-btn">Continue with Google</button>
      </div>

      {/* RIGHT - IMAGE */}
      <div className="image-section church-style">
        <img src={church} alt="church" />
      </div>

    </div>
  )
}
