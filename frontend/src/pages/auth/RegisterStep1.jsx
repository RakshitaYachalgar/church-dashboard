import { useState } from "react"
import { useNavigate } from "react-router-dom"
import church from "../../assets/church.png"
import "../../styles/Register.css";

export default function RegisterStep1() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    churchCode: ""
  })

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleNext() {
    localStorage.setItem("step1Data", JSON.stringify(form))
    navigate("/RegisterStep2")
  }

  return (
    <div className="auth-container">
      <div className="form-section">
        <h2>Enter Basic Information</h2>
        <p>Please provide your church’s basic information to proceed.</p>

        <input name="name" placeholder="Your full name" onChange={handleChange} />
        <input name="email" placeholder="Email" onChange={handleChange} />
        <input name="phone" placeholder="Contact number" onChange={handleChange} />
        <input name="churchCode" placeholder="Church Code" onChange={handleChange} />

        <button onClick={handleNext}>Next</button>
        <p className="switch">
  Already have an account?{" "}
  <span onClick={() => navigate("/login")}>Login</span>
</p>

        <div className="divider">or</div>
        <button className="google-btn">Continue with Google</button>
      </div>

      <div className="image-section church-style">
  <img src={church} alt="church" />
</div>

    </div>
  )
}
