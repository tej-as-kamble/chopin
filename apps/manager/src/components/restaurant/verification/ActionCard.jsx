import { ActionButtons, InfoCard } from '@chopin/ui-web'
import { FiCheckSquare, FiFlag, FiRepeat, FiX } from 'react-icons/fi'
import { IoMdOpen } from 'react-icons/io';
import { IoSettingsSharp } from "react-icons/io5";
import { LuCalendarCheck } from "react-icons/lu";
import { MdDashboardCustomize } from 'react-icons/md';

const ActionCard = ({ onOpenForm, data }) => {

  const btnList = [
    {
      id: 'approve',
      text: "Approve Verification",
      icon: <FiCheckSquare />,
      action: () => onOpenForm('approve')
    },
    {
      id: 'schedule',
      text: "Schedule Physical Verification",
      icon: <LuCalendarCheck />,
      action: () => onOpenForm('schedule')
    },
    {
      id: 'reupload',
      text: "Request Re-upload",
      icon: <FiRepeat />,
      action: () => onOpenForm('reupload')
    },
    {
      id: 'reject',
      text: "Reject Entity",
      icon: <FiX />,
      action: () => onOpenForm('reject')
    },
    {
      id: 'flag',
      text: "Flag (Fraud/Duplicate)",
      icon: <FiFlag />,
      action: () => onOpenForm('flag')
    },
  ]

  const rows = [
    {
      label: "View Restaurant",
      value: data.restId ? (
        <a href={`/restaurants/view/${data.restId}`} target="_blank" rel="noopener noreferrer" className="verification-context-link">
          <span>{data.restId}</span>
          <IoMdOpen fontSize={12} />
        </a>
      ) : (
        <span>No Context</span>
      )
    }
  ]

  return (
    <>
      {data.status === "Approved" ?
        <InfoCard heading="Restaurant Context" icon={<MdDashboardCustomize />} data={rows} />
        :
        <ActionButtons heading='Action' icon={<IoSettingsSharp />} data={btnList} />
      }
    </>
  )
}

export default ActionCard
