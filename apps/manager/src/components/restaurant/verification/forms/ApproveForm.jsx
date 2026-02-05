import './forms.css';
import { CenteredFormWrapper } from "@chopin/ui-web";
import { useState } from "react";


const ApproveForm = ({ onClose, onConfirm }) => {
    const [remarks, setRemarks] = useState('');
    const [confirmed, setConfirmed] = useState(false);

    return (
        <CenteredFormWrapper
            title="Approve Verification"
            confirmText="Confirm Approval"
            isValid={confirmed && remarks.length > 0}
            onClose={onClose}
            onConfirm={() => onConfirm(remarks)}
        >
            <div className="verification-form-group">
                <label className="verification-form-label">Approval scope</label>
                <div className="verification-radio-group">
                    <label className="verification-radio-option">
                        <input type="radio" checked readOnly />
                        Approve all documents
                    </label>
                </div>
            </div>
            <div className="verification-form-group">
                <label className="verification-form-label">Remarks</label>
                <input
                    type="text"
                    className="verification-form-input"
                    placeholder="Add remarks for audit"
                    value={remarks}
                    onChange={(e) => setRemarks(e.target.value)}
                />
            </div>

            <div className="verification-form-group">
                <label className="verification-checkbox-option">
                    <input type="checkbox" checked={confirmed} onChange={() => setConfirmed((prev) => !prev)} />
                    I confirm this action (logged in audit).
                </label>
            </div>
        </CenteredFormWrapper>
    );
};

export default ApproveForm
