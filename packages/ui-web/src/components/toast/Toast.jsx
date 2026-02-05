import './Toast.css';

const Toast = ({ msg = "No messege attached", pos = "bottom-mid" }) => {
    return (
        <div className={`ui-toast ui-${pos}`}> {msg}</div>
    )
}

export default Toast
