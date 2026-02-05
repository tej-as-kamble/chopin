import { CardAccordion, SectionHeader } from '@chopin/ui-web';
import { FaQuoteLeft } from "react-icons/fa";

const Faq = () => {
    const FAQs = [
        {
            id: 1,
            question: "What is my primary responsibility as an Area Manager?",
            answer: "You oversee operational health within your assigned area, including issue escalation, partner verification, area monitoring, and emergency actions to ensure smooth order fulfillment."
        },
        {
            id: 2,
            question: "Which actions are restricted for Area Managers?",
            answer: "Area Managers cannot modify commissions, pricing, payouts, tax settings, or create platform offers. Financial decisions and global overrides are handled by Admins."
        },
        {
            id: 3,
            question: "When should I intervene in an order issue?",
            answer: "You should intervene when an issue escalates beyond automated or level-1 support, such as repeated delivery failures, customer disputes, or partner complaints requiring manual review."
        },
        {
            id: 4,
            question: "Can I cancel or modify customer orders?",
            answer: "You may temporarily pause or flag problematic orders and escalate them. Refunds, pricing changes, or forced cancellations require Admin approval."
        },
        {
            id: 5,
            question: "What restaurant verifications do I handle?",
            answer: "You verify restaurant documents including FSSAI license, GST details, bank information, and address proofs. You may approve, reject, or request re-uploads based on compliance."
        },
        {
            id: 6,
            question: "Can I pause a restaurant’s operations?",
            answer: "Yes. Restaurants can be temporarily paused during emergencies, compliance failures, or severe operational issues. All such actions are logged and Admins are automatically notified."
        },
        {
            id: 7,
            question: "What control do I have over delivery partners?",
            answer: "You can monitor activity, review complaints, temporarily restrict or flag delivery partners, and escalate serious misconduct. Payouts and incentives are managed by Admins."
        },
        {
            id: 8,
            question: "How is area performance monitored?",
            answer: "Area performance is tracked through real-time metrics such as active restaurants, delivery partner availability, average delivery time, and complaint density within your assigned region."
        },
        {
            id: 9,
            question: "How are peak-hour delivery surges managed?",
            answer: "Peak-hour surges are handled through real-time area monitoring, delivery partner availability tracking, and temporary operating controls. Managers may restrict slots or pause low-capacity zones to maintain service stability."
        },
        {
            id: 10,
            question: "Can I restrict operations during festivals or emergencies?",
            answer: "Yes. You can define or lock operating windows during festivals, weather disruptions, maintenance, or resource shortages to prevent service breakdowns."
        },
        {
            id: 11,
            question: "When should an issue be escalated to Admin?",
            answer: "Escalate cases involving legal risks, suspected fraud, repeated violations, or situations requiring permanent blocks or policy overrides."
        },
        {
            id: 12,
            question: "What reports and analytics can I access?",
            answer: "You have read-only access to operational KPIs including average delivery time, cancellation rate, complaint trends, and area performance summaries."
        },
        {
            id: 13,
            question: "Are my actions tracked for accountability?",
            answer: "Yes. All approvals, rejections, pauses, restrictions, and escalations are recorded in the audit log with timestamps and remarks."
        },
        {
            id: 14,
            question: "What qualifies as an emergency action?",
            answer: "Emergency actions include safety risks, severe service disruptions, compliance violations, or fraud indicators. You may immediately pause affected entities, with automatic Admin notification."
        }
    ];

    return (
        <>
            <SectionHeader
                heading={"FAQs"}
                icon={<FaQuoteLeft />}
            />
            <CardAccordion data={FAQs} />
        </>
    )
}

export default Faq
