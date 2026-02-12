import { useState } from "react"
import church from "../../assets/church.png"
import "../../styles/Register.css";

export default function RegisterStep2() {
  const [form, setForm] = useState({
    dob: "",
    address: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
    password: "",
    confirmPassword: ""
  })

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleRegister() {
    const step1 = JSON.parse(localStorage.getItem("step1Data"))
    const finalData = { ...step1, ...form }

    console.log("User Registered:", finalData)
    alert("Registered Successfully! Check console.")
  }

  return (
    <div className="auth-container">
      <div className="form-section">
        <h2>Fill out the details</h2>

        <input name="dob" placeholder="Date of Birth" onChange={handleChange} />
        <input name="address" placeholder="Address" onChange={handleChange} />

        <div className="row">
          <input name="city" placeholder="City" onChange={handleChange} />
          <input name="state" placeholder="State" onChange={handleChange} />
        </div>

        <div className="row">
          <input name="country" placeholder="Country" onChange={handleChange} />
          <input name="pincode" placeholder="Pincode" onChange={handleChange} />
        </div>

        <input type="password" name="password" placeholder="Password" onChange={handleChange} />
        <input type="password" name="confirmPassword" placeholder="Confirm password" onChange={handleChange} />

        <button onClick={handleRegister}>Register</button>

        <div className="divider">or</div>
        <button className="google-btn">Continue with Google</button>
      </div>

     <div className="image-section church-style">
  <img src={church} alt="church" />
</div>

    </div>
  )
}
