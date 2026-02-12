import { useState } from "react";
import church from "../../assets/church.png";
import "../../styles/ChurchRegister.css";
import {api} from "../../api/api";
export default function ChurchRegistration() {

  const [formData, setFormData] = useState({
    code: "",
    name: "",
    email: "",
    address: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
    denomination: "",
    timezone: "Asia/Kolkata",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === "code" ? value.toUpperCase() : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {
      code,
      name,
      email,
      address,
      city,
      state,
      country,
      pincode,
      denomination,
      timezone,
    } = formData;

    if (!code || !name || !email) {
      alert("Church code, name and email are required");
      return;
    }

    try {
      setLoading(true);

      const payload = {
        chr_app_code: code,
        chr_app_name: name,
        chr_app_email: email.toLowerCase(),
        chr_app_denomination: denomination,
        chr_app_location: address,
        chr_app_timezone: timezone,
        chr_app_city: city,
        chr_app_state: state,
        chr_app_country: country,
        chr_app_pincode: pincode,
      };

      await api("/church/apply", {
        method: "POST",
        body: payload,
      });

      alert("Church application submitted for approval ✅");

    } catch (err) {
      alert(err.message || "Church registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="church-auth-container">

      <div className="church-form-section">
        <h2>Enter Basic Information</h2>
        <p>Please provide your church’s basic information to proceed.</p>

        <form className="church-form-wrapper" onSubmit={handleSubmit}>

          <input name="code" placeholder="Church Code" value={formData.code} onChange={handleChange} required />
          <input name="name" placeholder="Church Name" value={formData.name} onChange={handleChange} required />
          <input name="email" type="email" placeholder="Church Email" value={formData.email} onChange={handleChange} required />

          <input name="address" placeholder="Address" value={formData.address} onChange={handleChange} />
          <input name="city" placeholder="City" value={formData.city} onChange={handleChange} />
          <input name="state" placeholder="State" value={formData.state} onChange={handleChange} />
          <input name="country" placeholder="Country" value={formData.country} onChange={handleChange} />
          <input name="pincode" placeholder="Pincode" value={formData.pincode} onChange={handleChange} />
          <input name="denomination" placeholder="Denomination" value={formData.denomination} onChange={handleChange} />

          <select name="timezone" value={formData.timezone} onChange={handleChange}>
            <option value="Asia/Kolkata">Asia/Kolkata</option>
            <option value="UTC">UTC</option>
          </select>

          <button type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Register"}
          </button>

        </form>
      </div>

      <div className="church-image-section church-style">
        <img src={church} alt="church" />
      </div>

    </div>
  );
}
