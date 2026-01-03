import OrderStatusSection from "@/components/Order/OrderDetails/OrderStatusSection";
import OrderActions from "@/components/Order/OrderDetails/OrderActions";
import OrderSummary from "@/components/Order/OrderDetails/OrderSummary";
import OrderAddress from "@/components/Order/OrderDetails/OrderAddress";
import OrderPaymentDetails from "@/components/Order/OrderDetails/OrderPaymentDetails";
import "@/components/Order/OrderDetails/OrderDetails.css";


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
