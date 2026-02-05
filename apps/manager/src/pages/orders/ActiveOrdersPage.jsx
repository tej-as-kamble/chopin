import { useState, useEffect } from 'react';
import './OrdersPage.css';
import { ordersData } from '@/data/ordersData';
import { LoadingSpinner, PageHeader } from '@chopin/ui-web';
import OrderList from '@/components/orders/OrderList';

const AllOrdersPage = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = () => {
            const ongoingStatuses = ['Placed', 'Preparing', 'Ready', 'Out for Delivery'];

            const filtered = ordersData.filter(order =>
                ongoingStatuses.includes(order.status)
            );

            setOrders(filtered);
            setLoading(false);
        };

        setTimeout(loadData, 600);
    }, []);

    const headerStats = [
        {
            label: "Total Orders",
            value: orders.length,
            className: ""
        },
        {
            label: "Placed",
            value: orders.filter(t => t.status === 'Placed').length,
        },
        {
            label: "Ready",
            value: orders.filter(t => t.status === 'Ready').length,
        },
        {
            label: "Out for Delivery",
            value: orders.filter(t => t.status === 'Out for Delivery').length,
        },
    ];

    const filterOptions = [
        { value: '', label: 'All Active Orders' },
        { value: 'Placed', label: 'Placed' },
        { value: 'Ready', label: 'Ready' },
        { value: 'Preparing', label: 'Preparing' },
        { value: 'Out for Delivery', label: 'Out for Delivery' },
    ];


    return (
        <div className="orders-page">
            <PageHeader
                title="All Orders"
                subtitle="Area: Downtown Metro • Operations"
                stats={headerStats}
            />

            <main className="tp-main">
                {loading ? (
                    <LoadingSpinner msg='Syncing Active Orders...' />
                ) : (
                    <OrderList
                        data={orders}
                        filterOptions={filterOptions}
                    />
                )}
            </main>
        </div>
    );
};

export default AllOrdersPage;