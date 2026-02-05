import { BsFillFileBarGraphFill } from "react-icons/bs";
import { OrderTimeline } from "@chopin/ui-web";

const OrderTracking = ({ data }) => {

  const timelineData = data.map((step) => {
    return {
      status: step.isActive,
      isCompleted: step.isCompleted,
      label: step.status,
      time: step.time,
    }
  })

  return (
    <OrderTimeline heading="Order Tracking" icon={<BsFillFileBarGraphFill />} data={timelineData} />
  )
}

export default OrderTracking
