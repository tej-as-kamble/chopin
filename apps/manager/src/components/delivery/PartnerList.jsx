import './PartnerList.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TableToolbar, TableTable } from '@chopin/ui-web';
import { FiAlertCircle, FiClock } from 'react-icons/fi';


const StatusBadge = ({ status }) => {
  const getStatusClass = (s) => {
    switch (s) {
      case 'Active': return 'badge-active';
      case 'On Delivery': return 'badge-delivery';
      case 'Idle': return 'badge-idle';
      case 'Paused': return 'badge-paused';
      default: return '';
    }
  };
  return <span className={`status-badge ${getStatusClass(status)}`}>{status}</span>;
};

const PartnerList = ({ data, filterOptions = [], ToolbarReq = true }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [sourceFilter, setSourceFilter] = useState();
  const [filteredData, setFilteredData] = useState([]);

  const search = {
    value: searchTerm,
    onChange: setSearchTerm,
    placeholder: "Search"
  };


  const filters = [
    {
      label: "Status",
      value: sourceFilter,
      onChange: setSourceFilter,
      options: filterOptions
    },
  ];



  const columns = [
    {
      key: 'id',
      title: 'Order ID',
      width: '6%',
      render: (data) => <span>{data.id}</span>
    },
    {
      key: 'name',
      title: 'Partner Name',
      width: '10%',
      render: (data) => <span>{data.name}</span>
    },
    {
      key: 'status',
      title: 'Current Status',
      width: '10%',
      render: (data) => <StatusBadge status={data.status} />
    },
    {
      key: 'activeOrderId',
      title: 'Activity',
      width: '10%',
      render: (data) =>
        data.activeOrderId ? (
          <span className="active-order">
            <FiClock className="icon-small" /> Order {data.activeOrderId}
          </span>
        ) : (
          <span className="no-order">Last active {data.lastActive}</span>
        )
    },
    {
      key: 'attention',
      title: 'Attention',
      width: '10%',
      render: (data) =>
        data.issues.length > 0 ? (
          <div className="issue-tag">
            <FiAlertCircle /> {data.issues[0]}
          </div>
        ) : (
          <span className="all-good">No recent flags</span>
        )
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
      resultData = resultData.filter(partner => partner.status === sourceFilter);
    }

    const delayDebounceFn = setTimeout(() => {
      if (!searchTerm) {
        setFilteredData(resultData);
        return;
      }

      const lowerTerm = searchTerm.toLowerCase();
      const results = resultData.filter((partner) => {
        return Object.values(partner).some((val) => {
          if (val === null || val === undefined) return false;
          return String(val).toLowerCase().includes(lowerTerm);
        });
      });

      setFilteredData(results);

    }, 300);

    return () => clearTimeout(delayDebounceFn);

  }, [searchTerm, sourceFilter, data]);


  return (
    <div className="pl-container">
      {ToolbarReq && <TableToolbar
        search={search}
        filters={filterOptions.length > 0 ? filters : []}
      />}

      <TableTable
        columns={columns}
        data={filteredData}
        onRowClick={(order) => navigate(`/partners/view/${order.id}`)}
      />
    </div >
  );
};

export default PartnerList;