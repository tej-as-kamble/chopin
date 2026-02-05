import { useState, useEffect } from 'react';
import './Tickets.css';
import { generateTickets } from '@/data/ticketData';
import { PageHeader, LoadingSpinner } from '@chopin/ui-web';
import TicketList from '@/components/tickets/TicketList';

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
    setTimeout(() => {
      setTickets(generateTickets(45));
      setLoading(false);
    }, 800);
  }, []);

  return (
    <div className="tp-container">
      <PageHeader
        title="All Tickets"
        subtitle="Area: Downtown Metro • Operations"
        stats={headerStats}
      />


      <main className="tp-main">
        {loading ? (
          <LoadingSpinner msg='Syncing Tickets...' />
        ) : (
          <TicketList data={tickets} />
        )}
      </main>
    </div>
  );
};

export default TicketsPage;