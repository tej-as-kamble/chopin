import './CenteredFormWrapper.css';

const CenteredFormWrapper = ({ title, children, onClose, onConfirm, confirmText = "Submit", isDestructive, isValid = true }) => {
    return (
        <div className="ui-centered-form-overlay" role="dialog" aria-modal="true">
            <div className="ui-centered-form-content">
                <div className="ui-centered-form-header">{title}</div>
                <div className="ui-centered-form-body">{children}</div>
                <div className="ui-centered-form-actions">
                    <button className="ui-centered-form-btn" style={{ background: '#f3f4f6', color: '#374151' }} onClick={onClose}>Cancel</button>
                    <button
                        className="ui-centered-form-btn"
                        style={{ background: isDestructive ? '#dc2626' : '#16a34a', color: 'white', opacity: isValid ? 1 : 0.5, cursor: isValid ? 'pointer' : 'not-allowed' }}
                        onClick={isValid ? onConfirm : undefined}
                    >
                        {confirmText}
                    </button>
                </div>
            </div>
        </div>
    )
};

export default CenteredFormWrapper
