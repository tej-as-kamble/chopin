import OrderStatusSection from "@/components/user/Order/OrderDetails/OrderStatusSection";
import OrderActions from "@/components/user/Order/OrderDetails/OrderActions";
import OrderSummary from "@/components/user/Order/OrderDetails/OrderSummary";
import OrderAddress from "@/components/user/Order/OrderDetails/OrderAddress";
import OrderPaymentDetails from "@/components/user/Order/OrderDetails/OrderPaymentDetails";
import "@/components/user/Order/OrderDetails/OrderDetails.css";


const OrderDetailsPage = () => {
  return (
    <div className="order-details-page">
      <OrderStatusSection />
      <OrderAddress />
      <OrderActions />
      <OrderSummary />
      <OrderPaymentDetails />
    </div>
  );
};

export default OrderDetailsPage;
