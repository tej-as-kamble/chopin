import { useState, useEffect } from 'react';
import { getPartnerDetails } from '@/data/deliveryPartnerDetailData';
import './DeliveryPartnerDetailsPage.css';

import DeliveryPartnerInfo from '@/components/delivery/details/DeliveryPartnerInfo';
import DeliveryPartnerActions from '@/components/delivery/details/DeliveryPartnerActions';
import Ratings from '@/components/delivery/details/Ratings';
import WarningForm from '@/components/delivery/forms/WarningForm';
import FlagForm from '@/components/delivery/forms/FlagForm';

import { LoadingSpinner, MetricCard, PageHeader, PageLayout, Toast } from '@chopin/ui-web';

const DeliveryPartnerDetailsPage = () => {
  const [data, setData] = useState(null);
  const [activeForm, setActiveForm] = useState(null);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      const fetchedData = getPartnerDetails();
      setData(fetchedData);
    }, 600);
  }, []);

  if (!data) return <LoadingSpinner msg='Loading Details...' />


  const TopLeftSections = [
    {
      id: 'primary-info',
      compo: <DeliveryPartnerInfo data={data} />
    },
  ];

  const MiddleLeftSections = data.metrics.map((m) => (
    {
      id: m.id,
      compo: (
        <MetricCard
          label={m.label}
          value={m.value}
        />
      )
    }
  ));

  const RightSections = [
    {
      id: 'actions',
      compo: <DeliveryPartnerActions onOpenForm={setActiveForm} />
    },
    {
      id: 'ratings',
      compo: <Ratings rating={data.rating} data={data.reviews} />
    }
  ];

  const handleAction = (actionType, note) => {
    setActiveForm(null);
    setToast(`${actionType} successful: ${note}`);
    setTimeout(() => setToast(null), 1500);
  };

  const renderActiveModal = () => {
    switch (activeForm) {
      case 'warning':
        return <WarningForm onClose={() => setActiveForm(null)} onConfirm={(reason) => handleAction("Warning", reason)} />;
      case 'flag':
        return <FlagForm onClose={() => setActiveForm(null)} onConfirm={(reason) => handleAction("Flag", reason)} />;
      default: return null;
    }
  };

  return (
    <>
      <div className='delivery-partner-details-page'>
        <PageHeader
          title="Delivery Partner Details"
          subtitle={data.area}
          stats={[{ label: "Status", value: data.status }]}
        />

        <PageLayout
          TopLeftSections={TopLeftSections}
          MiddleLeftSections={MiddleLeftSections}
          RightSections={RightSections}
        />
      </div>

      {renderActiveModal()}
      {toast && <Toast msg={toast} pos='top-right' />}
    </>
  );
};

export default DeliveryPartnerDetailsPage;