import './PulseCircle.css'

const PulseCircle = ({ color = "yellow" }) => {
    //green, red, blue, yellow, purple
    return (
        <div className={`${color}-pulse-circle ui-pulse-circle`}></div>
    )
}

export default PulseCircle
