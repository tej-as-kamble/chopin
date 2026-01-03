import { useState } from "react";
import "./AddSlotModal.css";

const generateTimes = (start, end) => {
  const times = [];
  let [h, m] = start.split(":").map(Number);
  const [eh, em] = end.split(":").map(Number);

  while (h < eh || (h === eh && m <= em)) {
    const label = `${((h + 11) % 12) + 1}:${m
      .toString()
      .padStart(2, "0")} ${h >= 12 ? "PM" : "AM"}`;
    const value = `${h.toString().padStart(2, "0")}:${m
      .toString()
      .padStart(2, "0")}`;

    times.push({ label, value });

    m += 15;
    if (m === 60) {
      h++;
      m = 0;
    }
  }
  return times;
};

const AddSlotModal = ({ boundary, existingSlots, onAdd, onClose }) => {
  const times = generateTimes(boundary.start, boundary.end);

  const [label, setLabel] = useState("");
  const [start, setStart] = useState(boundary.start);
  const [end, setEnd] = useState(boundary.end);
  const [error, setError] = useState("");

  const validate = () => {
    if (start >= end) return "Start time must be before end time";

    for (const s of existingSlots) {
      if (!(end <= s.start || start >= s.end)) {
        return `Overlaps with ${s.start} – ${s.end}`;
      }
    }
    return "";
  };

  const handleAdd = () => {
    const err = validate();
    if (err) return setError(err);

    onAdd({ label, start, end });
    onClose();
  };

  return (
    <div className="asm-backdrop" onClick={onClose}>
      <div className="asm-card" onClick={(e) => e.stopPropagation()}>
        <h3>Add Time Slot</h3>

        <div className="asm-field">
          <label>Slot name (optional)</label>
          <input
            type="text"
            placeholder="Lunch / Dinner"
            value={label}
            onChange={(e) => setLabel(e.target.value)}
          />
        </div>

        <div className="asm-row">
          <div className="asm-field">
            <label>Start time</label>
            <select value={start} onChange={(e) => setStart(e.target.value)}>
              {times.map((t) => (
                <option key={t.value} value={t.value}>
                  {t.label}
                </option>
              ))}
            </select>
          </div>

          <div className="asm-field">
            <label>End time</label>
            <select value={end} onChange={(e) => setEnd(e.target.value)}>
              {times.map((t) => (
                <option key={t.value} value={t.value}>
                  {t.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <p className="asm-info">
          Allowed window: {boundary.start} – {boundary.end}
        </p>

        {error && <p className="asm-error">{error}</p>}

        <div className="asm-actions">
          <button className="btn-ghost" onClick={onClose}>
            Cancel
          </button>
          <button className="btn-primary" onClick={handleAdd}>
            Add Slot
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddSlotModal;
