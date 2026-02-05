import { useState, useEffect } from 'react';
import './TicketDetailsPage.css';
import { getTicketDetails } from '@/data/ticketDetailsData';

import { LoadingSpinner, PageHeader, PageLayout, Toast } from '@chopin/ui-web';
import TicketInfo from '@/components/tickets/details/TicketInfo';
import OpContext from '@/components/tickets/details/OpContext';
import TimelineCard from '@/components/tickets/details/TimelineCard';
import ActionCard from '@/components/tickets/details/ActionCard';
import DirectMessage from '@/components/tickets/details/DirectMessage';
import ResolveForm from '@/components/tickets/forms/ResolveForm';
import RefundForm from '@/components/tickets/forms/RefundForm';
import FeedbackForm from '@/components/tickets/forms/FeedbackForm';


const TicketDetailsPage = () => {
  const [data, setData] = useState(null);
  const [activeForm, setActiveForm] = useState(null);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    setData(getTicketDetails());
  }, []);

  if (!data) return <LoadingSpinner msg='Loading Ticket Context...' />


  const headerStats = [
    { label: "Ticket ID", value: data.id },
    { label: "Status", value: data.status },
  ];

  const TopLeftSections = [
    {
      id: 'ticket-info',
      compo: <TicketInfo data={data} />
    },
  ];

  const BottomLeftSections = [
    {
      id: 'context',
      compo: <OpContext data={data.context} />
    },
    {
      id: 'message',
      compo: <DirectMessage data={data} />
    },
  ]

  const RightSections = [
    {
      id: 'timeline',
      compo: <TimelineCard data={data.timeline} />
    },
    {
      id: 'actions',
      compo: <ActionCard data={data} onOpenForm={setActiveForm} />
    }
  ]

  const handleAction = (actionType, note) => {
    setActiveForm(null);
    setToast(`${actionType} successful: ${note}`);
    setTimeout(() => setToast(null), 1500);
  };


  const renderActiveModal = () => {
    switch (activeForm) {
      case 'resolve':
        return <ResolveForm onClose={() => setActiveForm(null)} onConfirm={(reason) => handleAction("Resolve", reason)} />;
      case 'feedback':
        return <FeedbackForm onClose={() => setActiveForm(null)} onConfirm={(reason) => handleAction("Feedback", reason)} />;
      case 'refund':
        return <RefundForm onClose={() => setActiveForm(null)} onConfirm={(reason) => handleAction("Refund", reason)} />;
      default: return null;
    }
  };

  return (
    <div className="td-container">
      <PageHeader
        title="Ticket Details"
        subtitle="Area: Downtown Metro • Operations"
        stats={headerStats}
      />

      <PageLayout
        TopLeftSections={TopLeftSections}
        BottomLeftSections={BottomLeftSections}
        RightSections={RightSections}
      />

      {renderActiveModal()}
      {toast && <Toast msg={toast} pos='top-right' />}
    </div>
  );
};

export default TicketDetailsPage;