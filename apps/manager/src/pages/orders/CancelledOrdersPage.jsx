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
            const ongoingStatuses = ['Cancelled'];

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
            value: ordersData.length,
            className: ""
        },
        {
            label: "Cancelled",
            value: orders.filter(t => t.status === 'Cancelled').length,
        },
    ];


    return (
        <div className="orders-page">
            <PageHeader
                title="Cancelled Orders"
                subtitle="Area: Downtown Metro • Operations"
                stats={headerStats}
            />

            <main className="tp-main">
                {loading ? (
                    <LoadingSpinner msg='Syncing Cancelled Orders...' />
                ) : (
                    <OrderList
                        data={orders}
                    />
                )}
            </main>
        </div>
    );
};

export default AllOrdersPage;