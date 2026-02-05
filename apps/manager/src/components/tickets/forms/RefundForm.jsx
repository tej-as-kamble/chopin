import { useState } from 'react'
import './forms.css';
import { CenteredFormWrapper } from '@chopin/ui-web';

const RefundForm = ({ onClose, onConfirm }) => {
    const [formData, setFormData] = useState({
        reason: '',
        reasonDetails: '',
        confirmed: false
    });

    const reasonOptions = [
        {
            id: 1,
            value: "",
            label: "Select reason..."
        },
        {
            id: 2,
            value: "Missing item",
            label: "Missing item"
        },
        {
            id: 3,
            value: "Wrong item",
            label: "Wrong item"
        },
        {
            id: 4,
            value: "Damaged item",
            label: "Damaged item"
        },
        {
            id: 5,
            value: "Late delivery",
            label: "Late delivery"
        },
        {
            id: 6,
            value: "Customer request",
            label: "Customer request"
        },
        {
            id: 6,
            value: "Duplicate charge",
            label: "Duplicate charge"
        },
        {
            id: 7,
            value: "Other",
            label: "Other"
        },
    ]

    return (
        <CenteredFormWrapper
            title="Approve Refund"
            confirmText="Confirm Approval"
            onClose={onClose}
            isValid={((formData.reason != "Other" && formData.reason.length > 0) || (formData.reason === "Other" && formData.reasonDetails.length > 0))
                && formData.confirmed}
            onConfirm={() => onConfirm(formData.reason === "Other" ? formData.reasonDetails : formData.reason)}
        >
            <div className="ticket-form-group">
                <label className="ticket-form-label">Refund Reason</label>
                <select
                    required
                    className="ticket-form-select"
                    value={formData.reason}
                    onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                >
                    {reasonOptions.map((option) => {
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
                <label className="ticket-checkbox-option">
                    <input type="checkbox" required checked={formData.confirmed} onChange={(e) => setFormData({ ...formData, confirmed: e.target.checked })} />
                    I confirm this action (logged in audit).
                </label>
            </div>
        </CenteredFormWrapper>
    );
};

export default RefundForm
