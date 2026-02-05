import './SectionHeader.css';
import { FaRegFaceGrinBeam } from "react-icons/fa6";

const SectionHeader = ({ heading, icon = <FaRegFaceGrinBeam /> }) => {
    return (
        <div className="ui-section-header">
            {icon}{heading}
        </div>
    )
}

export default SectionHeader
