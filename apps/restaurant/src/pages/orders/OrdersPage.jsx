import React, { useState } from "react";
import "./OrdersPage.css";
import StatusTabs from "@/components/orders/StatusTabs";
import OrdersList from "@/components/orders/OrdersList";
import { ORDERS_DUMMY } from "@/data/ORDERS_DUMMY";
import { Outlet, useParams } from "react-router-dom";

const OrdersPage = () => {
  const [activeStatus, setActiveStatus] = useState("accepted");
  const { orderId } = useParams();

  const filteredOrders = ORDERS_DUMMY.filter(
    (order) => order.status === activeStatus
  );

  return (
    <>
      {!orderId && (
        <div className="rd-orders-page">
          <StatusTabs
            activeStatus={activeStatus}
            onChangeStatus={setActiveStatus}
          />
        </div>
      )}

      {!orderId && (
        <div className="rd-orders-layout">
          <OrdersList
            orders={filteredOrders}
          />
        </div>
      )}

      <Outlet />
    </>
  );
};

export default OrdersPage;
