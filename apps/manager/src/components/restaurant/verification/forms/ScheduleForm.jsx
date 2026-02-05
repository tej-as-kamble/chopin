import { CenteredFormWrapper } from '@chopin/ui-web';
import { useState } from 'react'

const ScheduleForm = ({ onClose, onConfirm }) => {

    const [formData, setFormData] = useState({
        visitDate: '',
        timeWindow: '',
        verifier: '',
    });

    return (
        <CenteredFormWrapper
            title="Schedule Physical Verification"
            confirmText="Schedule Visit"
            isValid={formData.visitDate.length > 0 && formData.timeWindow.length > 0 && formData.verifier.length > 0}
            onClose={onClose}
            onConfirm={() => onConfirm(`Visit scheduled on ${formData.visitDate} in ${formData.timeWindow}`)}
        >
            <div className="verification-form-group">
                <label className="verification-form-label">Visit date</label>
                <input
                    type="date"
                    name="visitDate"
                    required
                    className="verification-form-input"
                    value={formData.visitDate}
                    onChange={(e) => setFormData({ ...formData, visitDate: e.target.value })}
                    min={new Date().toISOString().split("T")[0]}
                />
            </div>

            <div className="verification-form-group">
                <label className="verification-form-label">Time window</label>
                <select
                    name="timeWindow"
                    required
                    className="verification-form-select"
                    value={formData.timeWindow}
                    onChange={(e) => setFormData({ ...formData, timeWindow: e.target.value })}
                >
                    <option value="">Select a time window</option>
                    <option value="morning (9-12)">Morning (9–12)</option>
                    <option value="afternoon (12–4)">Afternoon (12–4)</option>
                    <option value="evening (4–7)">Evening (4–7)</option>
                </select>
            </div>

            <div className="verification-form-group">
                <label className="verification-form-label">Verifier or team</label>
                <input
                    type="text"
                    name="verifier"
                    required
                    className="verification-form-input"
                    placeholder="Enter verifier name or team"
                    value={formData.verifier}
                    onChange={(e) => setFormData({ ...formData, verifier: e.target.value })}
                />
            </div>
        </CenteredFormWrapper>
    );
};

export default ScheduleForm
