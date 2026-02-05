import { useEffect, useState } from 'react';
import './VerificationList.css';
import { TableToolbar, TableTable } from '@chopin/ui-web';
import { useNavigate } from 'react-router-dom';
import { FaDownload } from 'react-icons/fa';


export default function VerificationList({ data, filterOptions = [], ToolbarReq = true }) {
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
            width: '6%',
            render: (data) => <span>{data.id}</span>
        },
        {
            key: 'restaurant',
            title: 'Restaurant',
            width: '10%',
            render: (data) => <span>{data.restaurant}</span>
        },
        {
            key: 'docsType',
            title: 'Document Type',
            width: '10%',
            render: (data) => <span>{data.docType}</span>
        },
        {
            key: 'data',
            title: 'Date',
            width: '10%',
            render: (data) => <span>{data.date}</span>
        },
        {
            key: 'status',
            title: 'Status',
            width: '10%',
            render: (data) => <span className={`v-badge ${data.status.toLowerCase()}`}>{data.status}</span>
        },
        {
            key: 'action',
            title: 'Action',
            width: '6%',
            render: () => <span style={{ color: "blue" }}>Review</span>
        },
    ];


    useEffect(() => {
        let resultData = data;
        if (sourceFilter) {
            resultData = resultData.filter(t => t.status === sourceFilter);
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
        <div className="v-list-layout">
            {ToolbarReq && <TableToolbar
                search={search}
                filters={filterOptions.length > 0 ? filters : []}
                actions={actions}
            />}

            <TableTable
                columns={columns}
                data={filteredData}
                onRowClick={(order) => navigate(`/restaurants/verifications/${order.id}`)}
            />
        </div>
    );
}