import { InfoCard } from "@chopin/ui-web"
import { BiSolidContact } from "react-icons/bi";

const CustomerInfo = ({ data }) => {
    if (!data) return;

    const rows = [
        { label: "Customer ID", value: data.customerId },
        { label: "Full Name", value: data.customerName },
        { label: "Delivery Address", value: data.customerAddress },
        { label: "Area", value: data.area },
        { label: "Contact", value: data.customerContact },
        { label: "Order Count", value: data.customerOrderCount },
        { label: "Cancellation Rate", value: data.customerCancellationRate },
    ]

    return (
        <InfoCard heading="Customer Information" icon={<BiSolidContact />} data={rows} />
    )
}

export default CustomerInfo
