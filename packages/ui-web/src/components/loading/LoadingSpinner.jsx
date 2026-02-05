import './LoadingSpinner.css'

const LoadingSpinner = ({ msg = "Loading" }) => {
    return (
        <div className="loading-spinner-container">
            <div className="loading-spinner"></div>
            <p>{msg}</p>
        </div>
    )
}

export default LoadingSpinner;
