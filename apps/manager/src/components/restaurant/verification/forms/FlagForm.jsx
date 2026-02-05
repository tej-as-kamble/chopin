import './forms.css';
import { useState } from "react";
import { CenteredFormWrapper } from "@chopin/ui-web";

const FlagForm = ({ onClose, onConfirm }) => {
    const [formData, setFormData] = useState({
        flagType: '',
        reasonDetails: '',
        confirmed: false
    });

    const warningOptions = [
        {
            id: 1,
            value: "",
            label: "Select reason..."
        },
        {
            id: 2,
            value: "Fraud",
            label: "Mark as Fraud"
        },
        {
            id: 3,
            value: "Duplicate",
            label: "Mark as Duplicate"
        },
        {
            id: 4,
            value: "Other",
            label: "Other"
        },
    ]

    return (
        <CenteredFormWrapper
            title="Flag as Suspicious"
            onClose={onClose}
            confirmText="Flag Entity"
            isDestructive={true}
            isValid={
                ((formData.flagType != "Other" && formData.flagType.length > 0) || (formData.flagType === "Other" && formData.reasonDetails.length > 0))
                && formData.confirmed
            }
            onConfirm={() => onConfirm(formData.flagType === "Other" ? formData.reasonDetails : formData.flagType )}
        >
            <div className="verification-form-group">
                <label className="verification-form-label">Flag Reason<span className="verification-error-text">*</span></label>
                <select
                    className="verification-form-select"
                    required
                    value={formData.flagType}
                    onChange={(e) => setFormData({ ...formData, flagType: e.target.value })}
                >
                    {warningOptions.map((option) => {
                        return (
                            <option key={option.id} value={option.value}>{option.label}</option>
                        )
                    })}
                </select>
                {formData.flagType === 'Other' && (
                    <input
                        type="text"
                        className="verification-form-input"
                        placeholder="Enter details..."
                        style={{ marginTop: '0.5rem' }}
                        required
                        onChange={(e) => setFormData({ ...formData, reasonDetails: e.target.value })}
                    />
                )}
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

export default FlagForm
