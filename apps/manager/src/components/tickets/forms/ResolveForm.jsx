import { useState } from "react";
import './forms.css';
import { CenteredFormWrapper } from "@chopin/ui-web";


const ResolveForm = ({ onClose, onConfirm }) => {
    const [formData, setFormData] = useState({
        reason: '',
        reasonDetails: '',
        remarks: '',
        confirmed: false
    });

    const resolveOptions = [
        {
            id: 1,
            value: "",
            label: "Select reason..."
        },
        {
            id: 2,
            value: "No Refund",
            label: "No Refund"
        },
        {
            id: 3,
            value: "Refund Issued",
            label: "Refund Issued"
        },
        {
            id: 4,
            value: "Customer Cancelled",
            label: "Customer Cancelled"
        },
        {
            id: 5,
            value: "Other",
            label: "Other"
        },
    ]


    return (
        <CenteredFormWrapper
            title="Mark as Resolve"
            confirmText="Confirm"
            isValid={((formData.reason != "Other" && formData.reason.length > 0) || (formData.reason === "Other" && formData.reasonDetails.length > 0))
                && formData.confirmed}
            onClose={onClose}
            onConfirm={() => onConfirm(formData.reason === "Other" ? formData.reasonDetails : formData.reason)}
        >
            <div className="ticket-form-group">
                <label className="ticket-form-label">Resolution type</label>
                <select
                    required
                    className="ticket-form-select"
                    value={formData.reason}
                    onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                >
                    {resolveOptions.map((option) => {
                        return (
                            <option key={option.id} value={option.value}>{option.label}</option>
                        )
                    })}
                </select>
                {formData.reason === 'Other' && (
                    <input
                        type="text"
                        className="ticket-form-input"
                        placeholder="Enter details..."
                        style={{ marginTop: '0.5rem' }}
                        onChange={(e) => setFormData({ ...formData, reasonDetails: e.target.value })}
                    />
                )}
            </div>

            <div className="ticket-form-group">
                <label className="ticket-form-label">Remarks</label>
                <input
                    type="text"
                    className="ticket-form-input"
                    placeholder="Explain why this is rejected"
                    value={formData.remarks}
                    onChange={(e) => setFormData({ ...formData, remarks: e.target.value })}
                />
            </div>

            <div className="ticket-form-group">
                <label className="ticket-checkbox-option">
                    <input type="checkbox" required checked={formData.confirmed} onChange={(e) => setFormData({ ...formData, confirmed: e.target.checked })} />
                    I confirm this action (logged in audit).
                </label>
            </div>
        </CenteredFormWrapper>
    );
};

export default ResolveForm
