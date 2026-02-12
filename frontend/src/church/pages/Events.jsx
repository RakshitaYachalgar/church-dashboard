import { useState } from "react";
import { eventsData } from "../data/churchData";

function Events() {
  const [events, setEvents] = useState(eventsData);
  const [filter, setFilter] = useState("UPCOMING");

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [editingId, setEditingId] = useState(null);

  const today = new Date().toISOString().split("T")[0];

  const filteredEvents = events.filter((e) =>
    filter === "UPCOMING" ? e.date >= today : e.date < today
  );

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const resetForm = () => {
    setTitle("");
    setDate("");
    setLocation("");
    setDescription("");
    setImage(null);
    setPreview(null);
    setEditingId(null);
  };

  const addOrUpdateEvent = () => {
    if (!title || !date || !location || !description || !image) {
      alert("Please fill all fields and upload an image");
      return;
    }

    if (editingId) {
      const updated = events.map((e) =>
        e.id === editingId
          ? { ...e, title, date, location, description, image }
          : e
      );
      setEvents(updated);
    } else {
      const newEvent = {
        id: Date.now(),
        title,
        date,
        location,
        description,
        image
      };
      eventsData.push(newEvent);
      setEvents([...events, newEvent]);
    }

    resetForm();
  };

  const handleEdit = (event) => {
    setEditingId(event.id);
    setTitle(event.title);
    setDate(event.date);
    setLocation(event.location);
    setDescription(event.description);
    setImage(event.image);
    setPreview(event.image);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = (id) => {
    if (!window.confirm("Delete this event?")) return;
    setEvents(events.filter((e) => e.id !== id));
  };

  return (
    <div className="events-page">

      <h1 className="page-title">Events Management</h1>

      {/* CREATE / EDIT */}
      <div className="dashboard-card event-form-card">
        <h3>{editingId ? "Edit Event" : "Create New Event"}</h3>

        <input className="input-box" placeholder="Event title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input className="input-box" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        <input className="input-box" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} />

        <textarea className="input-box" rows="3" placeholder="Event description" value={description} onChange={(e) => setDescription(e.target.value)} />

        <label className="event-upload">
          Upload Event Photo
          <input type="file" hidden accept="image/*" onChange={handleImageUpload} />
        </label>

        {preview && <img src={preview} alt="preview" className="event-preview" />}

        <div style={{ display: "flex", gap: "10px" }}>
          <button className="primary-btn" onClick={addOrUpdateEvent}>
            {editingId ? "Update Event" : "Add Event"}
          </button>
          {editingId && <button className="reject-btn" onClick={resetForm}>Cancel</button>}
        </div>
      </div>

      {/* FILTER BAR */}
      <div className="event-filter-bar">
        <button className={filter === "UPCOMING" ? "active" : ""} onClick={() => setFilter("UPCOMING")}>
          Upcoming Events
        </button>
        <button className={filter === "PAST" ? "active" : ""} onClick={() => setFilter("PAST")}>
          Past Events
        </button>
      </div>

      {/* EVENTS LIST */}
      <div className="events-grid">
        {filteredEvents.length === 0 && (
          <p style={{ opacity: 0.6 }}>No events found.</p>
        )}

        {filteredEvents.map((e) => (
          <div key={e.id} className="event-row-card">

            <img src={e.image} alt={e.title} className="event-row-img" />

            <div className="event-row-content">
              <h4>{e.title}</h4>
              <p className="event-date">{e.date} • {e.location}</p>
              <p className="event-desc">{e.description}</p>

              <div className="event-actions">
                <button className="approve-btn" onClick={() => handleEdit(e)}>Edit</button>
                <button className="reject-btn" onClick={() => handleDelete(e.id)}>Delete</button>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;
