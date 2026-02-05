import './Backbutton.css';
import { useNavigate } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';

const Backbutton = ({ text = "Back" }) => {
    const navigate = useNavigate();
    return (
        <button
            className="ui-back-btn"
            onClick={() => navigate(-1)}
        >
            <FiChevronLeft />
            {text}
        </button>
    )
}

export default Backbutton
