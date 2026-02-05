import { ActionButtons } from '@chopin/ui-web';
import { FaHourglassHalf } from "react-icons/fa";
import { GrStatusWarning } from "react-icons/gr";
import { FiFlag } from 'react-icons/fi';

const DeliveryPartnerActions = ({ onOpenForm }) => {
    const btnList = [
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

export default DeliveryPartnerActions
