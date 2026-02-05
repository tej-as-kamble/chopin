import './forms.css';
import { CenteredFormWrapper } from "@chopin/ui-web";
import { useState } from "react";

const ReuploadForm = ({ documents, onClose, onConfirm }) => {
    const [selectedDocs, setSelectedDocs] = useState([]);
    const [instructions, setInstructions] = useState('');
    const [confirmed, setConfirmed] = useState(false);

    const handleCheckbox = (doc) => {
        if (selectedDocs.includes(doc)) {
            setSelectedDocs(selectedDocs.filter(item => item !== doc));
        } else {
            setSelectedDocs([...selectedDocs, doc]);
        }
    };

    return (
        <CenteredFormWrapper
            title="Request Re-upload"
            onClose={onClose}
            confirmText="Send Request"
            isValid={confirmed && selectedDocs.length > 0 && instructions.length > 0}
            onConfirm={() => onConfirm("Docs requested")}
        >
            <div className="verification-form-group">
                <label className="verification-form-label">Documents to re-upload</label>
                <div className="verification-checkbox-group">
                    {documents.map(doc => (
                        <label key={doc.id} className="verification-checkbox-option">
                            <input
                                type="checkbox"
                                checked={selectedDocs.includes(doc.id)}
                                onChange={() => handleCheckbox(doc.id)}
                            />
                            {doc.type}
                        </label>
                    ))}
                </div>
            </div>

            <div className="verification-form-group">
                <label className="verification-form-label">Reason / instructions</label>
                <input
                    type="text"
                    className="verification-form-input"
                    placeholder="Explain what needs to be fixed"
                    value={instructions}
                    onChange={(e) => setInstructions(e.target.value)}
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

export default ReuploadForm
