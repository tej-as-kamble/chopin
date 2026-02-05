import { InfoCard } from '@chopin/ui-web';
import { BiSolidContact } from "react-icons/bi";

const DeliveryPartnerInfo = ({ data }) => {
    if (!data) return;

    const rows = [
        { label: "Partner ID", value: data.id },
        { label: "Full Name", value: data.name },
        { label: "Joining Date", value: data.joinDate },
        { label: "Vehicle Type", value: data.vehicle.type },
        { label: "Vehicle Number", value: data.vehicle.plate },
        { label: "Address", value: data.address },
        { label: "Area", value: data.area },
        { label: "Contact", value: data.contact }
    ]

    return (
        <InfoCard heading="Delivery Partner Information" icon={<BiSolidContact />} data={rows} />
    )
}

export default DeliveryPartnerInfo
