import { ActionButtons } from '@chopin/ui-web'
import { FiCheckSquare } from 'react-icons/fi'
import { IoSettingsSharp } from "react-icons/io5";
import { RiRefund2Line } from "react-icons/ri";
import { VscFeedback } from "react-icons/vsc";


const ActionCard = ({ onOpenForm, data }) => {
    const btnList = [
        {
            id: 'approve',
            text: "Mark as Resolve",
            icon: <FiCheckSquare />,
            action: () => onOpenForm('resolve')
        },
        {
            id: 'neutral',
            text: "Feedback for Admin",
            icon: <VscFeedback />,
            action: () => onOpenForm('feedback')
        }
    ]

    if (data.source === "Customer") {
        btnList.push({
            id: 'flag',
            text: "Approve Refund",
            icon: <RiRefund2Line />,
            action: () => onOpenForm('refund')
        });
    }

    return (
        <ActionButtons heading='Action' icon={<IoSettingsSharp />} data={btnList} />
    )
}

export default ActionCard
