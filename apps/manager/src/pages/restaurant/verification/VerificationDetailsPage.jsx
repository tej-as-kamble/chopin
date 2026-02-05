import { useState, useEffect } from 'react';
import './VerificationDetailsPage.css';
import { generateVerificationData } from '@/data/verificationDetailsData';
import { PageHeader, PageLayout, Toast } from '@chopin/ui-web';
import RestaurantInfo from '@/components/restaurant/details/RestaurantInfo';
import DocTable from '@/components/restaurant/verification/DocTable';
import HistoryCard from '@/components/restaurant/verification/HistoryCard';
import ActionCard from '@/components/restaurant/verification/ActionCard';

import ApproveForm from '@/components/restaurant/verification/forms/ApproveForm';
import RejectForm from '@/components/restaurant/verification/forms/RejectForm';
import ReuploadForm from '@/components/restaurant/verification/forms/ReuploadForm';
import FlagForm from '@/components/restaurant/verification/forms/FlagForm';
import ScheduleForm from '@/components/restaurant/verification/forms/ScheduleForm';


const VerificationDetailsPage = () => {
  const [data, setData] = useState(null);
  const [activeForm, setActiveForm] = useState(null);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    const fetchedData = generateVerificationData();
    setData(fetchedData);
  }, []);

  if (!data) return <div className="loading-state">Loading Details...</div>;


  const headerStats = [
    { label: "Status", value: data.status },
    { label: "Last Updated", value: new Date(data.lastUpdated).toLocaleDateString() },
  ];

  const TopLeftSections = [
    {
      id: 'primary-info',
      compo: <RestaurantInfo data={data.entity} />
    },
    {
      id: 'docs-table',
      compo: <DocTable data={data.documents} />
    },
  ];

  const RightSections = [
    {
      id: 'history',
      compo: <HistoryCard data={data.history} />
    },
    {
      id: 'actions',
      compo: <ActionCard onOpenForm={setActiveForm} data={data} />
    }
  ];



  const handleAction = (actionType, note) => {
    const newLog = {
      id: Date.now(),
      action: actionType,
      actor: "You (Area Manager)",
      timestamp: new Date().toISOString(),
      note: note
    };

    let newStatus = data.status;
    if (actionType === "Approve") newStatus = "Approved";
    if (actionType.includes("schedule")) newStatus = "Schedule";
    if (actionType === "Reject") newStatus = "Rejected";
    if (actionType === "Request Re-upload") newStatus = "Needs Info";
    if (actionType.includes("Flag")) newStatus = "Flagged";

    setData(prev => ({
      ...prev,
      status: newStatus,
      history: [...prev.history, newLog]
    }));

    setActiveForm(null);
    setToast(`${actionType} successful: ${note}`);
    setTimeout(() => setToast(null), 1500);
  };


  const renderActiveModal = () => {
    switch (activeForm) {
      case 'approve':
        return <ApproveForm onClose={() => setActiveForm(null)} onConfirm={(reason) => handleAction("Approve", reason)} />;
      case 'schedule':
        return <ScheduleForm onClose={() => setActiveForm(null)} onConfirm={(reason) => handleAction("Schedule", reason)} />;
      case 'reject':
        return <RejectForm onClose={() => setActiveForm(null)} onConfirm={(reason) => handleAction("Reject", reason)} />;
      case 'reupload':
        return <ReuploadForm documents={data.documents} onClose={() => setActiveForm(null)} onConfirm={(reason) => handleAction("Request Re-upload", reason)} />;
      case 'flag':
        return <FlagForm onClose={() => setActiveForm(null)} onConfirm={(reason) => handleAction("Flagged", reason)} />;
      default: return null;
    }
  };

  return (
    <>
      <div className='rvd-container'>
        <PageHeader
          title="Verification"
          subtitle={`${data.entity.tradeName} • ${data.verificationId}`}
          stats={headerStats}
        />
        <PageLayout
          TopLeftSections={TopLeftSections}
          RightSections={RightSections}
        />
      </div>

      {renderActiveModal()}
      {toast && <Toast msg={toast} pos='top-right' />}
    </>
  );
};

export default VerificationDetailsPage;