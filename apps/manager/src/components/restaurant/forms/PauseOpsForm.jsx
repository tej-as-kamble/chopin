import './forms.css';
import { useState } from 'react'
import { CenteredFormWrapper } from '@chopin/ui-web';

const PauseOpsForm = ({ onClose, onConfirm }) => {
    const [formData, setFormData] = useState({
        reason: '',
        reasonDetails: '',
        message: '',
        confirmed: false
    });

    const pauseOptions = [
        {
            id: 1,
            value: "",
            label: "Select reason..."
        },
        {
            id: 2,
            value: "Restaurant Not Responding",
            label: "Restaurant Not Responding"
        },
        {
            id: 3,
            value: "Restaurant Requested",
            label: "Restaurant Requested"
        },
        {
            id: 4,
            value: "Fire Ingines at Restaurant",
            label: "Fire Ingines at Restaurant"
        },
        {
            id: 5,
            value: "High Alert in City",
            label: "High Alert in City"
        },
        {
            id: 6,
            value: "Other",
            label: "Other"
        },
    ]

    return (
        <CenteredFormWrapper
            title="Pause Operation"
            confirmText="Pause Now"
            isValid={
                ((formData.reason != "Other" && formData.reason.length > 0) || (formData.reason === "Other" && formData.reasonDetails.length > 0))
                && formData.confirmed
            }
            onClose={onClose}
            onConfirm={() => onConfirm(formData.reason === "Other" ? formData.reasonDetails : formData.reason)}
        >
            <div className="rest-details-form-group">
                <label className="rest-details-form-label">Pause reason <span className="rest-details-error-text">*</span></label>
                <select
                    className="rest-details-form-select"
                    required
                    value={formData.reason}
                    onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                >
                    {pauseOptions.map((option) => {
                        return (
                            <option key={option.id} value={option.value}>{option.label}</option>
                        )
                    })}
                </select>
                {formData.reason === 'Other' && (
                    <input
                        type="text"
                        className="rest-details-form-input"
                        placeholder="Enter details..."
                        style={{ marginTop: '0.5rem' }}
                        onChange={(e) => setFormData({ ...formData, reasonDetails: e.target.value })}
                    />
                )}
            </div>

            <div className="rest-details-form-group">
                <label className="rest-details-form-label">Customer-facing message (Optional)</label>
                <input
                    type="text"
                    className="rest-details-form-input"
                    maxLength={120}
                    placeholder="e.g. 'Back soon due to high alert in city'"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
            </div>

            <div className="rest-details-form-group">
                <label className="rest-details-checkbox-option">
                    <input type="checkbox" required checked={formData.confirmed} onChange={(e) => setFormData({ ...formData, confirmed: e.target.checked })} />
                    I confirm this action (logged in audit).
                </label>
            </div>
        </CenteredFormWrapper>
    );
};

export default PauseOpsForm
