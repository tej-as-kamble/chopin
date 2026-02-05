import './OpContext.css';
import { InfoCard } from '@chopin/ui-web';
import { MdDashboardCustomize } from "react-icons/md";
import { IoMdOpen } from "react-icons/io";

const OpContext = ({ data }) => {
    if (!data) return;

    const rows = [
        {
            label: "Order",
            value: data.orderId ? (
                <a href={`/orders/view/${data.orderId}`} target="_blank" rel="noopener noreferrer" className="op-context-link">
                    <span>{data.orderId}</span>
                    <IoMdOpen fontSize={12} />
                </a>
            ) : (
                <span>No Context</span>
            )
        },
        {
            label: "Customer",
            value: data.customerId ? (
                <a href={`/customers/view/${data.customerId}`} target="_blank" rel="noopener noreferrer" className="op-context-link">
                    <span>{data.customerId}</span>
                    <IoMdOpen fontSize={12} />
                </a>
            ) : (
                <span>No Context</span>
            )
        },
        {
            label: "Delivery Partner",
            value: data.deliveryPartId ? (
                <a href={`/partners/view/${data.deliveryPartId}`} target="_blank" rel="noopener noreferrer" className="op-context-link">
                    <span>{data.deliveryPartId}</span>
                    <IoMdOpen fontSize={12} />
                </a>
            ) : (
                <span>No Context</span>
            )
        },
        {
            label: "Restaurant Partner",
            value: data.restId ? (
                <a href={`/restaurants/view/${data.restId}`} target="_blank" rel="noopener noreferrer" className="op-context-link">
                    <span>{data.restId}</span>
                    <IoMdOpen fontSize={12} />
                </a>
            ) : (
                <span>No Context</span>
            )
        }
    ]

    return (
        <InfoCard heading="Operational Context" icon={<MdDashboardCustomize />} data={rows} />
    )
}

export default OpContext
