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
            value: "High Cancellation Rate",
            label: "High Cancellation Rate"
        },
        {
            id: 5,
            value: "Serious Complaints From Customers",
            label: "Serious Complaints From Customers"
        },
        {
            id: 4,
            value: "Serious Complaints From Restaurant",
            label: "Serious Complaints From Restaurant"
        },
        {
            id: 6,
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
            onConfirm={() => onConfirm(formData.flagType === "Other" ? formData.reasonDetails : formData.flagType)}
        >
            <div className="part-details-form-group">
                <label className="part-details-form-label">Flag Reason<span className="part-details-error-text">*</span></label>
                <select
                    className="part-details-form-select"
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
                        className="part-details-form-input"
                        placeholder="Enter details..."
                        style={{ marginTop: '0.5rem' }}
                        required
                        onChange={(e) => setFormData({ ...formData, reasonDetails: e.target.value })}
                    />
                )}
            </div>

            <div className="part-details-form-group">
                <label className="part-details-checkbox-option">
                    <input type="checkbox" required checked={formData.confirmed} onChange={(e) => setFormData({ ...formData, confirmed: e.target.checked })} />
                    I confirm this action.
                </label>
            </div>
        </CenteredFormWrapper>
    );
};

export default FlagForm
