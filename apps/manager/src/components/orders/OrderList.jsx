import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaDownload } from 'react-icons/fa';
import { TableToolbar, TableTable } from '@chopin/ui-web';

const getStatusClass = (status) => {
    const map = {
        'Placed': 'status-placed',
        'Preparing': 'status-preparing',
        'Ready': 'status-ready',
        'Out for Delivery': 'status-out',
        'Delivered': 'status-delivered',
        'Cancelled': 'status-cancelled'
    };
    return map[status] || 'status-placed';
};

const OrderList = ({ data, filterOptions = [], ToolbarReq = true }) => {
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
            title: 'Order ID',
            width: '10%',
            render: (data) => <span>{data.id}</span>
        },
        {
            key: 'restaurant',
            title: 'Restaurant',
            width: '10%',
            render: (data) => <>
                {data.restaurant}
                <div style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '2px' }}>
                    {data.items}
                </div>
            </>
        },
        {
            key: 'total',
            title: 'Total',
            width: '10%',
            render: (data) => <span>{data.total}</span>
        },
        {
            key: 'driver',
            title: 'Driver',
            width: '10%',
            render: (data) => <span>{data.driver}</span>
        },
        {
            key: 'customer',
            title: 'Customer',
            width: '10%',
            render: (data) => <span>{data.customer}</span>
        },
        {
            key: 'time',
            title: 'Time',
            width: '10%',
            render: (data) => <span>{data.time}</span>
        },
        {
            key: 'status',
            title: 'Status',
            width: '10%',
            render: (data) => <div className={`orders-page-status-badge orders-page-${getStatusClass(data.status)}`}>
                <span className="orders-page-status-indicator"></span>
                <span>{data.status}</span>
            </div>
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
            resultData = resultData.filter(order => order.status === sourceFilter);
        }

        const delayDebounceFn = setTimeout(() => {
            if (!searchTerm) {
                setFilteredData(resultData);
                return;
            }

            const lowerTerm = searchTerm.toLowerCase();
            const results = resultData.filter((ticket) => {
                return Object.values(ticket).some((val) => {
                    if (val === null || val === undefined) return false;
                    return String(val).toLowerCase().includes(lowerTerm);
                });
            });

            setFilteredData(results);

        }, 300);

        return () => clearTimeout(delayDebounceFn);

    }, [searchTerm, sourceFilter, data]);



    return (
        <div className="ticket-list-wrapper">
            {ToolbarReq && <TableToolbar
                search={search}
                filters={filterOptions.length > 0 ? filters : []}
                actions={actions}
            />}
            <TableTable
                columns={columns}
                data={filteredData}
                onRowClick={(order) => navigate(`/orders/view/${order.id}`)}
            />
        </div>
    );
};

export default OrderList;