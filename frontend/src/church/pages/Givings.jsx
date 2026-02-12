import { useState } from "react";
import { givingsData } from "../data/churchData";

function Givings() {
  const [givings, setGivings] = useState(givingsData);

  const [title, setTitle] = useState("");
  const [target, setTarget] = useState("");
  const [description, setDescription] = useState("");

  const addGiving = () => {
    if (!title || !target || !description) {
      alert("Please fill all fields");
      return;
    }

    const newGiving = {
      id: Date.now(),
      title,
      target,
      description
    };

    givingsData.push(newGiving);
    setGivings([...givings, newGiving]);

    setTitle("");
    setTarget("");
    setDescription("");
  };

  return (
    <div>
      <h1 className="page-title">Givings & Charities</h1>

      {/* Create Giving */}
      <div className="dashboard-card">
        <h3>Add New Giving Cause</h3>

        <input
          className="input-box"
          placeholder="Cause title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          className="input-box"
          type="number"
          placeholder="Target amount (₹)"
          value={target}
          onChange={(e) => setTarget(e.target.value)}
        />

        <textarea
          className="input-box"
          placeholder="Describe this cause"
          rows="3"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button className="primary-btn" onClick={addGiving}>
          Add Cause
        </button>
      </div>

      {/* List */}
      <h3 style={{ marginTop: "25px" }}>Active Giving Causes</h3>

      {givings.length === 0 && <p>No giving causes yet.</p>}

      {givings.map((g) => (
        <div key={g.id} className="dashboard-card">
          <p><strong>{g.title}</strong></p>
          <p>Target: ₹{g.target}</p>
          <p style={{ color: "gray" }}>{g.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Givings;
