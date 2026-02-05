import { useState, useEffect } from 'react';
import './Tickets.css';
import { generateTickets } from '@/data/ticketData';
import { LoadingSpinner, PageHeader } from '@chopin/ui-web';
import TicketList from '@/components/tickets/TicketList';
import { FaTicketAlt } from 'react-icons/fa';

const TicketsPage = () => {
    const [tickets, setTickets] = useState([]);
    const [loading, setLoading] = useState(true);

    const headerStats = [
        {
            label: "Open",
            value: tickets.filter(t => t.status === 'Open').length,
            className: "danger"
        },
        {
            label: "Resolved",
            value: tickets.filter(t => t.status === 'Resolved').length,
        },
        {
            label: "In Progress",
            value: tickets.filter(t => t.status === 'In Progress').length,
        }
    ];


    useEffect(() => {
        const loadData = () => {
            const ticketData = generateTickets(45);
            const ongoingStatuses = ['Open'];

            const filtered = ticketData.filter(ticket =>
                ongoingStatuses.includes(ticket.status)
            );

            setTickets(filtered);
            setLoading(false);
        };
        setTimeout(loadData, 800);
    }, []);

    return (
        <div className="tp-container">
            <PageHeader
                title="Open Tickets"
                subtitle="Area: Downtown Metro • Operations"
                stats={headerStats}
            />


            <main className="tp-main">
                {loading ? (
                    <LoadingSpinner msg='Syncing Tickets...' />
                ) : tickets.length === 0 ? (
                    <div className="tp-empty">
                        <FaTicketAlt className="tp-empty-icon" />
                        <h3>No Active Tickets</h3>
                        <p>Great job! Your area is currently incident-free.</p>
                    </div>
                ) : (
                    <TicketList data={tickets} />
                )}
            </main>
        </div>
    );
};

export default TicketsPage;