import { OrderSummary } from '@chopin/ui-web'

const OrderInfo = ({ data, bill }) => {

  const Orderdata = data.map((food) => {
    return { label: food.item, quantity: food.quantity, price: food.price };
  })

  const billData = {
    method: bill.method,
    total: bill.total
  }

  return (
    <OrderSummary heading="Order Summary" Orderdata={Orderdata} billData={billData} />
  )
}

export default OrderInfo
