import './forms.css';
import { useState } from 'react'
import { CenteredFormWrapper } from '@chopin/ui-web';

const WarningForm = ({ onClose, onConfirm }) => {
    const [formData, setFormData] = useState({
        reason: '',
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
            id: 3,
            value: "Too Much Delay Occuring",
            label: "Too Much Delay Occuring"
        },
        {
            id: 5,
            value: "Too Many Complaints",
            label: "Too Many Complaints"
        },
        {
            id: 4,
            value: "Rating Decreasing",
            label: "Rating Decreasing"
        },
        {
            id: 6,
            value: "Other",
            label: "Other"
        },
    ]

    return (
        <CenteredFormWrapper
            title="Send Warning"
            confirmText="Pause Now"
            isValid={
                ((formData.reason != "Other" && formData.reason.length > 0) || (formData.reason === "Other" && formData.reasonDetails.length > 0))
                && formData.confirmed
            }
            onClose={onClose}
            onConfirm={() => onConfirm(formData.reason === "Other" ? formData.reasonDetails : formData.reason)}
        >
            <div className="part-details-form-group">
                <label className="part-details-form-label">Warning Reason<span className="part-details-error-text">*</span></label>
                <select
                    className="part-details-form-select"
                    required
                    value={formData.reason}
                    onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                >
                    {warningOptions.map((option) => {
                        return (
                            <option key={option.id} value={option.value}>{option.label}</option>
                        )
                    })}
                </select>
                {formData.reason === 'Other' && (
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


export default WarningForm
