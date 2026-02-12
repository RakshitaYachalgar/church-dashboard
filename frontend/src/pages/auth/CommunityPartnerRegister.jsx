import { useState } from "react";
import "../../styles/communityPartner.css";
import registerImg from "../../assets/church.png"; // use same image

export default function CommunityPartnerRegister() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [successOpen, setSuccessOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const form = e.target;

    const payload = {
      full_name: form.full_name.value.trim(),
      mobile: form.mobile.value.trim(),
      email: form.email.value.trim(),
      city: form.city.value.trim(),
      state: form.state.value.trim(),
      country: form.country.value.trim(),
      experience: form.experience.value.trim(),
      preferred_aoo: {
        area: form.preferred_aoo_area.value.trim(),
      },
    };

    try {
      const res = await fetch("/api/cp/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setMessage(data.message || "Registration failed.");
        return;
      }

      form.reset();
      setSuccessOpen(true);
    } catch {
      setMessage("Server connection failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="cp-container">
      {/* LEFT FORM */}
      <div className="cp-left">
        <h1>Enter Basic Information</h1>
        <p>
          Join our network of community partners. Fill in your details to
          proceed.
        </p>

        <form onSubmit={handleSubmit} className="cp-form">
          <input name="full_name" placeholder="Full Name" required />
          <input name="mobile" placeholder="Mobile Number" required />
          <input name="email" type="email" placeholder="Email Address" required />
          <input name="city" placeholder="City" />
          <input name="state" placeholder="State / Province" />
          <input name="country" placeholder="Country" />
          <input name="experience" placeholder="Years of Experience" />
          <input
            name="preferred_aoo_area"
            placeholder="Preferred Area of Operation"
          />

          <button type="submit" disabled={loading}>
            {loading ? "Processing..." : "Register"}
          </button>
        </form>

        {message && <div className="error-msg">{message}</div>}
      </div>

      {/* RIGHT IMAGE */}
      <div className="cp-right">
        <img src={registerImg} alt="Church" />
      </div>

      {/* SUCCESS MODAL */}
      {successOpen && (
        <div className="cp-modal">
          <div className="cp-modal-card">
            <div className="check">✓</div>
            <h2>Application Sent</h2>
            <p>
              Registration completed successfully. Please wait for admin approval.
            </p>
            <button onClick={() => setSuccessOpen(false)}>Got it</button>
          </div>
        </div>
      )}
    </div>
  );
}