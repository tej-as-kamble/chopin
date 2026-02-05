import { InfoCard } from "@chopin/ui-web";
import { MdStickyNote2 } from "react-icons/md";

const TicketInfo = ({ data }) => {
    if (!data) return;

    const rows = [
        { label: "Source", value: data.source },
        { label: "Full Name", value: data.name },
        { label: "Category", value: data.category },
        { label: "Subject", value: data.subject },
        { label: "Description", value: data.description },
        { label: "Created At", value: data.createdAt },
        { label: "Contact", value: data.contact }
    ]

    return (
        <InfoCard heading="Ticket Summary" icon={<MdStickyNote2 />} data={rows} />
    )
}

export default TicketInfo
