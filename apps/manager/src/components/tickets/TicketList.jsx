import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TableToolbar, TableTable } from '@chopin/ui-web';
import {
  FaUser,
  FaStore,
  FaMotorcycle,
  FaExclamationCircle,
  FaClock,
  FaDownload,
} from 'react-icons/fa';
import './TicketList.css';


const getSourceIcon = (source) => {
  switch (source) {
    case 'Restaurant': return <FaStore />;
    case 'Delivery Partner': return <FaMotorcycle />;
    default: return <FaUser />;
  }
};

const TicketList = ({ data }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [sourceFilter, setSourceFilter] = useState('');
  const [filteredTickets, setFilteredTickets] = useState([]);


  const search = {
    value: searchTerm,
    onChange: setSearchTerm,
    placeholder: "Search"
  };

  const filters = [
    {
      label: "Source",
      value: sourceFilter,
      onChange: setSourceFilter,
      options: [
        { value: '', label: 'All' },
        { value: 'Customer', label: 'Customer' },
        { value: 'Restaurant', label: 'Restaurant' },
        { value: 'Delivery Partner', label: 'Delivery Partner' },
      ]
    },
  ];

  const actions = [
    {
      label: "Export",
      icon: <FaDownload />,
      variant: "secondary",
      onClick: () => console.log("Exporting...")
    },
  ];




  const columns = [
    {
      key: 'id',
      title: 'ID',
      width: '10%',
      render: (ticket) => <span>{ticket.id}</span>
    },
    {
      key: 'title',
      title: 'Issue',
      width: '10%',
      render: (ticket) => <span>{ticket.title}</span>
    },
    {
      key: 'source',
      title: 'Source',
      width: '10%',
      render: (ticket) => (
        <span className={`tl-source-badge ${ticket.source.toLowerCase().replace(' ', '-')}`}>
          {getSourceIcon(ticket.source)} {ticket.source}
        </span>
      )
    },
    {
      key: 'priority',
      title: 'Priority',
      width: '10%',
      render: (ticket) => (
        <span className={`tl-pill priority-${ticket.priority.toLowerCase()}`}>
          {ticket.priority === 'High' && <FaExclamationCircle className="pill-icon" />}
          {ticket.priority}
        </span>
      )
    },
    {
      key: 'status',
      title: 'Status',
      width: '10%',
      render: (ticket) => (
        <>
          <span className={`tl-status-dot status-${ticket.status.toLowerCase().replace(' ', '-')}`}></span>
          {ticket.status}
        </>
      )
    },
    {
      key: 'createdAt',
      title: 'Created',
      width: '10%',
      render: (ticket) => <><FaClock /> {ticket.createdAt}</>
    },
    {
      key: 'action',
      title: 'Action',
      width: '6%',
      render: () => <span style={{ color: "blue" }}>View</span>
    },
  ];

  useEffect(() => {
    let resultData = data;
    if (sourceFilter) {
      resultData = resultData.filter(ticket => ticket.source === sourceFilter);
    }

    const delayDebounceFn = setTimeout(() => {
      if (!searchTerm) {
        setFilteredTickets(resultData);
        return;
      }

      const lowerTerm = searchTerm.toLowerCase();
      const results = resultData.filter((ticket) => {
        return Object.values(ticket).some((val) => {
          if (val === null || val === undefined) return false;
          return String(val).toLowerCase().includes(lowerTerm);
        });
      });

      setFilteredTickets(results);

    }, 300);

    return () => clearTimeout(delayDebounceFn);

  }, [searchTerm, sourceFilter, data]);



  return (
    <div className="ticket-list-wrapper">
      <TableToolbar
        search={search}
        filters={filters}
        actions={actions}
      />
      <TableTable
        columns={columns}
        data={filteredTickets}
        onRowClick={(ticket) => navigate(`/tickets/view/${ticket.id}`)}
      />
    </div>
  );
};

export default TicketList;