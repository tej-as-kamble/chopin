import { useState } from "react";
import "./CreateOfferModal.css";

const SUGGESTED_OFFERS = [
  { label: "20% OFF upto ₹100", type: "PERCENT", value: 20, cap: 100, minOrder: 299 },
  { label: "15% OFF Weekdays", type: "PERCENT", value: 15, cap: 120, minOrder: 399 },
  { label: "₹80 OFF on ₹299+", type: "FLAT", value: 80, cap: 80, minOrder: 299 },
  { label: "15% OFF Weekdays", type: "PERCENT", value: 15, cap: 120, minOrder: 399 },
];

const CreateOfferModal = ({ onClose, onCreate }) => {
  const [form, setForm] = useState({
    type: "PERCENT",
    value: "",
    minOrder: "",
    cap: "",
  });

  const fillFromSuggestion = (s) => {
    setForm({
      type: s.type,
      value: s.value,
      minOrder: s.minOrder,
      cap: s.cap,
    });
  };

  const handleCreate = () => {
    if (!form.value || !form.minOrder) return;
    onCreate({ ...form, validDays: "All days" });
    onClose();
  };

  return (
    <div className="offer-modal-backdrop" onClick={onClose}>
      <div className="offer-modal" onClick={(e) => e.stopPropagation()}>
        <h3>Create New Discount</h3>

        <div className="suggested-section">
          <p className="section-title">Suggested Discounts</p>

          <div className="suggested-grid">
            {SUGGESTED_OFFERS.map((s) => (
              <button
                key={s.label}
                className="suggested-chip"
                onClick={() => fillFromSuggestion(s)}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        <p className="section-title">Create Coustom Discounts</p>
        <div className="form-grid">
          <select
            value={form.type}
            onChange={(e) => setForm({ ...form, type: e.target.value })}
          >
            <option value="PERCENT">Percentage (%)</option>
            <option value="FLAT">Flat (₹)</option>
          </select>

          <input
            placeholder="Discount value"
            value={form.value}
            onChange={(e) => setForm({ ...form, value: e.target.value })}
          />

          <input
            placeholder="Minimum order value"
            value={form.minOrder}
            onChange={(e) => setForm({ ...form, minOrder: e.target.value })}
          />

          <input
            placeholder="Maximum discount cap"
            value={form.cap}
            onChange={(e) => setForm({ ...form, cap: e.target.value })}
          />
        </div>

        <div className="soft-warning">
          High discounts may reduce margins
        </div>

        <div className="offer-actions">
          <button onClick={onClose}>Cancel</button>
          <button className="primary" onClick={handleCreate}>
            Create Offer
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateOfferModal;
