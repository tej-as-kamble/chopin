import { useState, useEffect } from 'react';
import './OrdersPage.css';
import { ordersData } from '@/data/ordersData';
import { LoadingSpinner, PageHeader } from '@chopin/ui-web';
import OrderList from '@/components/orders/OrderList';

const AllOrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setOrders(ordersData);
      setLoading(false);
    }, 800);
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
      label: "Out for Delivery",
      value: orders.filter(t => t.status === 'Out for Delivery').length,
    },
    {
      label: "Delivered",
      value: orders.filter(t => t.status === 'Delivered').length,
    },
    {
      label: "Cancelled",
      value: orders.filter(t => t.status === 'Cancelled').length,
    },
  ];

  const filterOptions = [
    { value: '', label: 'All Orders' },
    { value: 'Placed', label: 'Placed' },
    { value: 'Preparing', label: 'Preparing' },
    { value: 'Out for Delivery', label: 'Out for Delivery' },
    { value: 'Delivered', label: 'Delivered' },
    { value: 'Cancelled', label: 'Cancelled' },
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
          <LoadingSpinner msg='Syncing All Orders...' />
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