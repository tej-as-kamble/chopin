import { InfoCard } from "@chopin/ui-web"
import { FaHotel } from "react-icons/fa";

const RestaurantInfo = ({ data }) => {
    if (!data) return;

    const rows = [
        { label: "Entity ID", value: data.id },
        { label: "Legal Name", value: data.legalName },
        { label: "Trade Name", value: data.tradeName },
        { label: "Type", value: data.type },
        { label: "Address", value: data.address },
        { label: "Area", value: data.area },
        { label: "Manager", value: data.manager },
        { label: "Contact", value: data.contact }
    ]

    return (
        <InfoCard heading="Restaurant Information" icon={<FaHotel />} data={rows} />
    )
}

export default RestaurantInfo
