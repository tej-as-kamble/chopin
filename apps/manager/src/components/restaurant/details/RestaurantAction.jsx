import { ActionButtons } from '@chopin/ui-web';
import { RiShutDownLine } from "react-icons/ri";
import { FaHourglassHalf } from "react-icons/fa";
import { GrStatusWarning } from "react-icons/gr";
import { FiFlag } from 'react-icons/fi';

const RestaurantAction = ({ onOpenForm }) => {
    const btnList = [
        {
            id: 'urgent',
            text: "Pause Operations",
            icon: <RiShutDownLine />,
            action: () => onOpenForm('pause')
        },
        {
            id: 'reject',
            text: "Send Warning",
            icon: <GrStatusWarning />,
            action: () => onOpenForm('warning')
        },
        {
            id: 'flag',
            text: "Flag (Temporary)",
            icon: <FiFlag />,
            action: () => onOpenForm('flag')
        }
    ]

    return (
        <ActionButtons heading='Emergency Action' icon={<FaHourglassHalf />} data={btnList} />
    )
}

export default RestaurantAction
