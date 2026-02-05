import { SectionHeader, TableTable } from '@chopin/ui-web';
import { RiCalendarScheduleFill } from "react-icons/ri";

const SlotList = ({ data }) => {
  const columns = [
    {
      key: 'date',
      title: 'Date',
      width: '10%',
      render: (data) => <span>{data.date}</span>
    },
    {
      key: 'onilne',
      title: 'Online From',
      width: '10%',
      render: (data) => <span>{data.restaurantSlot.start}</span>
    },
    {
      key: 'offline',
      title: 'Offline At',
      width: '10%',
      render: (data) => <span>{data.restaurantSlot.end}</span>
    },
    {
      key: 'status',
      title: 'Status',
      width: '10%',
      render: (data) => <span>{data.status}</span>
    },
    {
      key: 'activity',
      title: 'Any Activity',
      width: '10%',
      render: () => <span> No</span>
    },
  ]


  return (
    <>
      <SectionHeader
        heading={"Upcoming Schedule (7 Days)"}
        icon={<RiCalendarScheduleFill />}
      />
      <div className="upcoming-container">
        <TableTable
          columns={columns}
          data={data}
        />
      </div>
    </>
  );
};

export default SlotList;