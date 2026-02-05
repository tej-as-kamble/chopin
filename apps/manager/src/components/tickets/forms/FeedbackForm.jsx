import { useState } from 'react'
import './forms.css';
import { CenteredFormWrapper } from '@chopin/ui-web';

const FeedbackForm = ({ onClose, onConfirm }) => {
    const [formData, setFormData] = useState({
        category: '',
        categoryDetails: '',
        explanation: '',
    });

    const resolveOptions = [
        {
            id: 1,
            value: "",
            label: "Select Category..."
        },
        {
            id: 2,
            value: "Policy issue",
            label: "Policy issue"
        },
        {
            id: 3,
            value: "Payment / Billing",
            label: "Payment / Billing"
        },
        {
            id: 4,
            value: "Delivery problem",
            label: "Delivery problem"
        },
        {
            id: 6,
            value: "Fraud / Suspicious",
            label: "Fraud / Suspicious"
        },
        {
            id: 5,
            value: "Other",
            label: "Other"
        },
    ]

    return (
        <CenteredFormWrapper
            title="Feedback for Admin"
            confirmText="Send Feedback"
            isValid={((formData.category != "Other" && formData.category.length > 0) || (formData.category === "Other" && formData.categoryDetails.length > 0))
                && formData.explanation.length > 0}
            onClose={onClose}
            onConfirm={() => onConfirm(formData.category === "Other" ? formData.categoryDetails : formData.category)}
        >
            <div className="ticket-form-group">
                <label className="ticket-form-label">Category</label>
                <select
                    required
                    className="ticket-form-select"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                >
                    {resolveOptions.map((option) => {
                        return (
                            <option key={option.id} value={option.value}>{option.label}</option>
                        )
                    })}
                </select>
                {formData.category === 'Other' && (
                    <input
                        type="text"
                        className="ticket-form-input"
                        placeholder="Enter details..."
                        style={{ marginTop: '0.5rem' }}
                        onChange={(e) => setFormData({ ...formData, categoryDetails: e.target.value })}
                    />
                )}
            </div>

            <div className="ticket-form-group">
                <label className="ticket-form-label">Detailed explanation</label>
                <textarea
                    name="remarks"
                    className="ticket-form-textarea"
                    placeholder="Type your explanation here..."
                    value={formData.remarks}
                    onChange={(e) => setFormData({ ...formData, explanation: e.target.value })}
                />
            </div>
        </CenteredFormWrapper>
    );
};

export default FeedbackForm
