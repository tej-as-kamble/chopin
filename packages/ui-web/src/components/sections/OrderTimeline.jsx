import './OrderTimeline.css'
import SectionHeader from './SectionHeader';
import { IoCheckmarkOutline } from "react-icons/io5";
import { MdOutlineAccessTime } from "react-icons/md";


const OrderTimeline = ({ heading = "Order Timeline", icon, data = [] }) => {

  return (
    <div className='ui-order-timeline-wrapper'>
      <SectionHeader heading={heading} icon={icon} />
      <div className='ui-order-timeline-container'>
        {data.map((step, index) => {

          let stateClass = '';
          if (step.status || step.isCompleted) stateClass = 'ui-order-timeline-step-active';
          if (step.isCompleted) stateClass = 'ui-order-timeline-step-completed';

          return (
            <div key={index} className={`ui-order-timeline-step ${stateClass}`}>
              <div className="ui-order-timeline-step-dot">
                {step.isCompleted ? (
                  <IoCheckmarkOutline />
                ) : (
                  step.status && <MdOutlineAccessTime />
                )}
              </div>
              <span className="ui-order-timeline-step-label">{step.label}</span>
              <span className="ui-order-timeline-step-time">{!step.isCompleted && <span>Est. </span>}{step.time}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default OrderTimeline
