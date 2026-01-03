import React, { useState } from "react";
import "./BankDetailsForm.css";

const BankDetailsForm = ({ initialData, onCancel, onSave }) => {
  const [form, setForm] = useState({
    holderName: initialData.holderName || "",
    bankName: initialData.bankName || "",
    accountNumber: "",
    ifsc: initialData.ifsc || "",
    branch: initialData.branch || "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <form className="bd-form" onSubmit={(e) => {
      e.preventDefault();
      onSave(form);
    }}>
      <div className="bd-grid">
        <input name="holderName" placeholder="Account Holder Name" value={form.holderName} onChange={handleChange} required />
        <input name="bankName" placeholder="Bank Name" value={form.bankName} onChange={handleChange} required />
        <input name="accountNumber" placeholder="Account Number" value={form.accountNumber} onChange={handleChange} required />
        <input name="ifsc" placeholder="IFSC Code" value={form.ifsc} onChange={handleChange} required />
        <input name="branch" placeholder="Branch (optional)" value={form.branch} onChange={handleChange} />
      </div>

      <p className="bd-helper">
        Bank details are used only for payouts.
      </p>

      <div className="bd-actions">
        <button type="submit" className="bd-save">Save Changes</button>
        <button type="button" className="bd-cancel" onClick={onCancel}>Cancel</button>
      </div>
    </form>
  );
};

export default BankDetailsForm;
