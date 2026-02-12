import { useState } from "react";
import { churchProfileData } from "../data/churchProfile";


function Profile() {
  const [profile, setProfile] = useState(churchProfileData);
  const [preview, setPreview] = useState(profile.logo);

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
      setProfile({ ...profile, logo: reader.result });
    };
    reader.readAsDataURL(file);
  };

 const handleSave = () => {
  localStorage.setItem("churchProfile", JSON.stringify(profile));
  alert("Church profile saved successfully ✅");
};

  

  return (
    <div>
      <h1 className="page-title">Church Profile</h1>

      <div className="dashboard-card profile-card">

        {/* LEFT - LOGO */}
        <div className="profile-header">
          <div className="logo-box">
            {preview ? (
              <img src={preview} alt="Church Logo" />
            ) : (
              <div className="logo-placeholder">LOGO</div>
            )}
          </div>

          <label className="upload-btn">
            Upload Logo
            <input
              type="file"
              hidden
              accept="image/*"
              onChange={handleLogoUpload}
            />
          </label>
        </div>

        {/* RIGHT - DETAILS */}
        <div className="profile-form">
          <label>Church Name</label>
          <input
            className="input-box"
            value={profile.name}
            onChange={(e) =>
              setProfile({ ...profile, name: e.target.value })
            }
          />

          <label>Email</label>
          <input
            className="input-box"
            value={profile.email}
            disabled
          />

          <label>Location</label>
          <input
            className="input-box"
            value={`${profile.city}, ${profile.state}, ${profile.country}`}
            disabled
          />

          <button
            className="primary-btn"
            style={{ marginTop: "15px" }}
            onClick={handleSave}
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
