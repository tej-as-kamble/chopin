import './forms.css';
import { useState } from 'react'
import { CenteredFormWrapper } from '@chopin/ui-web';

const RejectForm = ({ onClose, onConfirm }) => {
    const [formData, setFormData] = useState({
        reason: '',
        reasonDetails: '',
        explanation: '',
        confirmed: false
    });

    const rejectOptions = [
        {
            id: 1,
            value: "",
            label: "Select reason..."
        },
        {
            id: 2,
            value: "Invalid documents",
            label: "Invalid documents"
        },
        {
            id: 3,
            value: "Details mismatch",
            label: "Details mismatch"
        },
        {
            id: 4,
            value: "Non-compliant",
            label: "Non-compliant"
        },
        {
            id: 5,
            value: "Other",
            label: "Other"
        },
    ]

    return (
        <CenteredFormWrapper
            title="Reject Verification"
            onClose={onClose}
            confirmText="Reject Entity"
            isDestructive={true}
            isValid={((formData.reason != "Other" && formData.reason.length > 0) || (formData.reason === "Other" && formData.reasonDetails.length > 0))
                && formData.confirmed}
            onConfirm={() => onConfirm(formData.reason === "Other" ? formData.reasonDetails : formData.reason)}
        >
            <div className="verification-form-group">
                <label className="verification-form-label">Rejection reason</label>
                <select
                    required
                    className="verification-form-select"
                    value={formData.reason}
                    onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                >
                    {rejectOptions.map((option) => {
                        return (
                            <option key={option.id} value={option.value}>{option.label}</option>
                        )
                    })}
                </select>
                {formData.reason === 'Other' && (
                    <input
                        type="text"
                        className="verification-form-input"
                        placeholder="Enter details..."
                        style={{ marginTop: '0.5rem' }}
                        onChange={(e) => setFormData({ ...formData, reasonDetails: e.target.value })}
                    />
                )}
            </div>

            <div className="verification-form-group">
                <label className="verification-form-label">Detailed explanation</label>
                <input
                    type="text"
                    className="verification-form-input"
                    placeholder="Explain why this is rejected"
                    value={formData.explanation}
                    onChange={(e) => setFormData({ ...formData, explanation: e.target.value })}
                />
            </div>

            <div className="verification-form-group">
                <label className="verification-checkbox-option">
                    <input type="checkbox" required checked={formData.confirmed} onChange={(e) => setFormData({ ...formData, confirmed: e.target.checked })} />
                    I confirm this action (logged in audit).
                </label>
            </div>
        </CenteredFormWrapper>
    );
};

export default RejectForm
