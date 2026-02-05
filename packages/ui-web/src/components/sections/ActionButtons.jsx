import './ActionButtons.css'
import Header from './SectionHeader';

const ActionButtons = ({ heading = "Actions", icon, data = [] }) => {
    return (
        <div className='ui-actionbtn-wrapper'>
            <Header heading={heading} icon={icon} />
            <div className="ui-actionbtn-group">
                {data.map((item, index) => (
                    <button key={index} className={`ui-actionbtn-btn ui-actionbtn-btn-${item.id}`} onClick={item.action}>
                        {item.icon} {item.text}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default ActionButtons;
